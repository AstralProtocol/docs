This contains
	1.	The directory tree 
	2.	Copy-pasteable Markdown stubs for each page.
	3.	Internal links consistent with the structure.

⸻

Directory structure

/docs/
└─ location-proofs/
   ├─ overview.md
   ├─ strategies/
   │  ├─ index.md
   │  ├─ machine-identifiers.md
   │  ├─ network-measurements.md
   │  ├─ sensor-data.md
   │  ├─ delegated.md
   │  ├─ social.md
   │  ├─ authority.md
   │  └─ legal.md
   ├─ signals/
   │  └─ index.md
   ├─ integrity/
   │  └─ index.md
   ├─ device-os/
   │  └─ index.md
   ├─ plugins/
   │  └─ index.md
   ├─ recipes/
   │  └─ index.md
   ├─ glossary.md
   └─ templates/
      ├─ strategy.md
      ├─ signal.md
      ├─ integrity.md
      ├─ plugin.md
      └─ recipe.md


⸻

Page stubs

overview.md

# Location Proofs (Research)

This section of the docs is a living research reference for **location proofs**:  
digital artifacts that combine multiple independent pieces of evidence to support claims about *where and when* events occur.

A **location stamp** is a single piece of verifiable evidence (e.g., a GNSS reading, an IP lookup, or a signed affidavit).  
A **location proof** is what you get when stamps are combined and verified together.

The subsections here document:
- [Strategies](./strategies/index.md): broad categories of how location can be derived.
- [Signals](./signals/index.md): raw observables used as evidence.
- [Integrity](./integrity/index.md): mechanisms that raise confidence in signals.
- [Device / OS](./device-os/index.md): the platforms where signals and proofs can be generated.
- [Plugins](./plugins/index.md): implementations that package signals into stamps.
- [Recipes](./recipes/index.md): combinations of plugins into multifactor proofs.
- [Glossary](./glossary.md): quick definitions and cross-links.

This section is meant to be extensible. Over time, individual signals, plugins, and recipes will grow into their own pages.  
For now, the focus is on creating a clear reference scaffold and a research agenda.


⸻

strategies/index.md

# Location Strategies

**Strategies** are broad categories of how location can be derived.  
They provide the conceptual map under which specific [signals](../signals/index.md) are organized.

The seven strategies we track:

- [Machine Identifiers](./machine-identifiers.md)
- [Network Measurements](./network-measurements.md)
- [Sensor Data](./sensor-data.md)
- [Delegated](./delegated.md)
- [Social](./social.md)
- [Authority](./authority.md)
- [Legal](./legal.md)

Each strategy page gives a concise definition and typical examples.

⸻

strategies/machine-identifiers.md

# Machine Identifiers

**Definition:**  
Location derived by detecting machine identifiers and comparing them with a georeferenced lookup table.

**Examples:**  
- Wi-Fi SSIDs and BSSIDs  
- Bluetooth MAC addresses  
- Cell tower IDs  
- IP addresses / ASNs  
- DePIN beacons (e.g., Helium)

**Derivation method:**  
Observed identifiers → cross-reference against a known dataset → location estimate.

**Risks:**  
Identifiers can be cloned or replayed. Databases may be stale or incomplete.


⸻

strategies/network-measurements.md

# Network Measurements

**Definition:**  
Location derived from measured values produced by network interactions.

**Examples:**  
- GNSS pseudoranges (satellite timing)  
- RTT / latency between nodes  
- WitnessChain co-location checks  
- Proximum timing proofs  
- RSSI trilateration (signal strength)

**Derivation method:**  
Measured values → compute position using physics or geometry.

**Risks:**  
Measurements can be manipulated (signal jamming, GNSS spoofing, latency injection).


⸻

strategies/sensor-data.md

# Sensor Data

**Definition:**  
Location context inferred from raw sensor readings produced by a device.

**Examples:**  
- Inertial sensors (IMU: accelerometer, gyroscope)  
- Microphone acoustics  
- Camera EXIF or image content  
- LiDAR or depth sensors

**Derivation method:**  
Raw sensor traces → pattern matching or model analysis → location context.

**Risks:**  
Sensors can be noisy, biased, or deliberately spoofed (e.g., replayed images, synthetic audio).


⸻

strategies/delegated.md

# Delegated

**Definition:**  
Location evidence derived from data held by a trusted third-party service.

**Examples:**  
- Uber ride logs  
- Mobile carrier call detail records (CDRs)  
- Utility bills  
- Bank transaction metadata

**Derivation method:**  
Delegated service provides a record → verifier checks consistency and origin.

**Risks:**  
Centralized trust dependency. Privacy and data access constraints.


⸻

strategies/social.md

# Social

**Definition:**  
Location evidence generated through attestations by peers or communities.

**Examples:**  
- Witness signatures (friends confirming co-presence)  
- Crowdsourced validation of events or assets  
- Community mapping projects

**Derivation method:**  
Multiple independent social attestations → combined into a verifiable record.

**Risks:**  
Sybil attacks (fake identities), collusion, and subjective bias.


⸻

strategies/authority.md

# Authority

**Definition:**  
Location evidence provided by an institution or organization with formal credibility.

**Examples:**  
- Government cadastral databases  
- Academic field research logs  
- NGO or standards body certifications

**Derivation method:**  
Authoritative institution issues signed record → verifier trusts based on institutional credibility.

**Risks:**  
Centralized trust, political bias, or institutional capture.


⸻

strategies/legal.md

# Legal

**Definition:**  
Location evidence embedded in formal legal documents.

**Examples:**  
- Bills of lading  
- Customs or shipping documents  
- Affidavits  
- Land deeds

**Derivation method:**  
Legal document includes place and time → verifier checks authenticity and legal standing.

**Risks:**  
Forgery, jurisdictional variance, enforcement limitations.


---

# Machine Identifiers

**Definition:** Location derived by detecting and comparing machine identifiers against a georeferenced lookup table.

**Examples:**
- Wi-Fi SSIDs and BSSIDs
- Bluetooth MAC addresses
- Cell tower IDs
- IP addresses
- DePIN beacons (e.g., Helium)

**Notes:**  
These identifiers are reported values. They must be compared with a reference dataset (crowdsourced, carrier-provided, or open) to yield a location estimate.

(repeat similar style for other 6 strategy pages, each concise, based on our framing)

⸻

signals/index.md

# Location Signals (Research Agenda)

This section will contain **raw signals**, categorized under the [strategies](../strategies/index.md).  
Signals are the **observables** that plugins can transform into verifiable stamps.

For now, we treat this as a **research agenda**: a living list of signals we intend to document.

| Signal | Strategy | Context |
|--------|----------|---------|
| GNSS pseudoranges | Network Measurements | Core satellite navigation raw values |
| Wi-Fi SSID/BSSID | Machine Identifiers | Device-visible broadcast IDs |
| Bluetooth MACs | Machine Identifiers | Short-range device identifiers |
| Cell IDs | Machine Identifiers | Tower IDs used by carriers |
| IP / ASN | Machine Identifiers | Reported by network layer |
| RTT latency | Network Measurements | Round-trip time between nodes |
| RSSI trilateration | Network Measurements | Signal strength analysis for range |
| Inertial IMU | Sensor Data | Accelerometer/gyroscope traces |
| Microphone acoustics | Sensor Data | Ambient sound signatures |
| Camera EXIF | Sensor Data | Embedded photo metadata |
| Delegated datasets | Delegated | Uber ride, bank statement, utility bill |
| Legal documents | Legal | Bills of lading, customs docs, affidavits |

Each entry will eventually have its own page. For now, this list signals where research is headed.


⸻

integrity/index.md

# Integrity Assurances (Research Agenda)

Integrity assurances are **mechanisms that increase trust** in a signal or plugin.  
They are not signals themselves but modifiers of credibility.

Examples under study:
- **Android Play Integrity API** — attests to app and device state.
- **Apple App Attest** — verifies iOS app legitimacy.
- **Trusted Execution Environments (TEE)** — enclaves like TrustZone, SGX, Secure Enclave.
- **Hardware-backed keys** — signing with embedded secure elements.
- **Secure boot chains** — device starts in a verified state.
- **C2PA content credentials** — media provenance.
- **Timestamp notaries** — external time anchors.

Future pages will expand these into detailed references.


⸻

device-os/index.md

# Device / OS

Devices and operating systems determine which [signals](../signals/index.md) are accessible, and what [integrity assurances](../integrity/index.md) are available.

**High-level notes:**
- **Android**: Broadest access to raw signals (GNSS, Wi-Fi, Bluetooth, IMU). Supports Play Integrity API.  
- **iOS**: More restricted APIs, but includes App Attest and Secure Enclave for integrity.  
- **IoT / Linux boards**: Flexible access, but security posture depends heavily on hardware and software configuration.  

This area is where implementation gets closest to real-world feasibility. We are tracking it, but holding more detailed research internally for now.


⸻

plugins/index.md

# Location Stamp Plugins

**Plugins** are implementations that transform raw [signals](../signals/index.md) into verifiable **location stamps**.  
Each plugin references the signals it uses, the [devices/OS](../device-os/index.md) it runs on, and any [integrity assurances](../integrity/index.md) it requires.

We are not yet publishing plugin code — but many of these are intended to become open source.  

**Examples under exploration:**
- **ProofMode app** — bundles multiple signals (photo EXIF, GNSS, Wi-Fi) into verifiable metadata.  
- **WitnessChain RTT module** — measures network round-trip time for co-location proofs.  
- **Cell ID lookup** — matches detected towers against reference DBs.  
- **Wi-Fi lookup** — same, but for Wi-Fi SSIDs.  
- **IMU fusion** — transforms accelerometer/gyroscope traces into motion/location context.  
- **Geodnet wrapper** — consumes DePIN GNSS corrections as a signal.  

Over time, each plugin will have its own reference page documenting usage, trust model, and outputs.


⸻

recipes/index.md

# Location Proof Recipes

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


⸻

glossary.md

# Glossary

Quick definitions with links:

- **Location stamp** — a discrete, verifiable signal of where/when something happened.  
- **Location proof** — a combination of stamps verified together. See [Recipes](./recipes/index.md).  
- **Strategy** — top-level category of how location is derived. See [Strategies](./strategies/index.md).  
- **Signal** — raw observable used as evidence. See [Signals](./signals/index.md).  
- **Plugin** — implementation that transforms signals into signed stamps. See [Plugins](./plugins/index.md).  
- **Recipe** — composition of plugins into multifactor proofs. See [Recipes](./recipes/index.md).  
- **Integrity assurance** — mechanism that increases confidence in a signal or plugin. See [Integrity](./integrity/index.md).  
- **Device / OS** — platforms where signals can be captured and integrity applied. See [Device / OS](./device-os/index.md).  

