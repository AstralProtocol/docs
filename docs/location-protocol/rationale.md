# Rationale

The Location Protocol exists to make **structured, signed spatial data** as easy to exchange as JSON, while preserving the values outlined in our [*Towards a Decentralized Geospatial Web* vision paper](https://osf.io/bg2uq_v1):

| Principle   | What it means for the spec                                                                                                                                                                                                  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Open**    | The format is public‑domain, royalty‑free, and extends existing geospatial conventions (EPSG, GeoJSON, MIME) so any toolchain—GIS desktop, smart‑contract, metaverse engine—can implement it without permission.            |
| **Durable** | Each record carries cryptographic guarantees: deterministic canonicalisation → hash integrity, detached or on‑chain signatures → non‑repudiation, explicit `specVersion` + registries → long‑term machine interoperability. Additionally, records can be stored on blockchains or other durable storage systems. |
| **Opt‑in** | Attestations are user-controlled: users decide what to disclose, when, and to whom. This enables selective disclosure, revocation, and provenance chaining. Zero-knowledge techniques—e.g. proving inclusion within a region without revealing coordinates—are a natural extension and under active development. |










Adhering to open standards for *structured* spatial data (CRS URNs, CBOR, multiformats) unlocks cross‑domain pipelines: a drone image hash proven onchain can be validated by a Python notebook; a metaverse waypoint can reference an on‑Earth bounding box in the same graph.

---

#### Minimum requirements for a **Location Attestation**

1. **Well‑defined structure** — conforms exactly to the Normative Data Model (field names, order, and types are fixed).
2. **Self‑describing location encoding** — `locationType` tells any parser how to interpret `location`, whether that’s a GeoJSON polygon or a CID pointing to a GeoTIFF tile.
3. **Reference system declaration** — `srs` (EPSG/URN or custom namespace) specifies the coordinate frame or symbolic space.
4. **Cryptographic authenticity** — verifiable via *either* an on‑chain transaction (`OnChainTxProof`) *or* a detached signature set (`DetachedSig`).
5. **Immutable integrity hash** — canonical CBOR serialisation ensures the same byte‑sequence and hash across languages and runtimes.
6. **Version signalling** — `specVersion` allows graceful evolution without breaking old clients.
7. **Optional expiry & revocation hooks** — `expirationTime` and `revocable` enable privacy‑oriented or limited‑lifetime attestations.
8. **Provenance links** — the `ref` field lets any attestation cite its parent or prerequisite proofs, forming verifiable chains (e.g., sensor‑reading → analytics result).

By meeting these requirements, a Location Attestation becomes a **durable, portable, and user‑centric spatial proof** that can flow between blockchains, Web 2 APIs, and traditional GIS software—fulfilling the protocol’s ambition to be the missing location primitive for an open and consensual internet.
