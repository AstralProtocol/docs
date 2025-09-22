# Overview

Devices and operating systems determine which [signals](../signals/index.md) are accessible, and what [integrity assurances](../integrity/index.md) are available.

**High-level notes:**
- **Android**: Broadest access to raw signals (GNSS, Wi-Fi, Bluetooth, IMU). Supports Play Integrity API.
- **iOS**: More restricted APIs, but includes App Attest and Secure Enclave for integrity.
- **IoT / Linux boards**: Flexible access, but security posture depends heavily on hardware and software configuration.

