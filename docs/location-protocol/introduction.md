# Introduction

> → **Resource:** [Location Protocol: Motivation, Design, and Technical Details (EASIER Data Initiative)](https://easierdata.org/updates/2025/2025-05-19-location-protocol-spec)

Astral's Location Protocol provides a standardized structure for representing spatial information on the decentralized web. It includes:



- **Location attestations**: Users create structured, signed records containing location data, metadata, and attachments - basic building blocks of the decentralized geospatial web
- **Flexible data control**: Users choose how to manage their location records - keeping them private, using centralized storage, publishing to IPFS or registering on blockchain networks
- **Extensible spatial format support**: Handles points, lines, polygons, and complex geometries needed for mapping applications — any spatial data format can be supported
- **Universal spatial representation**: Works across Earth-centered coordinates, other planetary systems, and virtual worlds using established formats like GeoJSON, decimal coordinates and other location data formats
- **Rich media attachments**: Connects photos, videos, sensor readings, and documents to spatial data
- **Extensible verification framework**: Accommodates location proofs (verification evidence) that can be attached to location attestations using various verification systems and techniques

The Location Protocol is built on the Ethereum Attestation Service (EAS) — it defines core schemas to create location attestations that carry clear attribution, timestamp information, attached data, and optional location proofs.



This section of the docs includes:

- A [quickstart guide](./quickstart.md) to creating location proofs — note this will be updated soon to use the Astral SDK!
- Specifications of the core [Ethereum Attestation Service (EAS) schema](./eas-schema.md) for the protocol, and UIDs of deployments on
  Base, Celo and Arbitrum mainnets, and Ethereum Sepolia testnet.
- Information on our Location Format Extensions Library, which provides an interoperability framework for different location data formats: [Location Format Extensions](./location-types.md)
- Details on our [Location Proof Extensions](./strategies-recipes.md) framework for supporting different proof-of-location systems and verification strategies
- Details on our [Media Extensions](./media-extensions.md) framework for attaching different types of media to location attestations

## Contributing

We welcome contributions to improve the protocol and tools. Please read our
[contributing guidelines](https://github.com/AstralProtocol/astralprotocol/wiki/Contributing-guidelines) for more details.
