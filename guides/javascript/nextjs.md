---
id: nextjs
title: Next.js
---

> Repository: https://github.com/flayyer/integration-examples/tree/main/examples/next

We are glad you are here, our [landing page and dashboard](https://flayyer.com) sites are built with [Next.js](https://nextjs.org/).

The JavaScript module [@flayyer/flayyer](./flayyer-js.md) is the only dependency you will need. In this guide we are going to show how it can be integrated with Next.js. This guide is only a basic example and you should adapt it to your needs.

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

## Basic integration

The general idea is rendering a `<meta />` tag in the `<head />` of the HTML using [next/head](https://nextjs.org/docs/api-reference/next/head) where the image of the URL is the URL provided by Flayyer.

```jsx title="pages/index.js" {2,4-11,19-21}
import Head from "next/head"
import Flayyer from "@flayyer/flayyer"

const flayyer = new Flayyer({
  tenant: "your-tenant-slug",
  deck: "my-project",
  template: "main",
  variables: {
    title: "Hello world!",
  },
})

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={flayyer.href()} />
        <meta name="twitter:image" content={flayyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}
```

## Advanced integration

If you have many dynamic pages you can programmatically assign the variables of the Flayyer URL based on the attributes of the current objects within your page.

This is recommended for [static](#static-props) or [server](#server-props) pages:

### Static props

Make sure you understand how [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) works.

```jsx title="pages/products/[id].js" {2,5-15,21-23}
import Head from "next/head"
import Flayyer from "@flayyer/flayyer"

export default function ItemPage({ item }) {
  const flayyer = new Flayyer({
    tenant: "your-tenant-slug",
    deck: "my-project",
    template: "product", // here we use a different template for items
    variables: {
      title: item.title,
    },
    meta: {
      id: item.id, // for analytics
    },
  })

  return (
    <div>
      <Head>
        <title>Product: {item.title}</title>
        <meta property="og:image" content={flayyer.href()} />
        <meta name="twitter:image" content={flayyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <p>You are viewing {item.title}</p>
    </div>
  )
}

const ITEMS = [{
  id: 1,
  title: "Book",
}, {
  id: 2,
  title: "Laptop",
}]

export async function getStaticPaths() {
  return {
    paths: ITEMS.map(ITEM => ({ params: { id: ITEM.id } })) // [{ id: 1 }, { id: 2 }]
  }
}

export async function getStaticProps(context) {
  const ITEM = ITEMS.find(ITEM => ITEM.id === context.params["id"])
  return {
    props: { item: ITEM }, // will be passed to the page component as props
  }
}
```

### Server props

Make sure you understand how [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)

```jsx title="pages/products/[id].js" {2,5-15,21-23}
import Head from "next/head"
import Flayyer from "@flayyer/flayyer"

export default function ItemPage({ item }) {
  const flayyer = new Flayyer({
    tenant: "your-tenant-slug",
    deck: "my-project",
    template: "product", // here we use a different template for items
    variables: {
      title: item.title,
    },
    meta: {
      id: item.id, // for analytics
    },
  })

  return (
    <div>
      <Head>
        <title>Product: {item.title}</title>
        <meta property="og:image" content={flayyer.href()} />
        <meta name="twitter:image" content={flayyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <p>You are viewing {item.title}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params["id"]
  const res = await fetch(`https://.../api/products/${id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { item: data }, // will be passed to the page component as props
  }
}
```

## FAQ

### Does Flayyer works with Next.js export feature?

Yes ✅

### Is there any performance impact?

No, it is super lightweight and simple. [See it by yourself](https://bundlephobia.com/result?p=@flayyer/flayyer).
