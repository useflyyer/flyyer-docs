/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require("dotenv");
dotenv.config();

const ALGOLIA_KEY = process.env.ALGOLIA_KEY;

module.exports = {
  title: "Flayyer docs",
  tagline: "Integration guides and CLI documentation",
  url: "https://docs.flayyer.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "flayyer", // Usually your GitHub org/user name.
  projectName: "flayyer-docs", // Usually your repo name.
  themeConfig: {
    respectPrefersColorScheme: true,
    // image: "img/logo.svg",
    prism: {
      additionalLanguages: ["erb", "ruby", "liquid"],
      // theme: require("prism-react-renderer/themes/github"),
      // darkTheme: require("prism-react-renderer/themes/vsDark"),
    },
    algolia: {
      apiKey: ALGOLIA_KEY,
      indexName: "flayyer",
      // Optional: see doc section bellow
      contextualSearch: false,
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
    announcementBar: {
      id: "announcement-bar",
      content: `👉 Preview your links with <a target="_blank" rel="noopener noreferrer" href="https://socialpreview.io?ref=docs">SocialPreview.io</a>, it's free!`,
      backgroundColor: "#4346DE", // Defaults to `#fff`.
      textColor: "#fff", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: "docs.Flayyer",
      logo: {
        // href: "https://flayyer.com",
        href: "/",
        alt: "Flayyer logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          to: "/guides",
          docId: "introduction",
          label: "Guides",
          position: "left",
          activeBaseRegex: `/guides/`,
        },
        {
          type: "doc",
          position: "left",
          docId: "getting-started",
          label: "Customization",
        },
        { to: "changelog", label: "Changelog", position: "left" },
        {
          href: "https://flayyer.com?ref=docs",
          label: "Flayyer.com",
          position: "right",
        },
        {
          href: "https://github.com/flayyer",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Pages",
          items: [
            {
              label: "Flayyer.io",
              to: "https://flayyer.io?ref=docs",
            },
            {
              label: "Flayyer.com",
              to: "https://flayyer.com?ref=docs",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/flayyer",
            },
            {
              label: "About",
              href: "https://flayyer.com/about",
            },
            {
              label: "Partnerships",
              href: "https://flayyer.com/partners",
            },
            {
              label: "Jobs",
              href: "https://flayyer.com/jobs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/flayyer_com",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/flayyer",
            },
            {
              label: "Discord",
              href: "https://flayyer.com/discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/flayyer_com",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/flayyercom",
            },
          ],
        },
      ],
      logo: {
        alt: "Flayyer logo",
        src: "img/logo.svg",
        href: "https://flayyer.com?ref=docs",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Flayyer.com — Santiago, Chile`,
    },
    gtag: {
      trackingID: "G-15BQ7WPJJL",
      anonymizeIP: true,
    },
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        editUrl: "https://github.com/flayyer/flayyer-docs/edit/main/",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars-guides.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        /** Required for any multi-instance plugin */
        id: "changelog",
        /** URL route for the blog section of your site. *DO NOT* include a trailing slash. */
        routeBasePath: "changelog",
        /** Path to data on filesystem relative to site dir. */
        path: "changelog",
        editUrl: "https://github.com/flayyer/flayyer-docs/edit/main/",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "docs",
          editUrl: "https://github.com/flayyer/flayyer-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/flayyer/flayyer-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
    [
      "@flayyer/docusaurus-preset",
      {
        main: {
          tenant: "flayyer",
          deck: "flayyer-docs",
          template: "page",
        },
        docs: {
          tenant: "flayyer",
          deck: "flayyer-docs",
          template: "page",
          // variables: {
          //   title: "{{description}}",
          //   section: "{{title}}",
          // },
        },
        blog: {
          tenant: "flayyer",
          deck: "flayyer-docs",
          template: "page",
          // variables: {
          //   title: "{{description}}",
          //   section: "{{title}}",
          // },
        },
      },
    ],
  ],
};
