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

### 2. Format Flyyer CDN URLs for your meta-tags

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

Now you can format Flyyer CDN URLs like shown below.

```js
import { Flyyer } from "@flyyer/flyyer";

const flyyer = new Flyyer({
  // Your project identifier
  project: "your-project-identifier",
  // Current pathname of your website, try to set it dynamically
  path: `/path/to/product`,
});

// Use this smart image link in your <head/> tags
const url = flyyer.href();
// > https://cdn.flyyer.io/v2/your-project-identifier/_/__v=1618281823/path/to/product
```

If you are using React, you should use this URL as content of some of your HTML's head tags to render link previews:

```tsx {5-7}
// This is just an illustrative example, it depends on the framework you are using.
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

### Default image

Pass your main or default image for each page through the `default` parameter. This will help Flyyer to create a better preview efficiently.

```js {6}
import { Flyyer } from "@flyyer/flyyer";

const flyyer = new Flyyer({
  project: "your-project-identifier",
  path: "/path/to/product",
  default: "/static/image-1.png", // dynamic paths and URLs are allowed (eg: blogpost.image)
});

// Use this image in your <head/> tags
const url = flyyer.href()
// > https://cdn.flyyer.io/v2/your-project-identifier/_/_def=%2Fstatic%2Fimage-1.png&__v=1618283086/path/to/product
```

### Signed URLs

The module `@flyyer/flyyer` supports HMAC and JWT signatures to prevent bad actors from using your URLs to create images.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

Usage:

```js {6-7}
import { Flyyer } from "@flyyer/flyyer";

const flyyer = new Flyyer({
  project: "your-project-identifier",
  path: "/path/to/product",
  secret: "your-secret-key",
  strategy: "JWT", // or "HMAC"
});

// Use this smart image link in your <head/> tags
const url = flyyer.href();
// > https://cdn.flyyer.io/v2/your-project-identifier/jwt-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJhbXMiOnsiX19pZCI6ImplYW5zLTEyMyJ9LCJwYXRoIjoiXC9wYXRoXC90b1wvcHJvZHVjdCJ9.X8Vs5SGEA1-3M6bH-h24jhQnbwH95V_G0f-gPhTBTzE?__v=1618283086
```

:::note
**Do not expose your secret key!**
Make sure Flyyer is instantiated at build time or server-side, so your secret is not exposed on the client.
:::
