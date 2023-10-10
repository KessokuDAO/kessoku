// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kessoku DAO',
  tagline: '...',
  favicon: 'img/k.png',

  // Set the production url of your site here
  url: 'https://kessoku.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KessokuDAO', // Usually your GitHub org/user name.
  projectName: 'kessoku', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
        },
        gtag: {
          trackingID: 'G-JL9Y5Q2T42',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ksk.png',
      navbar: {
        title: 'Kessoku DAO',
        logo: {
          alt: 'ksk',
          src: 'img/k.png',
        },
        items: [
          {to: '/blog', label: '?', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
                {
                   html: `
                      <img src="https://lanyard.cnrad.dev/api/873803230042263563?idleMessage=doing%20something%20else..."  alt="Discord Presence"></img>
                      `,
                },
          ],
          },
          {},
          {
            items: [
                {
                   html: `
                      <a href="https://github.com/KessokuDAO" target="_blank" rel="nofollow">
                      <img src="https://img.shields.io/static/v1?label=Github&message=%F0%9F%8E%BC&logo=GitHub&color=b9bbbd" alt="github"></img>
                      </a>`,
              },
          ],
          },
          {
            items: [
                {
                   html: `
                      <a href="https://x.com/KessokuDAO" ttarget="_blank" rel="nofollow">
                      <img src="https://img.shields.io/static/v1?label=Twitter&message=%F0%9F%8E%BC&logo=X&color=ffffff" alt="x"></img>
                      </a>`,
              },
          ],
          },
          {},
          { 
            items: [
                {
                html: `
                   <img src="https://lanyard.cnrad.dev/api/462592550402916352?idleMessage=:Building%20something..."  alt="Discord Presence"></img>
                   `,
                 },
          ],
          },
        ],
        logo: {
          alt: 'kessoku',
          src: 'img/ksk.png',
          width: '300',
          height: 'auto',
        },
        copyright: `Kessoku DAO ©`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
