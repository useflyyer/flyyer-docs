---
id: flyyer-js
title: "@flyyer/flyyer"
---

> Repository: https://github.com/useflyyer/flyyer-js

## Installation

This module is agnostic to any JS framework and supports TypeScript out of the box.

### 1. Install `@flyyer/flyyer`

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
yarn add @flyyer/flyyer
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npm install --save @flyyer/flyyer
```

</TabItem>
</Tabs>

### 2. Generate smart image URLs for your meta-tags

Find your `project-slug` in [your dashboard](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

Now you can generate smart image URLs like shown below.

```js
import { Flyyer } from "@flyyer/flyyer";

const flyyer = new Flyyer({
  // Your project slug
  project: "your-project-slug",
  // Current pathname of your website, try to set it dynamically
  path: `/path/to/product`,
});

// Use this smart image link in your <head/> tags
const url = flyyer.href();
// > https://cdn.flyyer.io/v2/your-project-slug/_/__v=1618281823/path/to/product
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
The meta-tags code needs to be static, processed at build time or server-side rendered for link previews to work.
:::

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Signed URLs

The module `@flyyer/flyyer` supports HMAC and JWT signatures.

Find your `secret key` in [your dashboard](https://flyyer.io/dashboard/_/projects?ref=docs) > your project > Advanced settings > Signed URLS, and enable the signing strategy you desire.

```js {6-7}
import { Flyyer } from "@flyyer/flyyer";

const flyyer = new Flyyer({
  project: "your-project-slug",
  path: `/path/to/product`,
  secret: "your-secret-key",
  strategy: "JWT", // or "HMAC"
});

// Use this smart image link in your <head/> tags
const url = flyyer.href();
// > https://cdn.flyyer.io/v2/your-project-slug/jwt-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJhbXMiOnsiX19pZCI6ImplYW5zLTEyMyJ9LCJwYXRoIjoiXC9wYXRoXC90b1wvcHJvZHVjdCJ9.X8Vs5SGEA1-3M6bH-h24jhQnbwH95V_G0f-gPhTBTzE?__v=1618283086
```

:::note
Make sure Flyyer is instanciated at build time or server-side, so your secret is not exposed on the client.
:::
