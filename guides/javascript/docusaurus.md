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

On your `docusaurus.config.js` add `@flyyer/docusaurus-preset` at the end of your `presets` array, and fill it with your project identifier.

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

```js
{
  // ...
  presets: [
    // ...
    [
      "@flyyer/docusaurus-preset",
      {
        project: "your-project-identifier",
      },
    ],
  ],
}
```

## Advanced usage

### Signed URLs

To prevent bad actors from generating images you can sign your URLs.

🔑 Get your **secret key** here: [flyyer.io/dashboard/_/projects/_/advanced](https://www.flyyer.io/dashboard/_/projects/_/advanced).

> Note: This key is different form your `FLYYER_KEY`.

```js
{
  presets: [
    [
      "@flyyer/docusaurus-preset",
      {
        flyyer: {
          project: "",
          secret: process.env.FLYYER_SIGNATURE_KEY || "your-key",
          strategy: "JWT", // "JWT" | "HMAC"
        }
      },
    ],
  ],
}
```
