# Introduction

Astralscan is currently in the design phase. This documentation covers our prototype application for creating location attestations, previously known as the Astral Logbook.

## Astral Logbook Prototype

The Astral Logbook is a decentralized application built on Astral's Location Protocol. The Logbook empowers you to register geotagged **log entries** onchain + on IPFS.

Log entries are [location attestations](../location-protocol/introduction.md) with attached media — geotagged content built on the decentralized web. Recording details of important events lets you create a digital trail of your life, controlled by you.

:::warning

Blockchains are permanent — even though log entries can be 'revoked' and removed from view on Astral's front ends, the data stored is public. **Be careful about what information you share!**

We recommend that you do NOT post your home location, or publish log entries of places you will be in the future.

:::

With the Logbook prototype, you can:

- [record](./registering-entries.md) geotagged log entries onchain
- include a text memo in your entries
- attach content to an entry, stored on IPFS
- explore an interactive map of [entries posted around the world](./multi-entry-views.md) (soon!)
- verify friends' entries (soon!)
- share to decentralized social media (soon!)

:::tip

You can find documentation about the Location Protocol [here](../location-protocol/introduction).

:::

The Logbook prototype was built using [Scaffold-ETH 2](https://scaffoldeth.io/) — huge thanks to the BuidlGuidl for this resource!

## The Stack

The Astral Logbook is built on the [Ethereum Attestation Service](https://attest.sh) running on [Celo](https://celo.org) and [Arbitrum](https://arbitrum.io), and [IPFS](https://ipfs.io). The dapp is built using [Scaffold-eth 2](https://scaffoldeth.io/) and [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js). 