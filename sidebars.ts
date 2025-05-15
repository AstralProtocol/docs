const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Astral',
    },
    {
      type: 'category',
      label: 'SDK',
      items: [
        'sdk/introduction',
      ]
    },
    {
      type:'category',
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
    // {
    //   type: 'category',
    //   label: 'Core Concepts',
    //   items: [
    //     'core-concepts/what-is-spatial-data',
    //     'core-concepts/location-proofs',
    //     'core-concepts/onchain-geospatial',
    //     'core-concepts/decentralized-spatial-data',
    //   ],
    // },
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
      label: 'Spatial.sol',
      items: [
        'spatial-sol/introduction',
        'spatial-sol/research-plan',
      ],
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
    {
      type: 'category',
      label: 'Research',
      items: [
        'research/introduction',
      ],
    },
  ],
};

module.exports = sidebars;