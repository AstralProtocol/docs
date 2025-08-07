---
title: Introduction
sidebar_position: 1
sidebar_label: Introduction
description: Create, store, and verify location attestations on any blockchain
slug: /sdk/
---

# Introduction

**Create, store, and verify location attestations on any blockchain.**

Astral SDK is a developer-friendly TypeScript library that makes location-based attestations simple. Built on Ethereum Attestation Service (EAS), it supports both gasless offchain signatures and permanent onchain registration across multiple networks.

## Quick Navigation

### → Getting Started
- **[Core Concepts](/core-concepts)** - Key terminology and concepts
- **[Quick Start](/sdk/quick-start)** - 30-second example
- **[Getting Started Guide](/sdk/guides/getting-started)** - Complete tutorial

### ◆ Workflows
- **[Offchain Workflow](/sdk/guides/offchain-workflow)** - Gasless EIP-712 signatures
- **[Onchain Workflow](/sdk/guides/onchain-workflow)** - Permanent blockchain records

### § Reference
- **[API Reference](/api/getting-started)** - Complete method documentation
- **[Extensions Guide](/sdk/extensions)** - Extension system overview

## Why Astral SDK?

### → Two ways to create location attestations
- **Offchain**: Gasless EIP-712 signatures, instant verification
- **Onchain**: Permanent blockchain registration with smart contract integration

### → Supported location formats
- GeoJSON (Points, Polygons, Features) - ■ Available now
- Decimal coordinates `[lng, lat]` - □ Coming soon
- Well-Known Text (WKT) - □ Coming soon
- H3 geospatial indexing - □ Coming soon

### → Multi-chain ready
- Sepolia (testnet) • Base • Arbitrum • Celo

### → Developer experience
- 100% TypeScript with full type safety
- Clear workflow separation (no confusion)
- Comprehensive docs and working examples

## Installation

```bash
pnpm add @decentralized-geo/astral-sdk  # or npm/yarn
```

## Browser Compatibility

The Astral SDK works in both Node.js and browser environments including:
- Next.js applications
- React applications  
- Vanilla JavaScript in browsers
- Node.js scripts

No special configuration needed for browser environments.

## 30-Second Example

```typescript
import { AstralSDK } from '@decentralized-geo/astral-sdk';
import { Wallet } from 'ethers';

// Create a self-contained wallet for testing
const privateKey = Wallet.createRandom().privateKey;
const wallet = new Wallet(privateKey);

const sdk = new AstralSDK({ 
  signer: wallet
});

// Create a location attestation
const attestation = await sdk.createOffchainLocationAttestation({
  location: {
    type: 'Point',
    coordinates: [-0.163808, 51.5101] // London coordinates [longitude, latitude]
  },
  memo: 'Visited Big Ben today!'
});

// ✅ Done! You have a cryptographically signed location attestation
console.log('Attestation UID:', attestation.uid);
```

## What's Next?

1. **New to location attestations?** Start with [Core Concepts](/core-concepts)
2. **Want to build something?** Try the [Getting Started Guide](/sdk/guides/getting-started)
3. **Need reference docs?** See the [API Reference](/api/getting-started)
4. **Looking for extensions?** Check the [Extensions Guide](/sdk/extensions)