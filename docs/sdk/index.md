---
title: Astral SDK Documentation
sidebar_position: 1
description: Create, store, and verify location attestations on any blockchain
slug: /sdk/
---

# Astral SDK Documentation

**Create, store, and verify location attestations on any blockchain.**

Astral SDK is a developer-friendly TypeScript library that makes location-based attestations simple. Built on Ethereum Attestation Service (EAS), it supports both gasless offchain signatures and permanent onchain registration across multiple networks.

## Quick Navigation

### 🚀 **Getting Started**
- **[Core Concepts](/core-concepts)** - Key terminology and concepts
- **[Quick Start](/sdk/quick-start)** - 30-second example
- **[Getting Started Guide](/sdk/guides/getting-started)** - Complete tutorial

### 📖 **Workflows** 
- **[Offchain Workflow](/sdk/guides/offchain-workflow)** - Gasless EIP-712 signatures
- **[Onchain Workflow](/sdk/guides/onchain-workflow)** - Permanent blockchain records

### 📚 **Reference**
- **[API Reference](/api-reference)** - Complete method documentation
- **[Extensions Guide](/sdk/extensions)** - Extension system overview

## Why Astral SDK?

**🚀 Two ways to create location attestations:**
- **Offchain**: Gasless EIP-712 signatures, instant verification
- **Onchain**: Permanent blockchain registration with smart contract integration

**📍 Universal location support:**
- GeoJSON (Points, Polygons, Features) 
- Decimal coordinates `[lng, lat]`
- Well-Known Text (WKT)
- H3 geospatial indexing

**⚡ Multi-chain ready:**
- Sepolia (testnet) • Base • Arbitrum • Celo

**💫 Developer experience:**
- 100% TypeScript with full type safety
- Clear workflow separation (no confusion)
- Comprehensive docs and working examples

## Installation

```bash
pnpm add @decentralized-geo/astral-sdk  # or npm/yarn
```

## 30-Second Example

```typescript
import { AstralSDK } from '@decentralized-geo/astral-sdk';

// Connect to your wallet
const sdk = new AstralSDK({ 
  provider: window.ethereum,
  defaultChain: 'sepolia' 
});

// Create a location attestation
const attestation = await sdk.createOffchainLocationAttestation({
  location: [-0.163808, 51.5101], // London coordinates
  memo: 'Visited Big Ben today!'
});

// ✅ Done! You have a cryptographically signed location attestation
console.log('Attestation UID:', attestation.uid);
```

## What's Next?

1. **New to location attestations?** Start with [Core Concepts](/core-concepts)
2. **Want to build something?** Try the [Getting Started Guide](/sdk/guides/getting-started)
3. **Need reference docs?** See the [API Reference](/api-reference)
4. **Looking for extensions?** Check the [Extensions Guide](/sdk/extensions)