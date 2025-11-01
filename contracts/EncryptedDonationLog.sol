// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title Encrypted Anonymous Donation Log
/// @notice A contract for storing encrypted donation records that can only be decrypted by the donor
/// @author Encrypted Donation Log MVP
contract EncryptedDonationLog is SepoliaConfig {
    struct DonationRecord {
        address submitter;
        euint32 encryptedAmount;  // Encrypted donation amount
        euint32 encryptedTimestamp; // Encrypted timestamp
        uint256 blockNumber;       // Public block number for reference
        bool exists;
    }

    uint256 public nextRecordId;
    mapping(uint256 => DonationRecord) public records;
    mapping(address => uint256[]) public userDonations; // user address -> record IDs

    event DonationSubmitted(uint256 indexed recordId, address indexed submitter, uint256 blockNumber);
    event DonationDecrypted(uint256 indexed recordId, address indexed viewer);

    /// @notice Submit a new encrypted donation record
    /// @param encryptedAmount The encrypted donation amount
    /// @param encryptedTimestamp The encrypted timestamp
    /// @param inputProof The input proof for the encrypted values
    /// @return recordId The ID of the newly created record
    function submitDonation(
        externalEuint32 encryptedAmount,
        externalEuint32 encryptedTimestamp,
        bytes calldata inputProof
    ) external returns (uint256 recordId) {
        recordId = nextRecordId++;
        
        DonationRecord storage record = records[recordId];
        record.submitter = msg.sender;
        record.blockNumber = block.number;
        record.exists = true;

        // Import encrypted amount
        record.encryptedAmount = FHE.fromExternal(encryptedAmount, inputProof);
        FHE.allowThis(record.encryptedAmount);
        FHE.allow(record.encryptedAmount, msg.sender);

        // Import encrypted timestamp
        record.encryptedTimestamp = FHE.fromExternal(encryptedTimestamp, inputProof);
        FHE.allowThis(record.encryptedTimestamp);
        FHE.allow(record.encryptedTimestamp, msg.sender);

        // Index by user
        userDonations[msg.sender].push(recordId);

        emit DonationSubmitted(recordId, msg.sender, block.number);
    }

    /// @notice Get the encrypted amount for a donation record
    /// @param recordId The ID of the donation record
    /// @return The encrypted amount
    function getEncryptedAmount(uint256 recordId) external view returns (euint32) {
        require(records[recordId].exists, "Record does not exist");
        return records[recordId].encryptedAmount;
    }

    /// @notice Get the encrypted timestamp for a donation record
    /// @param recordId The ID of the donation record
    /// @return The encrypted timestamp
    function getEncryptedTimestamp(uint256 recordId) external view returns (euint32) {
        require(records[recordId].exists, "Record does not exist");
        return records[recordId].encryptedTimestamp;
    }

    /// @notice Get metadata for a donation record (public information)
    /// @param recordId The ID of the donation record
    /// @return submitter The address that submitted the donation
    /// @return blockNumber The block number when the donation was submitted
    function getRecordMetadata(uint256 recordId) external view returns (address submitter, uint256 blockNumber) {
        require(records[recordId].exists, "Record does not exist");
        DonationRecord storage record = records[recordId];
        return (record.submitter, record.blockNumber);
    }

    /// @notice Get the number of donations submitted by a user
    /// @param user The user address
    /// @return The number of donations
    function getUserDonationCount(address user) external view returns (uint256) {
        return userDonations[user].length;
    }

    /// @notice Get a donation record ID for a user at a specific index
    /// @param user The user address
    /// @param index The index in the user's donation list
    /// @return The record ID
    function getUserDonationIdAt(address user, uint256 index) external view returns (uint256) {
        require(index < userDonations[user].length, "Index out of bounds");
        return userDonations[user][index];
    }

    /// @notice Check if a record exists
    /// @param recordId The ID of the donation record
    /// @return Whether the record exists
    function recordExists(uint256 recordId) external view returns (bool) {
        return records[recordId].exists;
    }
}

