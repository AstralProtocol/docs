# Overview

**Plugins** are implementations that transform raw [signals](../signals/index.md) into verifiable **location stamps**.
Each plugin references the signals it uses, the [devices/OS](../device-os/index.md) it runs on, and any [integrity assurances](../integrity/index.md) it requires.

**Examples under exploration:**
- **ProofMode app** — bundles multiple signals (photo EXIF, GNSS, Wi-Fi) into verifiable metadata.
- **WitnessChain RTT module** — measures network round-trip time for co-location proofs.
- **Cell ID lookup** — matches detected towers against reference DBs.
- **Wi-Fi lookup** — same, but for Wi-Fi SSIDs.
- **IMU fusion** — transforms accelerometer/gyroscope traces into motion/location context.

Over time, each plugin will have its own reference page documenting usage, trust model, and outputs.G