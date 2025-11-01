"use client";

import { useState, useEffect } from "react";
import { useAccount, useChainId } from 'wagmi';
import { readContract } from '@wagmi/core';
import { EncryptedDonationLogAddresses } from "@/abi/EncryptedDonationLogAddresses";
import { EncryptedDonationLogABI } from "@/abi/EncryptedDonationLogABI";
import { config as wagmiConfig } from "@/config/wagmi";

interface DonationStatsProps {
  totalRecords: number;
  userRecords: number;
}

export const DonationStats = ({ totalRecords, userRecords }: DonationStatsProps) => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const [stats, setStats] = useState({
    totalDonations: 0,
    userDonations: 0,
    isLoading: false
  });

  const contractAddress = chainId ? EncryptedDonationLogAddresses[chainId.toString()]?.address : undefined;

  useEffect(() => {
    const loadStats = async () => {
      if (!contractAddress || !isConnected) return;

      setStats(prev => ({ ...prev, isLoading: true }));

      try {
        // Get total records by reading nextRecordId
        const nextIdResult = await readContract(wagmiConfig, {
          address: contractAddress as `0x${string}`,
          abi: EncryptedDonationLogABI.abi,
          functionName: 'nextRecordId',
        });

        const totalDonations = typeof nextIdResult === 'bigint' ? Number(nextIdResult) : Number(nextIdResult || 0);

        // Get user donation count
        let userDonations = 0;
        if (address) {
          const userCountResult = await readContract(wagmiConfig, {
            address: contractAddress as `0x${string}`,
            abi: EncryptedDonationLogABI.abi,
            functionName: 'getUserDonationCount',
            args: [address as `0x${string}`],
          });
          userDonations = typeof userCountResult === 'bigint' ? Number(userCountResult) : Number(userCountResult || 0);
        }

        setStats({
          totalDonations,
          userDonations,
          isLoading: false
        });
      } catch (error) {
        console.error("Error loading donation stats:", error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    loadStats();
  }, [contractAddress, isConnected, address]);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Donation Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{stats.totalDonations}</div>
          <div className="text-sm text-gray-600">Total Donations</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-purple-600">{stats.userDonations}</div>
          <div className="text-sm text-gray-600">Your Donations</div>
        </div>
      </div>
      {stats.isLoading && (
        <div className="text-center text-gray-500 text-sm mt-2">Loading stats...</div>
      )}
    </div>
  );
};
