---
title: Configuration
sidebar_position: 3
description: Connect your wallet and configure the SDK
---

# Configuration

Connect the SDK to your Web3 wallet and choose your network.

## Basic Configuration

The simplest setup uses a self-contained wallet:

```typescript
import { AstralSDK } from '@decentralized-geo/astral-sdk';
import { Wallet } from 'ethers';

// Create a self-contained wallet for testing
const privateKey = Wallet.createRandom().privateKey;
const wallet = new Wallet(privateKey);

const sdk = new AstralSDK({ 
  signer: wallet
});
```

## Configuration Options

### → Supported Chains

```typescript
type SupportedChain = 
  | 'sepolia'    // Ethereum testnet (recommended for development)
  | 'base'       // Base mainnet
  | 'arbitrum'   // Arbitrum One
  | 'celo'       // Celo mainnet
```

### → Full Configuration

```typescript
const sdk = new AstralSDK({
  // Required
  signer: wallet,                    // ethers.js signer
  
  // Optional
  chainId: 11155111,                 // Chain ID (Sepolia)
  apiUrl: 'https://api.astral.com',  // Custom API endpoint
  debug: true                        // Enable debug logging
});
```

## Provider Options

### Browser Wallet (For Production)

```typescript
// MetaMask or other injected wallets
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const sdk = new AstralSDK({ 
  signer: signer
});
```

### Custom Provider

```typescript
import { ethers } from 'ethers';

// Using ethers.js provider for onchain operations
const provider = new ethers.JsonRpcProvider('https://rpc.sepolia.org');
const wallet = new ethers.Wallet(privateKey, provider);

const sdk = new AstralSDK({ 
  signer: wallet,
  chainId: 11155111 // Sepolia
});
```

## Verify Configuration

```typescript
// Check connection
const address = await sdk.getAddress();
console.log('Connected wallet:', address);

// Check chain
const chainId = await sdk.getChainId();
console.log('Connected to chain:', chainId);
```

→ **Next:** [First Attestation](/sdk/quick-start/first-attestation)