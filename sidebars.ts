const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Astral',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'core-concepts/what-is-spatial-data',
            'core-concepts/location-proofs',
            'core-concepts/onchain-geospatial',
            'core-concepts/decentralized-spatial-data',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Location Proofs',
      items: [
        'location-proofs/overview',
        {
          type: 'category',
          label: 'Strategies',
          items: [
            'location-proofs/strategies/index',
            'location-proofs/strategies/machine-identifiers',
            'location-proofs/strategies/network-measurements',
            'location-proofs/strategies/sensor-data',
            'location-proofs/strategies/delegated',
            'location-proofs/strategies/social',
            'location-proofs/strategies/authority',
            'location-proofs/strategies/legal',
          ],
        },
        {
          type: 'category',
          label: 'Signals',
          items: [
            'location-proofs/signals/index',
          ],
        },
        {
          type: 'category',
          label: 'Integrity',
          items: [
            'location-proofs/integrity/index',
          ],
        },
        {
          type: 'category',
          label: 'Device / OS',
          items: [
            'location-proofs/device-os/index',
          ],
        },
        {
          type: 'category',
          label: 'Plugins',
          items: [
            'location-proofs/plugins/index',
          ],
        },
        {
          type: 'category',
          label: 'Recipes',
          items: [
            'location-proofs/recipes/index',
          ],
        },
        'location-proofs/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Location Protocol',
      items: [
        'location-protocol/introduction',
        'location-protocol/quickstart',
        'location-protocol/rationale',
        'location-protocol/eas-schema',
        'location-protocol/location-types',
        'location-protocol/strategies-recipes',
        'location-protocol/media-extensions',
      ],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: [
        {
          type: 'category',
          label: 'API',
          items: [
            'api/getting-started',
            'api/authentication',
            'api/data-model',
            'api/graphql-api',
            'api/ogc-api',
            'api/api-reference',
            'api/troubleshooting'
          ]
        },
        {
          type: 'category',
          label: 'SDK',
          items: [
            'sdk/index',
            {
              type: 'category',
              label: 'Quick Start',
              items: [
                'sdk/quick-start/index',
                'sdk/quick-start/installation',
                'sdk/quick-start/configuration',
                'sdk/quick-start/first-attestation',
              ],
            },
            {
              type: 'category',
              label: 'Core Concepts',
              items: [
                'sdk/core-concepts/index',
                'sdk/background/web3',
                'sdk/background/geospatial',
              ],
            },
            {
              type: 'category',
              label: 'Guides',
              items: [
                'sdk/guides/getting-started',
                'sdk/guides/offchain-workflow',
                'sdk/guides/onchain-workflow',
                'sdk/guides/development',
              ],
            },
            {
              type: 'category',
              label: 'Extensions',
              items: [
                'sdk/extensions',
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Astralscan',
          items: [
            'astralscan/introduction',
            'astralscan/registering-entries',
            'astralscan/viewing-entries',
            'astralscan/multi-entry-views',
            'astralscan/frames',
            'astralscan/developers',
            'astralscan/contributing',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Research',
      items: [
        'research/introduction',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Spatial.sol',
    //   items: [
    //     'spatial-sol/introduction',
    //     'spatial-sol/research-plan',
    //   ],
    // },
  ],
};

module.exports = sidebars;