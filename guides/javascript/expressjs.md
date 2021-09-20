---
id: expressjs
title: Express.js
---

<!-- TODO -->
<!-- > Repository: https://github.com/useflyyer/integration-examples/tree/main/examples/express -->

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

### 2. Format Flyyer CDN URLs

Use `@flyyer/flyyer` to generate the smart image link on your controllers, then the `req.originalUrl` to set the current `pathname` dynamically.

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

In this example we do it for the root path (`/`) but should work for any path as is.

```js title="routes/index.js" {1,7-10,12}
const { Flyyer } = require("@flyyer/flyyer");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const flyyer = new Flyyer({
    project: "your-project-identifier",
    path: req.originalUrl,
  })
  // Pass `flyyer` variables to views.
  res.render('index', { title: 'Express', flyyerHref: flyyer.href() });
});
```

### 3. Render meta-tags on views

Use your favorite view engine, just make sure to render the following meta-tags in the `<head />` of your pages.

```tsx
<meta property="og:image" content={flyyerHref} />
<meta name="twitter:image" content={flyyerHref} />
<meta name="twitter:card" content="summary_large_image" />
```

**If you're using Jade**, set it on your layout views.

```jade title="views/layout.jade" {2-3}
head
  meta(property='og:image', content='#{flyyerHref}')
  meta(name='twitter:image', content='#{flyyerHref}')
  meta(name='twitter:card', content='summary_large_image')
```

:::note
If you're having trouble, please make sure you always render those meta-tags in the `<head />` of your pages, and that they are not overwritten elsewhere.
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Signed URLS

The module `@flyyer/flyyer` supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```js title="routes/index.js" {10-11}
const { Flyyer } = require("@flyyer/flyyer");

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const flyyer = new Flyyer({
    project: "your-project-identifier",
    path: req.originalUrl,
    secret: "your-secret-key",
    strategy: "JWT", // or "HMAC"
  })
  // Pass `flyyer` variables to views.
  res.render('index', { title: 'Express', flyyerHref: flyyer.href() });
});
```

Render your meta-tags just as in the previous section.
