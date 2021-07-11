---
id: docusaurus
title: Docusaurus.io
---

> Repository: https://github.com/useflyyer/integration-examples/tree/main/examples/docusaurus

This documentation site is built with Docusaurus v2, so you can also refer to [this source code](https://github.com/useflyyer/flyyer-docs) to see a production example.

**This plugin requires [Docusaurus v2](https://v2.docusaurus.io/).** There is no support for v1.

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Install [@flyyer/docusaurus-preset](https://github.com/useflyyer/docusaurus-preset):

```bash title="Terminal.app"
yarn add @flyyer/docusaurus-preset
```

</TabItem>

<TabItem value="npm">

Install [@flyyer/docusaurus-preset](https://github.com/useflyyer/docusaurus-preset):

```bash title="Terminal.app"
npm install --save @flyyer/docusaurus-preset
```

</TabItem>
</Tabs>

On your `docusaurus.config.js` add `@flyyer/docusaurus-preset` at the end of your `presets` array:

```js
{
  // ...
  presets: [
    // ...
    [
      "@flyyer/docusaurus-preset",
      {
        // Use this for the root "/"
        main: { tenant: "flyyer", deck: "flyyer-docs", template: "page" },
        // Use this flyyer for individual documentation pages
        docs: {
          tenant: "flyyer",
          deck: "flyyer-docs",
          template: "page",
          variables: {
            // Enable variable replacement
            title: "{{id}} - {{title}}",
            description: "{{description}}",
            static: "Plain hardcoded string",
          },
        },
        // Use this flyyer for individual blogpost pages
        blog: {
          tenant: "flyyer",
          deck: "flyyer-docs",
          template: "page",
          // Pick values form the context
          variables: ["title", "description"],
        },
      },
    ],
  ],
}
```
