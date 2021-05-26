---
id: flayyer-js
title: "@flayyer/flayyer"
---

> Repository: https://github.com/flayyer/flayyer

This module is agnostic to any JS framework.

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
yarn add @flayyer/flayyer
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npm install --save @flayyer/flayyer
```

</TabItem>
</Tabs>

After installing this module, generate smart image URLs like follows:

```js
import { FlayyerAI } from "@flayyer/flayyer";

const flayyer = new FlayyerAI({
  // Your project slug
  project: "website-com",
  // Current pathname of your website
  path: `/path/to/product`,
});

// Use this smart image link in your <head/> tags
const url = flayyer.href();
// > https://flayyer.ai/v2/website-com/_/__v=1618281823/path/to/product
```

If you are using React, you should use this URL as content of some of your HTML's head tags to render link previews:

```tsx
// This is just an illustrative example, it depends on how you are using React.
function Head() {
  return (
    <head>
      <meta property="og:image" content={url} />
      <meta name="twitter:image" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </head>
  );
}
```

Take a look into the [Next.js](/guides/javascript/nextjs), [Gatsby.js](/guides/javascript/gatsbyjs) or [other JavaScript technologies](/guides/get-started#javascript-guides) integration guides to see a full example depending on your project setup.

:::note
For link previews to work meta-tags code needs to be static or server-side rendered.
:::
