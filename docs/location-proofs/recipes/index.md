# Overview

A **recipe** is a combination of [plugins](../plugins/index.md) that together form a **multifactor location proof**.

Recipes describe:
- Which plugins are combined.
- How evidence is weighted or corroborated.
- What use case they serve.

**Early examples:**
- **VPN detection**: IP/ASN + RTT latency + device attestation.
- **Physical device localization**: GNSS + Wi-Fi + Cell ID + OS integrity token.
- **Supply chain site verification**: Legal doc + GNSS + sensor log.
- **Validator co-location (DePIN)**: Network RTT + beacon proximity.

This section will grow into detailed blueprints, but for now it captures the intent and early directions.