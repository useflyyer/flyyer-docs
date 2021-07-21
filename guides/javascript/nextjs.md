---
id: nextjs
title: Next.js
---

<!-- TODO -->
<!-- > Repository: https://github.com/useflyyer/integration-examples/tree/main/examples/next -->

## Installation

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

### 1. Install the [@flyyer/flyyer](./flyyer-js.md) module

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

Use [next/head](https://nextjs.org/docs/api-reference/next/head) for appending meta-tags to the `<head />`, then `@flyyer/flyyer` to generate the smart image link along with [next/router](https://nextjs.org/docs/api-reference/next/router) to get the current `pathname` dynamically.

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

This example is on the index page, but it should work on any of your pages as is.

```jsx title="pages/index.js" {4,8-11,14-16,19}
import React from "react";
import Head from "next/head"
import { useRouter } from "next/router"
import { Flyyer } from "@flyyer/flyyer"

export default function IndexPage() {
  const router = useRouter();
  const flyyer = new Flyyer({
    project: "your-project-identifier",
    path: router.asPath,
  });
  return (
    <div>
      <Head>
        <meta key="og:image" property="og:image" content={flyyer.href()} />
        <meta key="twitter:image" name="twitter:image" content={flyyer.href()} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        {/* [Recommended] Keep your original og:image handy for your project */}
        <meta key="flyyer:default" name="flyyer:default" content="https://..." />
        {/* ... */}
      </Head>
      {/* ... */}
    </div>
  )
}
```

:::note
If you're having trouble, set this up directly on the page handler (inside the `pages/` folder) and make sure your `og:image` and `twitter:image` meta-tags are not being overwritten elsewhere. Tip: Next.js overwrites tags with the same `key`.
:::

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Signed URLs

The module `@flyyer/flyyer` supports HMAC and JWT signatures. It's important to instanciate Flyyer [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) so your secret key is not exposed client-side.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```jsx title="pages/index.js" {4,8-9,21-31}
import Head from "next/head"
import { Flyyer } from "@flyyer/flyyer"

export default function IndexPage(props) {
  return (
    <div>
      <Head>
        <meta key="og:image" property="og:image" content={props.flyyerHref} />
        <meta key="twitter:image" name="twitter:image" content={props.flyyerHref} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        {/* [Recommended] Keep your original og:image handy for your project */
        /* <meta key="flyyer:default" name="flyyer:default" content={your-original-og-image} /> */
        /* ... */}
      </Head>
      {/* ... */}
    </div>
  )
}

// This function runs only server-side, it won't be bundled to the client
export async function getServerSideProps(context) {
  const flyyer = new Flyyer({
    project: "your-project-identifier",
    path: context.resolvedUrl,
    secret: "your-secret-key",
    strategy: "JWT", // or "HMAC"
  });
  return {
    props: { flyyerHref: flyyer.href() }, // will be passed to the page component as props
  }
}
```

:::note
You can also instanciate Flyyer in [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) (instead `getServerSideProps`) as it runs at build time. You're invited to [extend this guide](https://github.com/useflyyer/flyyer-docs/edit/main/guides/javascript/nextjs.md) if you like.
:::
