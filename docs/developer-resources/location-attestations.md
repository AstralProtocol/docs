# Location Attestations

Location attestations are the core building blocks of the decentralized geospatial web. They are structured, signed records containing location data, metadata, and attachments that form the foundation of the Location Protocol.

## What are Location Attestations?

Location attestations are structured data records that:

- Contain spatial information in standardized formats
- Are cryptographically signed to establish authorship and integrity
- Are timestamped to establish when they were created
- Can include metadata and attachments
- May be linked to verification evidence (location proofs)

## Structure of a Location Attestation

A Location Attestation includes:

1. **Spatial data**: Coordinates, geometries, or other geospatial information
2. **Metadata**: Information about the attestation such as timestamp, author, etc.
3. **Format information**: Details about how the spatial data is encoded
4. **Optional attachments**: Media or other relevant data
5. **Optional location proofs**: Evidence verifying the authenticity of the location claim

## Creating Location Attestations

Location attestations are created using the Ethereum Attestation Service (EAS) and follow the schema defined by the Location Protocol. They can be:

- Created by users to document their location
- Issued by applications to track spatial data
- Generated automatically by devices or services

For a practical guide on creating location attestations, see the [quickstart guide](../location-protocol/quickstart.md).

## Relationship to Location Proofs

While location attestations contain the actual spatial data, location proofs provide evidence of its authenticity:

- **Location attestation**: The primary record containing spatial data ("I was at this location")
- **Location proof**: Verification evidence attached to the attestation ("Here's proof that I was there")

Location attestations can exist without location proofs, but location proofs are always attached to attestations.