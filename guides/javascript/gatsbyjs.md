---
id: gatsbyjs
title: Gatsby.js
---

> Repository: https://github.com/flayyer/integration-examples/tree/main/examples/gatsby

Please refer to [this guide](https://www.gatsbyjs.com/docs/add-seo-component/) first to understand how to handle **meta-tags** for SEO.

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Install [@flayyer/flayyer](./flayyer-js.md):

```bash title="Terminal.app"
yarn add @flayyer/flayyer gatsby-plugin-react-helmet react-helmet
```

</TabItem>

<TabItem value="npm">

Install [@flayyer/flayyer](./flayyer-js.md):

```bash title="Terminal.app"
npm install --save @flayyer/flayyer gatsby-plugin-react-helmet react-helmet
```

</TabItem>
</Tabs>

Just add the plugin to the plugins array in your `gatsby-config.js`

```js title="gatsby-config.js"
plugins: [`gatsby-plugin-react-helmet`]
```

Then on your pages use `react-helmet` to manipulate the contents of the `<head />`:

```jsx title="pages/index.js"
import React from "react"
import Flayyer from "@flayyer/flayyer"
import { Helmet } from "react-helmet"

const flayyer = new Flayyer({
  tenant: "your-tenant-slug",
  deck: "my-project",
  template: "main",
  variables: {
    title: "Hello world!",
  },
})

export default function PageIndex() {
  return (
    <div>
      <Helmet>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={flayyer.href()} />
        <meta property="twitter:image" content={flayyer.href()} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <p>Hello world!</p>
    </div>
  )
}
```
