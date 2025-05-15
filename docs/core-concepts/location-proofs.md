# Location Proofs

Location proofs are verification evidence that can be attached to location attestations. While location attestations contain the actual spatial data (coordinates, geometries, etc.), location proofs provide evidence or verification of the authenticity of that spatial data.

## What are Location Proofs?

Location proofs serve as the verification layer for location attestations. They:

- Provide evidence that a claim about a location is valid
- Can be generated through various verification strategies
- Are attached to location attestations as part of the Location Protocol

## Types of Location Proofs

The Location Protocol supports many different approaches to verification:

- **Authority-based proofs**: Verification from trusted entities like event organizers
- **Social proofs**: Verification from other users who can confirm location claims
- **Hardware-based proofs**: Evidence from devices like Bluetooth beacons, NFC, or RFID
- **Network-based proofs**: Evidence from network triangulation or signal analysis
- **Sensor data proofs**: Evidence from environmental readings that match expected values

## Relationship to Location Attestations

Location attestations are the primary data structure in the Location Protocol, while location proofs provide the evidence that makes these attestations trustworthy:

- **Location attestation**: "I was at coordinates 37.7749° N, 122.4194° W at 2:00pm"
- **Location proof**: Evidence supporting that claim, such as a beacon signal, network data, or third-party verification

The Location Protocol is designed to accommodate various proof strategies through the [Location Proof Extensions](../location-protocol/strategies-recipes.md) framework.