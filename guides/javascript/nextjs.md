---
id: nextjs
title: Next.js
---

> Repository: https://github.com/flayyer/integration-examples/tree/main/examples/next

We are glad you are here, our [landing page and dashboard](https://flayyer.com) sites are built with [Next.js](https://nextjs.org/). The JavaScript module [@flayyer/flayyer](./flayyer-js.md) is the only dependency you will need.

## Setup

We assume you already have a project. If not, you can create a new one with:

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

Then install [@flayyer/flayyer](./flayyer-js.md):

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

For link previews, you need a specific `<meta />` tag inside the `<head />` of the HTML which provides the image link as its content. For the image link, you need your `project-slug` (you can find it in [your dashboard](https://flayyer.com/auth/login)) and the current `path` of your website.

We will use [next/head](https://nextjs.org/docs/api-reference/next/head) for appending the meta tag to the `<head />`, then `@flayyer/flayyer` for the smart image link along with [next/router](https://nextjs.org/docs/api-reference/next/router) to get the current `path` dynamically.

In this example we work over the index page, but you can set it like this on any of your pages.

```jsx title="pages/index.js" {3,7-11,14-16,18}
import Head from "next/head"
import { useRouter } from "next/router"
import { FlayyerIO } from "@flayyer/flayyer"

export default function IndexPage() {
  const router = useRouter();
  const flayyer = new FlayyerAI({
    project: "your-project-slug",
    path: router.asPath,
  });
  return (
    <div>
      <Head>
        <meta property="og:image" content={flayyer.href()} />
        <meta name="twitter:image" content={flayyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Optional but recommended to keep your original image preview handy for your project */
        /* <meta name="flayyer:default" content={your-original-og-image} /> */
        /* ... */}
      </Head>
      {/* ... */}
    </div>
  )
}
```

:::note
For link previews this code needs to be static or server-side rendered. Next.js will generate static files in most cases. We recommend you set this up directly on the page handler (i.e. inside the `pages/` folder) to avoid undesired behavior.
:::
