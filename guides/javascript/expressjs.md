---
id: expressjs
title: Express.js
---

> Repository: https://github.com/flayyer/integration-examples/tree/main/examples/express

The JavaScript module [@flayyer/flayyer](./flayyer-js.md) is the only dependency you will need. In this guide we are going to show how it can be integrated with Express.js. This guide is only a basic example and you should adapt it to your needs.

## Setup

We assume you already have a project. If not you can create a new one with:

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
yarn global add express-generator
express my-app
cd my-app
yarn install
```

Then install [@flayyer/flayyer](./flayyer-js.md):

```bash title="Terminal.app"
yarn add @flayyer/flayyer
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npx express-generator my-app
cd my-app
npm install
```

Then install [@flayyer/flayyer](./flayyer-js.md):

```bash title="Terminal.app"
npm install --save @flayyer/flayyer
```

</TabItem>
</Tabs>

Then add Flayyer on your routers, controllers and handlers. Example:

```js title="routes/index.js" {2,10-17,20}
// Require `Flayyer` class constructor
const Flayyer = require("@flayyer/flayyer").default;

// Express stuff
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const flayyer = new Flayyer({
    tenant: "your-tenant-slug",
    deck: "my-project",
    template: "main",
    variables: {
      title: "Hello world!",
    },
  })
  // Pass `flayyer` variables to views.
  // In particular to `views/layout.jade`.
  res.render('index', { title: 'Express', flayyer: flayyer });
});
```

On your layout views:

```jade title="views/layout.jade" {2-3}
head
  meta(property='og:image', content='#{flayyer}')
  meta(property='twitter:image', content='#{flayyer}')
  meta(property='twitter:card', content='summary_large_image')
```

:::caution
Rendering `<meta />` inside the `<body />` of your pages **will no have the desired effect**.
Make sure you always render Flayyer URLs in the `<head />` of your views.
:::
