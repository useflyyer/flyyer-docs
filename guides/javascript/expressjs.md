---
id: expressjs
title: Express.js
---

<!-- TODO -->
<!-- > Repository: https://github.com/flayyer/integration-examples/tree/main/examples/express -->

## Installation

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Install the [@flayyer/flayyer](./flayyer-js.md) module.

```bash title="Terminal.app"
yarn add @flayyer/flayyer
```

</TabItem>

<TabItem value="npm">

Install the [@flayyer/flayyer](./flayyer-js.md) module.

```bash title="Terminal.app"
npm install --save @flayyer/flayyer
```

</TabItem>
</Tabs>

Use `@flayyer/flayyer` to generate the smart image link on your controllers, then the `req.originalUrl` to set the current `pathname` dynamically.

You can find your `project-slug` in [your dashboard](https://flayyer.com/auth/login?ref=docs). Don't have a project yet? [Create one here](https://flayyer.com/get-started?ref=docs).

In this example we do it for the root path (`/`) but should work for any path as is.

```js title="routes/index.js" {1,7-10,12}
const { FlayyerAI } = require("@flayyer/flayyer");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const flayyer = new FlayyerAI({
    project: "your-project-slug",
    path: req.originalUrl,
  })
  // Pass `flayyer` variables to views.
  res.render('index', { title: 'Express', flayyerHref: flayyer.href() });
});
```

Use your favorite view engine, just make sure to render the following meta-tags in the `<head />` of your pages.

```tsx
<meta property="og:image" content={flayyerHref} />
<meta name="twitter:image" content={flayyerHref} />
<meta name="twitter:card" content="summary_large_image" />
```

**If you're using Jade**, set it on your layout views.

```jade title="views/layout.jade" {2-3}
head
  meta(property='og:image', content='#{flayyerHref}')
  meta(name='twitter:image', content='#{flayyerHref}')
  meta(name='twitter:card', content='summary_large_image')
```

:::note
Rendering `<meta />` inside the `<body />` of your pages **will no have the desired effect**. Make sure you always render those meta-tags in the `<head />` of your pages, and that they are not overwritten elsewhere.
:::

## Advanced usage

### Signed URLS

The module `@flayyer/flayyer` supports HMAC and JWT signatures.

To find your `secret key`, go to [your dashboard](https://flayyer.com/dashboard/_/projects?ref=docs) > your project > Advanced settings > Signed URLS, and enable the signing strategy you desire.

```js title="routes/index.js" {10-11}
const { FlayyerAI } = require("@flayyer/flayyer");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const flayyer = new FlayyerAI({
    project: "your-project-slug",
    path: req.originalUrl,
    secret: "your-secret-key",
    strategy: "JWT", // or "HMAC"
  })
  // Pass `flayyer` variables to views.
  res.render('index', { title: 'Express', flayyerHref: flayyer.href() });
});
```

Render your meta-tags just as in the previous section.
