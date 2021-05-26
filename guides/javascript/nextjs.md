---
id: nextjs
title: Next.js
---

<!-- TODO -->
<!-- > Repository: https://github.com/flayyer/integration-examples/tree/main/examples/next -->

## Installation

If you don't have a Next.js app yet, create one with:

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
yarn create next-app
```

Install the [@flayyer/flayyer](./flayyer-js.md) module.

```bash title="Terminal.app"
yarn add @flayyer/flayyer
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npx create-next-app
```

Then install [@flayyer/flayyer](./flayyer-js.md):

```bash title="Terminal.app"
npm install --save @flayyer/flayyer
```

</TabItem>
</Tabs>

We will use [next/head](https://nextjs.org/docs/api-reference/next/head) for appending meta tags to the `<head />` of the HTML, then `@flayyer/flayyer` for the smart image link along with [next/router](https://nextjs.org/docs/api-reference/next/router) to get the current `path` dynamically.

You can find your `project-slug` in [your dashboard](https://flayyer.com/auth/login?ref=docs). Don't have a project yet? Create one [here](https://flayyer.com/get-started?ref=docs).

This example is on the index page, but it should work on any of your pages as is.

```jsx title="pages/index.js" {3,6-9,13-15,17}
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
For link previews this code needs to be static or server-side rendered. Next.js does this by default so it should work effortless. If you're having troubles, we suggest to set this up directly on the page handler (inside the `pages/` folder).
:::

## Advanced usage

### Signed URLs

The module `@flayyer/flayyer` supports HMAC and JWT signatures. It's important to use [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) so your secret key is not exposed client-side. To find your `secret key`, go to [your dashboard](https://flayyer.com/dashboard/_/projects?ref=docs) > Your project > Advanced settings > Signed URLS, and enable the signing strategy you desire.

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
