---
id: gatsbyjs
title: Gatsby.js
---

<!-- TODO -->
<!-- > Repository: https://github.com/useflyyer/integration-examples/tree/main/examples/gatsby -->

<!-- Please refer to [this guide](https://www.gatsbyjs.com/docs/add-seo-component/) first to understand how to handle **meta-tags** for SEO. -->

## Installation

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

### 1. Install modules

Install [@flyyer/flyyer](./flyyer-js.md), [react-helmet](https://github.com/nfl/react-helmet) and [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/).

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
yarn add @flyyer/flyyer react-helmet gatsby-plugin-react-helmet
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npm install --save @flyyer/flyyer react-helmet gatsby-plugin-react-helmet
```

</TabItem>
</Tabs>

### 2. Add the plugin to the plugins array in your `gatsby-config.js`

```js title="gatsby-config.js"
plugins: [`gatsby-plugin-react-helmet`]
```

### 3. Generate smart image URLs for your meta-tags

Use `react-helmet` to append the meta-tags to the `<head />`. The plugin will make sure it works with static generation ("server-side") which is required for link previews. Then `@flyyer/flyyer` to generate the smart image link along with `props.location` from the page component to set the `pathname` dynamically.

You can Find your `project-slug` in [your dashboard](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). Don't have a project yet? [Create one here](https://flyyer.io/get-started?ref=docs).

This example is on the index page, but it should work on any of your pages as is.

```jsx title="pages/index.js" {3,6-9,12-15,17,19}
import React from "react"
import { Helmet } from "react-helmet"
import { Flyyer } from "@flyyer/flyyer"

export default function IndexPage(props) {
  const flyyer = new Flyyer({
    project: "your-project-slug",
    path: props.location.pathname,
  });
  return (
    <div>
      <Helmet>
        <meta property="og:image" content={flyyer.href()} />
        <meta name="twitter:image" content={flyyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* [Recommended] Keep your original og:image handy for your project */
        /* <meta name="flyyer:default" content={your-original-og-image} /> */
        /* ... */}
      </Helmet>
      {/* ... */}
    </div>
  )
}
```

:::note
If query params from your URL enrich your image preview, you can get them from `props.location.search`
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Signed URLs

The module `@flyyer/flyyer` supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```jsx title="pages/index.js" {4,8-9,21-31}
import React from "react"
import { Helmet } from "react-helmet"
import { Flyyer } from "@flyyer/flyyer"

export default function IndexPage(props) {
  const flyyer = new Flyyer({
    project: "your-project-slug",
    path: props.location.pathname,
    secret: "your-secret-key",
    strategy: "JWT", // or "HMAC"
  });
  return (
    <div>
      <Helmet>
        <meta property="og:image" content={flyyer.href()} />
        <meta name="twitter:image" content={flyyer.href()} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* [Recommended] Keep your original og:image handy for your project */
        /* <meta name="flyyer:default" content={your-original-og-image} /> */
        /* ... */}
      </Helmet>
      {/* ... */}
    </div>
  )
}
```

:::caution
Make sure Flyyer is instanciated at build time or server-side, so your secret is not exposed on the client. You're invited to [contribute to this guide](https://github.com/useflyyer/flyyer-docs/edit/main/guides/javascript/gatsbyjs.md) with your preferred method.
:::
