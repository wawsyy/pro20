"use client";

import { useState, useEffect, useCallback } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, usePublicClient, useChainId } from 'wagmi';
import { ethers } from "ethers";
import { readContract } from '@wagmi/core';
import { useEthersSigner } from "@/hooks/useEthersSigner";
import { useZamaInstance } from "@/hooks/useZamaInstance";
import { EncryptedDonationLogAddresses } from "@/abi/EncryptedDonationLogAddresses";
import { EncryptedDonationLogABI } from "@/abi/EncryptedDonationLogABI";
import { config as wagmiConfig } from "@/config/wagmi";
import { DonationStats } from "@/components/DonationStats";
import { DonationChart } from "@/components/DonationChart";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface DonationRecord {
  recordId: number;
  amount: string;
  timestamp: string;
  blockNumber: string;
}

export const DonationLogDemo = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId(); // Use useChainId hook for more reliable chain detection
  const publicClient = usePublicClient();
  const ethersSignerPromise = useEthersSigner({ chainId });
  
  // Get provider - use window.ethereum directly for EIP-1193 compatibility
  const provider = typeof window !== 'undefined' ? (window as any).ethereum : undefined;
  const { instance: zama, isLoading: zamaLoading, error: zamaError } = useZamaInstance(chainId, provider);
  const [mounted, setMounted] = useState(false);

  const [donationAmount, setDonationAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationRecords, setDonationRecords] = useState<DonationRecord[]>([]);
  const [isLoadingRecords, setIsLoadingRecords] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [decryptingRecordId, setDecryptingRecordId] = useState<number | null>(null);
  const [filterText, setFilterText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug: Log chainId changes
  useEffect(() => {
    if (mounted && chainId) {
      console.log('[DonationLogDemo] Current chainId:', chainId);
      console.log('[DonationLogDemo] Contract address:', EncryptedDonationLogAddresses[chainId.toString()]?.address);
    }
  }, [chainId, mounted]);

  const contractAddress = chainId ? EncryptedDonationLogAddresses[chainId.toString()]?.address : undefined;
  const isDeployed = contractAddress && contractAddress !== ethers.ZeroAddress;

  const loadDonationRecords = useCallback(async () => {
    if (!isConnected || !address || !contractAddress || !publicClient) return;

    setIsLoadingRecords(true);
    try {
      // Use viem readContract for view functions
      let count: bigint = 0n;
      try {
        const countResult = await readContract(wagmiConfig, {
          address: contractAddress as `0x${string}`,
          abi: EncryptedDonationLogABI.abi,
          functionName: 'getUserDonationCount',
          args: [address as `0x${string}`],
        });
        count = typeof countResult === 'bigint' ? countResult : BigInt(countResult || 0);
        console.log('[loadDonationRecords] getUserDonationCount result:', count);
      } catch (err: any) {
        // If call fails, user might have no records
        console.log('[loadDonationRecords] getUserDonationCount failed, assuming 0:', err.message);
        count = 0n;
      }

      const countNumber = Number(count);
      const records: DonationRecord[] = [];

      for (let i = 0; i < countNumber; i++) {
        try {
          const recordId = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getUserDonationIdAt',
            args: [address as `0x${string}`, BigInt(i)],
          });
          
          const metadata = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getRecordMetadata',
            args: [typeof recordId === 'bigint' ? recordId : BigInt(recordId)],
          });
          
          const recordIdNumber = typeof recordId === 'bigint' ? Number(recordId) : Number(recordId);
          
          // Type guard for metadata object
          // readContract returns a tuple [address, bigint] for getRecordMetadata
          let blockNumber: string;
          if (Array.isArray(metadata) && metadata.length >= 2) {
            // Handle tuple return type [address, blockNumber]
            const blockNum = metadata[1];
            blockNumber = typeof blockNum === 'bigint' ? blockNum.toString() : String(blockNum || '0');
          } else if (typeof metadata === 'object' && metadata !== null && 'blockNumber' in metadata) {
            // Handle object return type { submitter, blockNumber }
            const meta = metadata as { blockNumber?: bigint | number | string };
            if (typeof meta.blockNumber === 'bigint') {
              blockNumber = meta.blockNumber.toString();
            } else if (meta.blockNumber !== undefined) {
              blockNumber = meta.blockNumber.toString();
            } else {
              blockNumber = '0';
            }
          } else {
            // Fallback for other types
            blockNumber = String(metadata || '0');
          }
          
          records.push({
            recordId: recordIdNumber,
            amount: "Encrypted",
            timestamp: "Encrypted",
            blockNumber: blockNumber,
          });
        } catch (err) {
          console.error(`[loadDonationRecords] Error loading record ${i}:`, err);
        }
      }

      setDonationRecords(records);
    } catch (error: any) {
      console.error("[loadDonationRecords] Error loading records:", error);
      setMessage(`Failed to load donation records: ${error.message || 'Unknown error'}`);
    } finally {
      setIsLoadingRecords(false);
    }
  }, [isConnected, address, contractAddress, publicClient]);

  useEffect(() => {
    if (isConnected && contractAddress) {
      loadDonationRecords();
    }
  }, [isConnected, contractAddress, loadDonationRecords]);

  const handleSubmitDonation = async () => {
    if (!isConnected || !ethersSignerPromise || !zama || !contractAddress || !donationAmount) {
      setMessage("Please connect wallet and enter donation amount");
      return;
    }

    setIsSubmitting(true);
    setMessage("Submitting donation...");

    try {
      const signer = await ethersSignerPromise;
      const amount = parseInt(donationAmount);
      const timestamp = Math.floor(Date.now() / 1000);

      if (isNaN(amount) || amount <= 0) {
        setMessage("Please enter a valid donation amount");
        setIsSubmitting(false);
        return;
      }

      // Encrypt amount and timestamp
      const encryptedInput = await zama.createEncryptedInput(contractAddress, address!)
        .add32(amount)
        .add32(timestamp)
        .encrypt();

      const contract = new ethers.Contract(
        contractAddress,
        EncryptedDonationLogABI.abi,
        signer
      );

      const tx = await contract.submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );

      setMessage(`Transaction submitted: ${tx.hash}. Waiting for confirmation...`);
      await tx.wait();
      setMessage("Donation submitted successfully!");
      setDonationAmount("");
      await loadDonationRecords();
    } catch (error: any) {
      console.error("Error submitting donation:", error);
      setMessage(`Error: ${error.message || "Failed to submit donation"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDecryptRecord = async (recordId: number) => {
    if (!isConnected || !ethersSignerPromise || !zama || !contractAddress || !address) {
      setMessage("Please connect wallet");
      return;
    }

    setDecryptingRecordId(recordId);
    setMessage(`Decrypting record ${recordId}...`);

    try {
      const signer = await ethersSignerPromise;
      const contract = new ethers.Contract(
        contractAddress,
        EncryptedDonationLogABI.abi,
        signer
      );

      const encryptedAmount = await contract.getEncryptedAmount(recordId);
      const encryptedTimestamp = await contract.getEncryptedTimestamp(recordId);

      // Check if handles are zero (uninitialized)
      if (encryptedAmount === ethers.ZeroHash || encryptedTimestamp === ethers.ZeroHash) {
        setMessage("Record is not initialized");
        return;
      }

      // Generate keypair for decryption
      const keypair = zama.generateKeypair();

      // Decrypt amount
      const amountHandlePairs = [{
        handle: encryptedAmount,
        contractAddress: contractAddress,
      }];

      const startTimeStamp = Math.floor(Date.now() / 1000).toString();
      const durationDays = "10";
      const contractAddresses = [contractAddress];

      const eip712 = zama.createEIP712(
        keypair.publicKey,
        contractAddresses,
        startTimeStamp,
        durationDays
      );

      // Sign typed data
      const signature = await signer.signTypedData(
        eip712.domain,
        {
          UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification,
        },
        eip712.message
      );

      // Decrypt amount
      const amountResult = await zama.userDecrypt(
        amountHandlePairs,
        keypair.privateKey,
        keypair.publicKey,
        signature.replace("0x", ""),
        contractAddresses,
        address,
        startTimeStamp,
        durationDays,
      );

      const decryptedAmount = amountResult[encryptedAmount];

      // Decrypt timestamp (generate new keypair for second decryption)
      const timestampKeypair = zama.generateKeypair();
      const timestampHandlePairs = [{
        handle: encryptedTimestamp,
        contractAddress: contractAddress,
      }];

      const timestampEip712 = zama.createEIP712(
        timestampKeypair.publicKey,
        contractAddresses,
        startTimeStamp,
        durationDays
      );

      const timestampSignature = await signer.signTypedData(
        timestampEip712.domain,
        {
          UserDecryptRequestVerification: timestampEip712.types.UserDecryptRequestVerification,
        },
        timestampEip712.message
      );

      const timestampResult = await zama.userDecrypt(
        timestampHandlePairs,
        timestampKeypair.privateKey,
        timestampKeypair.publicKey,
        timestampSignature.replace("0x", ""),
        contractAddresses,
        address,
        startTimeStamp,
        durationDays,
      );

      const decryptedTimestamp = timestampResult[encryptedTimestamp];

      // Update the record in the list
      setDonationRecords(prev => prev.map(record => 
        record.recordId === recordId 
          ? {
              ...record,
              amount: decryptedAmount.toString(),
              timestamp: new Date(Number(decryptedTimestamp) * 1000).toLocaleString(),
            }
          : record
      ));

      setMessage(`Record ${recordId} decrypted successfully!`);
    } catch (error: any) {
      console.error("Error decrypting record:", error);
      setMessage(`Error: ${error.message || "Failed to decrypt record"}`);
    } finally {
      setDecryptingRecordId(null);
    }
  };

  const exportToCSV = () => {
    if (donationRecords.length === 0) {
      setMessage("No records to export");
      return;
    }

    setIsExporting(true);
    try {
      const csvData = [
        ['Record ID', 'Amount', 'Timestamp', 'Block Number'],
        ...donationRecords.map(record => [
          record.recordId.toString(),
          record.amount,
          record.timestamp,
          record.blockNumber
        ])
      ];

      const csvContent = csvData.map(row =>
        row.map(field => `"${field}"`).join(',')
      ).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `donation-records-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setMessage("Donation records exported successfully!");
    } catch (error) {
      setMessage("Failed to export records");
    } finally {
      setIsExporting(false);
    }
  };

  if (!mounted) {
    return (
      <div className="mx-auto mt-20">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="mx-auto mt-20">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Connect Your Wallet</h2>
          <p className="text-gray-600 mb-6 text-center">Please connect your wallet to start using the Encrypted Donation Log</p>
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    );
  }

  if (!isDeployed) {
    const chainName = chainId === 31337 ? 'Hardhat Local (31337)' : chainId === 11155111 ? 'Sepolia (11155111)' : `Chain ${chainId || 'unknown'}`;
    return (
      <div className="mx-auto mt-20">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Contract Not Deployed</h2>
          <p className="text-gray-600 text-center mb-4">
            The EncryptedDonationLog contract is not deployed on {chainName}. Please deploy it first.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 mb-4">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Debug Info:</strong>
            </p>
            <p className="text-xs text-gray-600 font-mono">
              Detected Chain ID: {chainId || 'undefined'}<br />
              Contract Address: {contractAddress || 'Not found'}<br />
              Wallet Connected: {isConnected ? 'Yes' : 'No'}
            </p>
          </div>
          {chainId === 31337 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>For Local Network:</strong> Make sure Hardhat node is running and run:<br />
                <code className="bg-blue-100 px-2 py-1 rounded">npx hardhat deploy --network localhost</code>
              </p>
            </div>
          )}
          {chainId === 11155111 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> You are connected to Sepolia testnet. Switch to Hardhat Local (31337) to use the local contract, or deploy the contract to Sepolia.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show relayer error message if on Sepolia
  const showRelayerError = chainId === 11155111 && zamaError && 
    (zamaError.includes('relayer') || zamaError.includes('Relayer') || zamaError.includes('network issue'));

  return (
    <div className="grid w-full gap-6 px-4">
      <div className="flex justify-end items-center gap-3">
        <ThemeToggle />
        <ConnectButton />
      </div>

      <DonationStats totalRecords={0} userRecords={donationRecords.length} />

      <DonationChart donations={[]} />

      {showRelayerError && (
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="text-yellow-600 text-xl">⚠️</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Zama Relayer Service Unavailable
              </h3>
              <p className="text-yellow-700 mb-3">
                The Zama relayer service for Sepolia testnet is currently unavailable. This may be due to:
              </p>
              <ul className="list-disc list-inside text-yellow-700 mb-3 space-y-1 text-sm">
                <li>Network connectivity issues</li>
                <li>Temporary service outage</li>
                <li>Firewall or proxy restrictions</li>
              </ul>
              <div className="bg-white rounded-lg p-3 mt-3">
                <p className="text-sm font-semibold text-gray-800 mb-2">💡 Recommended Solution:</p>
                <p className="text-sm text-gray-700">
                  Switch to <strong>Hardhat Local (31337)</strong> network to use mock mode for testing. 
                  Mock mode doesn't require the relayer service and works offline.
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  To switch: Click the wallet button above → Select "Hardhat Local" network
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Submit New Donation</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Donation Amount
            </label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={isSubmitting || zamaLoading}
            />
          </div>
          <button
            onClick={handleSubmitDonation}
            disabled={isSubmitting || zamaLoading || !donationAmount}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting || zamaLoading ? (
              <div className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                {isSubmitting ? "Submitting..." : "Loading..."}
              </div>
            ) : (
              "Submit Encrypted Donation"
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Donation Records</h2>
          <div className="flex gap-2">
            <button
              onClick={loadDonationRecords}
              disabled={isLoadingRecords}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              {isLoadingRecords ? "Loading..." : "Refresh"}
            </button>
            <button
              onClick={exportToCSV}
              disabled={isExporting || donationRecords.length === 0}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {isExporting ? "Exporting..." : "Export CSV"}
            </button>
          </div>
        </div>

        {donationRecords.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No donation records found</p>
        ) : (
          <div className="space-y-4">
            {/* Filter and Sort Controls */}
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Filter by record ID..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>

            {/* Filtered and Sorted Records */}
            {(() => {
              const filteredRecords = donationRecords
                .filter(record => record.recordId.toString().includes(filterText))
                .sort((a, b) => sortOrder === 'desc'
                  ? Number(b.recordId) - Number(a.recordId)
                  : Number(a.recordId) - Number(b.recordId)
                );

              return filteredRecords.map((record) => (
                <div key={record.recordId} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">Record ID: {record.recordId}</p>
                      <p className="text-lg font-semibold mt-2">
                        Amount: {record.amount}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Timestamp: {record.timestamp}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Block: {record.blockNumber}
                      </p>
                    </div>
                    {record.amount === "Encrypted" && (
                      <button
                        onClick={() => handleDecryptRecord(record.recordId)}
                        disabled={decryptingRecordId === record.recordId || zamaLoading}
                        className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        {decryptingRecordId === record.recordId ? "Decrypting..." : "Decrypt"}
                      </button>
                    )}
                  </div>
                </div>
              ));
            })()}
          </div>
        )}
      </div>

      {message && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">{message}</p>
        </div>
      )}

      {zamaError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Zama Error: {zamaError}</p>
        </div>
      )}
    </div>
  );
};

