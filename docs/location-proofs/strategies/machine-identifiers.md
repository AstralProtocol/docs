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