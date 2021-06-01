---
id: nextjs
title: Next.js
---

<!-- TODO -->
<!-- > Repository: https://github.com/flayyer/integration-examples/tree/main/examples/next -->

## Installation

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

### 1. Install the [@flayyer/flayyer](./flayyer-js.md) module

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

### 3. Generate smart image URLs for your meta-tags

Use [next/head](https://nextjs.org/docs/api-reference/next/head) for appending meta-tags to the `<head />`, then `@flayyer/flayyer` to generate the smart image link along with [next/router](https://nextjs.org/docs/api-reference/next/router) to get the current `pathname` dynamically.

You can Find your `project-slug` in [your dashboard](https://flayyer.com/dashboard/_/projects/_/integrate?ref=docs). Don't have a project yet? [Create one here](https://flayyer.com/get-started?ref=docs).

This example is on the index page, but it should work on any of your pages as is.

```jsx title="pages/index.js" {4,7-10,14-16,18}
import React from "react";
import Head from "next/head"
import { useRouter } from "next/router"
import { FlayyerAI } from "@flayyer/flayyer"

export default function IndexPage() {
  const flayyer = new FlayyerAI({
    project: "your-project-slug",
    path: useRouter().asPath,
  });
  return (
    <div>
      <Head>
        <meta property="og:image" content={flayyer.href()} />
        <meta name="twitter:image" content={flayyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* [Recommended] Keep your original og:image handy for your project */
        /* <meta name="flayyer:default" content={your-original-og-image} /> */
        /* ... */}
      </Head>
      {/* ... */}
    </div>
  )
}
```

:::note
If you're having trouble, set this up directly on the page handler (inside the `pages/` folder) and make sure your `og:image` and `twitter:image` meta-tags are not being overwritten elsewhere.
:::

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flayyer.com/dashboard/_/projects/_/)

## Advanced usage

### Signed URLs

The module `@flayyer/flayyer` supports HMAC and JWT signatures. It's important to instanciate FlayyerAI [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) so your secret key is not exposed client-side.

To find your `secret key`, go to [your dashboard](https://flayyer.com/dashboard/_/projects?ref=docs) > your project > Advanced settings > Signed URLS, and enable the signing strategy you desire.

```jsx title="pages/index.js" {4,8-9,21-31}
import Head from "next/head"
import { FlayyerAI } from "@flayyer/flayyer"

export default function IndexPage(props) {
  return (
    <div>
      <Head>
        <meta property="og:image" content={props.flayyerHref} />
        <meta name="twitter:image" content={props.flayyerHref} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* [Recommended] Keep your original og:image handy for your project */
        /* <meta name="flayyer:default" content={your-original-og-image} /> */
        /* ... */}
      </Head>
      {/* ... */}
    </div>
  )
}

// This function runs only server-side, it won't be bundled to the client
export async function getServerSideProps(context) {
  const flayyer = new FlayyerAI({
    project: "your-project-slug",
    path: context.resolvedUrl,
    secret: "your-secret-key",
    strategy: "JWT", // or "HMAC"
  });
  return {
    props: { flayyerHref: flayyer.href() }, // will be passed to the page component as props
  }
}
```

:::note
You can also instanciate FlayyerAI in [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) (instead `getServerSideProps`) as it runs at build time. You're invited to [extend this guide](https://github.com/flayyer/flayyer-docs/edit/main/guides/javascript/nextjs.md) if you like.
:::
