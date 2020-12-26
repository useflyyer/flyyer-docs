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
      items: ["requirements", "setup", "project-structure", "typescript"],
    },
    {
      type: "category",
      label: "Basic features",
      collapsed: false,
      items: ["features/templates", "features/components", "features/styles", "features/images", "features/fonts"],
    },
  ],
};
