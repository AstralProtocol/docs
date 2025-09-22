# Overview

Location is one of the most common — and most contested — facts in digital systems.  
From VPN checks and border control to carbon monitoring and sanctions enforcement,  
many questions online boil down to **where and when did an event occur?**

Today, location evidence is handled inconsistently:  
- **Web2** relies on IP addresses, GPS coordinates, billing info, or ad-hoc service logs.  
- **Web3** systems rarely integrate location at all, despite consensus networks depending on *where nodes are run* and *where users interact*.  

These mechanisms are fragile, fragmented, and easy to manipulate. A ship turning off its AIS transponder, a user masking their IP with a VPN, or a falsified invoice — each shows how weak single-source location evidence can be.

---

## Why Location Proofs?

Our motivation comes from three converging forces:

- **Web3 design principles.** The decentralized web is meant to be *open, durable, and opt-in*. If location is to matter in Web3, it needs to follow these same principles — portable, user-controlled, and verifiable without reliance on a single gatekeeper.  
- **Verifiability in an age of AI.** Generative AI and cheap spoofing reduce the cost of lying. Stronger proofs of *where and when* something happened raise the cost back up, restoring trust.  
- **An open framework.** Location affects everyone, everywhere. A proprietary patchwork of APIs won’t do. By building open standards and open-source implementations, we create a foundation that others can inspect, build on, and improve. This makes the system harder to capture, more likely to interoperate, and more durable over time.

---

## Design Goals

- **Pragmatism.** Build on what works today; aim for “good enough” in real systems rather than chasing theoretical perfection.  
- **Privacy & consent.** Default to user-controlled data, introduce privacy-preserving mechanisms wherever possible, and set developer patterns that encourage restraint.  
- **Composability.** Proofs should be stackable — independent stamps combined into stronger artifacts.  
- **Simplicity.** Make it easy for developers to create, verify, and consume proofs. Minimize friction in common flows.  
- **Interoperability.** Standardize the schema and verification flow so proofs from different systems can coexist and be reused across contexts.  
- **Accountable persistence.** Proofs should remain verifiable for their intended lifetime, but also support expiry or revocation when privacy, consent, or regulation requires it.

---

## Claims, Stamps, and Proofs

A **location claim** is any assertion about the position — and optionally the time — of a person, device, asset, or event.  

A **location stamp** is a single piece of evidence that corroborates a claim. Examples include:
- a GPS reading,  
- a Wi-Fi SSID lookup,  
- a notarized document,  
- or an NFC check-in.  

Each stamp makes lying a bit harder — but alone, each can be forged.

A **location proof** combines multiple independent stamps into a verifiable artifact. The principle: **independent evidence increases confidence in the claim.** Forging two or three unrelated signals together is much harder than spoofing one.  

Proofs lie on a *spectrum of certainty*, from weak, single-signal evidence up to high-rigor, multi-signal attestations hardened against even nation-state adversaries. Our framework is designed to harmonize the broad range of evidence types, and package it up into a new internet primitive. 

If we do this well, location proofs will serve use cases ranging from lower stakes — like gaming and social networking — up to ones with higher security requirements, like those in supply chain management, conflict + humanitarian, and compliance.

:::info How Astral Relates to Other Proof-of-Location Systems
Astral does not compete with systems like WitnessChain, FOAM, or GEODNET.  

Instead, **Astral location proofs sit a layer above**: these systems provide strong stamps that can stand alone or be combined with other, uncorrelated signals to strengthen a claim.  

The Astral framework **harmonizes how such evidence is structured, signed, and verified**, so evidence from different systems can interoperate and developers can compose these signals more easily.
:::

---

## Core Concepts

- **Strategies** — categories of how location signals can be derived (e.g. machine identifiers, network measurements, delegated records, legal documents).  
- **Location Signals** — raw observables (e.g. cell IDs, RTT latencies, acoustic or imaging data, EXIF tags).  
- **Location Stamp Plugins** — software modules that process signals into verifiable location stamps.  
- **Location Proof Recipes** — multi-plugin compositions that stack location stamps into full proofs.  
- **Integrity assurances** — cross-cutting mechanisms (e.g. TEEs, OS attestation, hardware signing) that raise confidence in stamps.  
- **Location Protocol** — a standardized schema for structuring, signing, and transporting spatial data, so stamps and proofs remain portable, verifiable, and interoperable across systems — the envelope for location proofs.

---

## Location Proof Lifecycle

At a high level, the lifecycle of a proof follows this pipeline:

1. **Signals observed** — raw data from devices, networks, or documents.  
2. **On-device processing** — signals fused, normalized, or pre-validated.  
3. **Integrity checks** — assurance that the data comes from trusted hardware, OS, or environment.  
4. **Signing** — a plugin packages the evidence into a structured, signed location stamp.  
5. **Verification** — multiple stamps are combined into a recipe, checked for independence and consistency, yielding a location proof.

Note that some plugins may deviate from this exact process — but it's a useful high-level mental model. 

---

## Why Now?

Several converging trends make location proofs urgent:

1. **Web3 design principles** — open, durable, opt-in. Decentralized apps need portable, verifiable evidence of location, just like they need portable, verifiable identity.  
2. **Web2 messiness** — today’s geolocation methods are fragmented and rarely auditable.  
3. **Regulation & compliance** — data residency, sanctions, KYC/AML: all are location-dependent.  
4. **AI & disinformation** — deepfakes, spoofing, and generative content lower the cost of lying; stronger proofs raise it.  
5. **Splinternet pressures** — as jurisdictions diverge, verifiable location metadata can enable technical enforcement of locally-scoped rules.

---

## Astral’s Work

At Astral, in collaboration with the University of Maryland and OGC, we are:  

- **Cataloging strategies and signals** — mapping the landscape of how location evidence can be produced.  
- **Building plugins and recipes** — creating open-source modules that turn signals into stamps and proofs.  
- **Developing the Location Protocol** — an interoperable schema for location attestations, the common data format that makes proofs portable and verifiable.  
- **Exploring use cases** — from wallet security and fraud detection to carbon monitoring, AI localization, and supply chain compliance.

---

## Next Steps in this Section

- [Strategies](./strategies/index.md): categories of how location evidence is produced.
- [Signals](./signals/index.md): raw observables we can build from.
- [Integrity](./integrity/index.md): cross-cutting assurances.
- [Plugins](./plugins/index.md): modules that generate verifiable stamps.
- [Recipes](./recipes/index.md): compositions of multiple plugins into full proofs.

---

## Get Involved

Location proofs are an evolving research area. We welcome collaboration, feedback, and contributions from researchers, developers, and organizations working on location verification challenges.

**Connect with us:**
- **GitHub**: [github.com/DecentralizedGeo](https://github.com/DecentralizedGeo) — contribute to open-source implementations
- **Telegram**: [Join our community](https://t.me/+UkTOSXnDcDM5ZTBk) — discuss research and applications
- **Twitter**: [@astralprotocol](https://twitter.com/astralprotocol) — follow updates and announcements

---

