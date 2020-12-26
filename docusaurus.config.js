module.exports = {
  title: "Flayyer docs",
  tagline: "CLI documentation and integration guides",
  url: "https://docs.flayyer.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "flayyer", // Usually your GitHub org/user name.
  projectName: "flayyer-docs", // Usually your repo name.
  themeConfig: {
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
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Documentation",
        },
        {
          to: "/guides",
          // docId: "guides",
          label: "Guides",
          position: "left",
          activeBaseRegex: `/guides/`,
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://flayyer.com",
          label: "Flayyer.com / Try for free",
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
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
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
              href: "https://discord.gg/aPAv4Gg6h9",
              // href: "https://discordapp.com/invite/flayyer",
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
        {
          title: "Company",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/flayyer",
            },
            {
              label: "Blog",
              to: "blog",
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Flayyer.com`,
    },
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        editUrl: "https://github.com/flayyer/flayyer-docs/edit/master/guides/",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars-guides.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
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
          editUrl: "https://github.com/flayyer/flayyer-docs/edit/master/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/flayyer/flayyer-docs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
