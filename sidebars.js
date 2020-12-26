module.exports = {
  docs: [
    {
      type: "doc",
      id: "introduction",
    },
    // {
    //   type: "doc",
    //   id: "getting-started",
    // },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/requirements",
        "getting-started/setup",
        "getting-started/project-structure",
        "getting-started/typescript",
      ],
    },
    {
      type: "category",
      label: "Basic features",
      collapsed: false,
      items: ["features/templates", "features/components", "features/styles", "features/images", "features/fonts"],
    },
  ],
};
