module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    {
      type: "doc",
      id: "requirements",
    },
    {
      type: "doc",
      id: "setup",
    },
    {
      type: "doc",
      id: "project-structure",
    },
    {
      type: "doc",
      id: "typescript",
    },
    {
      type: "category",
      label: "Basic features",
      collapsed: false,
      items: ["features/templates", "features/components", "features/styles", "features/images", "features/fonts"],
    },
    {
      type: "category",
      label: "Command-line interfaces",
      collapsed: false,
      items: ["cli/flayyer-cli"],
    },
    {
      type: "category",
      label: "Advanced",
      collapsed: false,
      items: ["advanced/automatic-deploys"],
    },
  ],
};
