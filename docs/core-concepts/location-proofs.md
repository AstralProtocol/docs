# Location Proofs

Location proofs are digital artifacts that combine multiple independent pieces of evidence to support claims about *where and when* events occur. They serve as the verification layer for location attestations in the Astral ecosystem.

## Core Concepts

A **location stamp** is a single piece of verifiable evidence (e.g., a GNSS reading, an IP lookup, or a signed affidavit).
A **location proof** is what you get when multiple stamps are combined and verified together to create a higher-confidence claim.

Location proofs serve as the verification layer for location attestations. They:

- Combine multiple independent evidence sources to increase confidence
- Can be generated through various verification strategies
- Are attached to location attestations as part of the Location Protocol
- Make location fraud more difficult through multifactor verification

## Evidence Strategies

The Location Protocol supports seven broad categories of location evidence:

- **[Machine Identifiers](../location-proofs/strategies/machine-identifiers.md)**: Wi-Fi, Bluetooth, cell towers, IP addresses
- **[Network Measurements](../location-proofs/strategies/network-measurements.md)**: GNSS, RTT latency, signal strength
- **[Sensor Data](../location-proofs/strategies/sensor-data.md)**: IMU, camera, microphone, environmental sensors
- **[Delegated](../location-proofs/strategies/delegated.md)**: Third-party services like ride logs, utility bills
- **[Social](../location-proofs/strategies/social.md)**: Peer attestations and community validation
- **[Authority](../location-proofs/strategies/authority.md)**: Institutional records and certifications
- **[Legal](../location-proofs/strategies/legal.md)**: Formal documents like bills of lading

## Relationship to Location Attestations

Location attestations are the primary data structure in the Location Protocol, while location proofs provide the evidence that makes these attestations trustworthy:

- **Location attestation**: "I was at coordinates 37.7749° N, 122.4194° W at 2:00pm"
- **Location proof**: Multiple pieces of evidence supporting that claim, such as GNSS data + Wi-Fi signals + device attestation

## Research & Implementation

For detailed technical research on location proof strategies, signals, and implementation approaches, see the [Location Proofs](../location-proofs/overview.md) section.

The Location Protocol accommodates various proof strategies through the [Location Proof Extensions](../location-protocol/strategies-recipes.md) framework.