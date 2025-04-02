import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Astral Documentation',
  tagline: 'Open source tools + infrastructure for decentralized spatial data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.astral.global',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AstralProtocol', // Usually your GitHub org/user name.
  projectName: 'astralprotocol', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add redirects for restructured content
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Location Protocol redirects
          {
            from: '/docs/location-proof-protocol/introduction',
            to: '/location-protocol/introduction',
          },
          {
            from: '/docs/location-proof-protocol/quickstart',
            to: '/location-protocol/quickstart',
          },
          {
            from: '/docs/location-proof-protocol/rationale',
            to: '/location-protocol/rationale',
          },
          {
            from: '/docs/location-proof-protocol/eas-schema',
            to: '/location-protocol/eas-schema',
          },
          {
            from: '/docs/location-proof-protocol/location-types',
            to: '/location-protocol/location-types',
          },
          {
            from: '/docs/location-proof-protocol/strategies-recipes',
            to: '/location-protocol/strategies-recipes',
          },
          {
            from: '/docs/location-proof-protocol/media-attachments',
            to: '/location-protocol/media-attachments',
          },
          {
            from: '/docs/location-proof-protocol/media-extensions',
            to: '/location-protocol/media-extensions',
          },
          
          // Spatial.sol redirects
          {
            from: '/docs/verifiable-geocomputation/introduction',
            to: '/spatial-sol/introduction',
          },
          
          // Astralscan redirects
          {
            from: '/docs/logbook/introduction',
            to: '/astralscan/introduction',
          },
          {
            from: '/docs/logbook/registering-entries',
            to: '/astralscan/registering-entries',
          },
          {
            from: '/docs/logbook/viewing-entries',
            to: '/astralscan/viewing-entries',
          },
          {
            from: '/docs/logbook/multi-entry-views',
            to: '/astralscan/multi-entry-views',
          },
          {
            from: '/docs/logbook/frames',
            to: '/astralscan/frames',
          },
          {
            from: '/docs/logbook/developers',
            to: '/astralscan/developers',
          },
          {
            from: '/docs/logbook/contributing',
            to: '/astralscan/contributing',
          },
          
          // Research redirects
          {
            from: '/docs/decentralized-spatial-data/introduction',
            to: '/research/introduction',
          },
          
          // Root redirects
          {
            from: '/',
            to: '/introduction',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Make docs the default route
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/astral-social-card.jpg', 
    navbar: {
      title: 'Astral',
      logo: {
        alt: 'Astral Logo',
        src: 'img/logo.svg',
        href: '/introduction',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AstralProtocol/astralprotocol',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/+UkTOSXnDcDM5ZTBk',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Farcaster',
              href: 'https://warpcast.com/astralprotocol',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/AstralProtocol/astralprotocol',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Astral. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
