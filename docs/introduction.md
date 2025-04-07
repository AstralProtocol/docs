# Introduction

The Astral Protocol is a geospatial extension for Ethereum. It adds location data structures and spatial computations to the decentralized web. Our aim is to enable a new kind of open, reliable, and opt-in location-based web. 

Astral doesn't seek to replace existing geospatial technologies. Instead, we ask how we can enhance them with Web3 design principles — openness, durability, and user dignity. Our aim is to bridge established geographic tools and standards with the emerging decentralized web, opening new possibilities for how we create, share, and trust spatial information. 

**Our goal is to unlock a new category in Web3: location-based apps and protocols.**

## Key Components

### Location Protocol `v0.1 live`

A structured way of representing geographic information clearly and consistently, designed for the decentralized web. It includes:
- location attestations
- flexible data control
- extensible spatial format support
- universal spatial representation
- rich media attachments
- extensible verification framework

[Location Protocol](./location-protocol/introduction)


### Spatial.sol `R+D`

[Spatial Sol](./spatial-sol/introduction)

A suite of Solidity contracts that bring geospatial functionality to the EVM.

- **Spatial operations**: Calculate distances, determine containment, detect intersections between geometries
- **Efficient indexing**: Organize spatial data for rapid retrieval and analysis
- **Location-aware logic**: Enable smart contracts with geographic rules like "execute only if within city limits"


### Spatial Attestation Framework

The Astral Spatial Attestation Framework provides a toolkit for developers to build with location data in the Ethereum ecosystem.

#### Astral SDK `in dev`
[SDK Repo →](https://github.com/DecentralizedGeo/astral-sdk)

A TypeScript client library that simplifies working with spatial data in decentralized applications — built with EAS and ethers.js:

- **Streamlined workflows**: Create, sign, publish, and retrieve location data with minimal code
- **Verification tools**: Evaluate location claims against customizable standards of evidence
- **Media processing**: Consistent handling of diverse media formats attached to location data



#### Astral API `live beta`
[API Docs →](./api/getting-started)

A unified interface to the decentralized geospatial web:

- **Comprehensive indexing**: Tracks and organizes location data published through Astral
- **Optimized access**: Preprocesses geospatial information for efficient retrieval
- **Industry-standard interfaces**: Serves data through familiar channels like GraphQL and OGC API Features


#### Astralscan (`in design`)

A web interface for exploring and interacting with location data on Ethereum:
- **Visual exploration**: Browse and visualize location data on an interactive map
- **Data verification**: Inspect and validate location claims and their supporting evidence
- **Rich media support**: View photos, videos, and other media attached to location data

You can join our Telegram to ask the team for support or guidance [here](https://t.me/+UkTOSXnDcDM5ZTBk).
