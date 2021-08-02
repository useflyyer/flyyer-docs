module.exports = {
  docs: [
    {
      type: "doc",
      id: "getting-started",
    },
    {
      type: "doc",
      id: "requirements",
    },
    {
      type: "doc",
      id: "concepts",
    },
    {
      type: "category",
      label: "Basic features",
      collapsed: false,
      items: [
        "features/templates",
        "features/components",
        "features/schema",
        "features/styles",
        "features/images",
        "features/fonts",
        "features/agent-detection",
      ],
    },
    {
      type: "doc",
      id: "project-structure",
    },
    {
      type: "category",
      label: "Command-line interfaces",
      collapsed: false,
      items: ["cli/flyyer-cli"],
    },
    {
      type: "doc",
      id: "libraries",
    },
    {
      type: "doc",
      id: "cache-invalidation",
    },
    {
      type: "category",
      label: "Advanced",
      // collapsed: false,
      items: [
        "advanced/complex-variables",
        "advanced/typescript",
        "advanced/i18n",
        "advanced/automatic-deploys",
        "advanced/monorepo",
        "advanced/existing-projects",
      ].sort(),
    },
  ],
};
