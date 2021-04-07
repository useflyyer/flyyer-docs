---
id: flayyer-js
title: "@flayyer/flayyer"
---

> Repository: https://github.com/flayyer/flayyer

This module is agnostic to any JS framework and has only one peer dependency: [qs](https://github.com/ljharb/qs)

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

After installing this module you can format URLs just like this example:

```js
import { FlayyerIO } from "@flayyer/flayyer";

const flayyer = new FlayyerIO({
  tenant: "tenant",
  deck: "deck",
  template: "template",
  variables: {
    title: "Hello world!",
  },
});

// Use this image in your <head/> tags
const url = flayyer.href();
// > https://flayyer.io/v2/tenant/deck/template.jpeg?__v=1596906866&title=Hello+world%21
```

If you are using React, you should use this URL as content of some of your HTML's head tags to render link previews:

```tsx
// This is just an illustrative example, it depends on how you are suing React.
function Head() {
  return (
    <head>
      <meta property="og:image" content={url} />
      <meta name="twitter:image" content={url} />
    </head>
  );
}
```

Take a look into the [Next.js](/guides/javascript/nextjs) or [Gatsby.js](/guides/javascript/gatsbyjs) integration guide to get an idea of how to use this depending on your project setup.

:::note
For additional information about variables and other terminology please read [Concepts](/docs/concepts).
:::
