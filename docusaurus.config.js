/* eslint-disable @typescript-eslint/no-var-requires */

const dotenv = require("dotenv");
dotenv.config();

const ALGOLIA_KEY = process.env.ALGOLIA_KEY;
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX;

module.exports = {
  title: "Flyyer docs",
  tagline: "Integration guides and CLI documentation",
  url: "https://docs.flyyer.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "useflyyer", // Usually your GitHub org/user name.
  projectName: "flyyer-docs", // Usually your repo name.
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
      appId: ALGOLIA_APP_ID,
      indexName: ALGOLIA_INDEX,
      // Optional: see doc section bellow
      contextualSearch: false,
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
    announcementBar: {
      id: "announcement-bar",
      content: `👉 Follow us on <a target="_blank" rel="noopener" href="https://twitter.com/useflyyer">Twitter</a> or give it a star on <a target="_blank" rel="noopener" href="https://github.com/useflyyer">Github</a>`,
      // content: `👉 Preview your links with <a target="_blank" rel="noopener" href="https://linkpreview.io?ref=docs">LinkPreview.io</a>, it's free!`,
      backgroundColor: "#4346DE", // Defaults to `#fff`.
      textColor: "#fff", // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: "docs.Flyyer",
      logo: {
        // href: "https://flyyer.io",
        href: "/",
        alt: "Flyyer logo",
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
          label: "Documentation",
        },
        { to: "changelog", label: "Changelog", position: "left" },
        {
          href: "https://flyyer.io?ref=docs",
          label: "Flyyer.io",
          position: "right",
        },
        {
          href: "https://github.com/useflyyer",
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
              label: "Flyyer",
              to: "https://flyyer.io?ref=docs",
            },
            {
              label: "Flyyer Render",
              to: "https://flyyer.io/render?ref=docs",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/useflyyer",
            },
            {
              label: "About",
              href: "https://flyyer.io/about",
            },
            {
              label: "Partnerships",
              href: "https://flyyer.io/partners",
            },
            {
              label: "Jobs",
              href: "https://flyyer.io/jobs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/useflyyer",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/flyyer",
            },
            {
              label: "Discord",
              href: "https://flyyer.io/discord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/useflyyer",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/useflyyer",
            },
          ],
        },
      ],
      logo: {
        alt: "Flyyer logo",
        src: "img/logo.svg",
        href: "https://flyyer.io?ref=docs",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Flyyer.io — Santiago, Chile`,
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
        editUrl: "https://github.com/useflyyer/flyyer-docs/edit/main/",
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
        editUrl: "https://github.com/useflyyer/flyyer-docs/edit/main/",
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
          editUrl: "https://github.com/useflyyer/flyyer-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/useflyyer/flyyer-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.8,
          trailingSlash: false,
        },
      },
    ],
    [
      "@flyyer/docusaurus-preset",
      {
        flyyer: {
          /**
           * Get your project's identifier at https://flyyer.io/dashboard/_/projects/_/integrate
           */
          project: "flyyer-docs",
          secret: process.env.FLYYER_SIGNATURE_KEY,
          strategy: "HMAC",
        },
      },
    ],
  ],
};
