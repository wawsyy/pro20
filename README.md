# Encrypted Anonymous Donation Log

A privacy-preserving donation tracking system built with FHEVM (Fully Homomorphic Encryption Virtual Machine) by Zama. This system allows users to submit encrypted donation records that can only be decrypted by the donor themselves, ensuring complete privacy for charitable contributions.

## Features

- **Encrypted Donation Records**: Submit donation amounts and timestamps in encrypted form
- **Private Decryption**: Only the donor can decrypt and view their own donation records
- **Anonymous Tracking**: Donation amounts and timestamps remain encrypted on-chain
- **User Privacy**: Protect low-key charitable activities from social pressure or identity exposure

## Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher
- **npm or yarn/pnpm**: Package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   npx hardhat vars set MNEMONIC

   # Set your Infura API key for network access
   npx hardhat vars set INFURA_API_KEY

   # Optional: Set Etherscan API key for contract verification
   npx hardhat vars set ETHERSCAN_API_KEY
   ```

3. **Compile and test**

   ```bash
   npm run compile
   npm run test
   ```

4. **Deploy to local network**

   ```bash
   # Start a local FHEVM-ready node
   npx hardhat node
   # Deploy to local network
   npx hardhat deploy --network localhost
   ```

5. **Deploy to Sepolia Testnet**

   ```bash
   # Deploy to Sepolia
   npx hardhat deploy --network sepolia
   # Verify contract on Etherscan
   npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
   ```

6. **Test on Sepolia Testnet**

   ```bash
   # Once deployed, you can run a simple test on Sepolia.
   npx hardhat test --network sepolia
   ```

## 馃搧 Project Structure

```
encrypted-donation-log/
鈹溾攢鈹€ contracts/              # Smart contract source files
鈹?  鈹斺攢鈹€ EncryptedDonationLog.sol   # Main donation log contract
鈹溾攢鈹€ deploy/                 # Deployment scripts
鈹溾攢鈹€ tasks/                  # Hardhat custom tasks
鈹溾攢鈹€ test/                   # Test files
鈹溾攢鈹€ frontend/               # Next.js frontend application
鈹溾攢鈹€ hardhat.config.ts       # Hardhat configuration
鈹斺攢鈹€ package.json            # Dependencies and scripts
```

## 馃摐 Available Scripts

| Script             | Description              |
| ------------------ | ------------------------ |
| `npm run compile`  | Compile all contracts    |
| `npm run test`     | Run all tests            |
| `npm run coverage` | Generate coverage report |
| `npm run lint`     | Run linting checks       |
| `npm run clean`    | Clean build artifacts    |

## 馃摎 Documentation

- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)
- [FHEVM Hardhat Plugin](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat)

## 馃搫 License

This project is licensed under the BSD-3-Clause-Clear License. See the [LICENSE](LICENSE) file for details.

## 馃啒 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/zama-ai/fhevm/issues)
- **Documentation**: [FHEVM Docs](https://docs.zama.ai)
- **Community**: [Zama Discord](https://discord.gg/zama)

---

**Built with 鉂わ笍 using Zama FHEVM**


- UI improvement #12 added at 2025-11-02 21:00:00


- Contract feature #13 added at 2025-11-02 22:00:00


- UI improvement #14 added at 2025-11-02 23:00:00


- Contract feature #15 added at 2025-11-03 00:00:00


- UI improvement #16 added at 2025-11-03 01:00:00


- Contract feature #17 added at 2025-11-03 02:00:00


- UI improvement #18 added at 2025-11-03 03:00:00


- Contract feature #19 added at 2025-11-03 04:00:00


- UI improvement #20 added at 2025-11-03 05:00:00


- Contract feature #21 added at 2025-11-03 06:00:00


- UI improvement #22 added at 2025-11-03 07:00:00


- Contract feature #23 added at 2025-11-03 08:00:00

