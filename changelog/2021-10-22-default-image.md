---
slug: default-image
title: "Faster responses for default images"
author: Franco Mendez
author_title: Co-Founder @ Flyyer.io
author_url: https://github.com/fnmendez
author_image_url: https://github.com/fnmendez.png?size=200
tags: [flyyer,feature]
---

Hey there 👋

Anytime you integrate Flyyer.io with your existing website you can keep your original image to use it with the _**Default**_ handler and as the main image with the _**Template**_ handler.

To ensure Flyyer gets the right image, you can setup a meta-tag in your HTML's head with: `<meta property="flyyer:default" content="/img/product/1.png">`.

![flyyer ui showing template and default variant handlers](/img/changelog/modal.png)

But it turns out getting this image from every page takes an additional request from our CDN so every image takes longer to appear.

**Good news: we just updated Flyyer libraries and CDN to make reduce latency by directly passing the default image's URL to Flyyer CDN via a new `_def` (`default`) query parameter**.

How to upgrade (note `_def` value is [URL-encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)), we well consider a website with a page `/products/hoodie` as the example here:

```diff {6}
- <meta property="og:image" content="https://cdn.flyyer.io/v2/project_/_/products/hoodie" />
- <meta property="flyyer:default" content="/products/hoodie/picture.png" />

+ <meta
+    property="og:image"
+    content="https://cdn.flyyer.io/v2/project/_/_def=%2Fproduct%2Fhoodie%2Fpicture.png/products/hoodie"
+ />
```



If you are using one of our SDK/libraries It's already available for [Node.js](/guides/javascript/flyyer-js#default-image), [Python](/guides/python/flyyer#default-image), [PHP](/guides/php/flyyer#default-image) and [Ruby](/guides/ruby/flyyer#default-image).

Here is an example for JavaScript-based projects:

```tsx {8}
import { Flyyer } from "@flyyer/flyyer";

const product = { /* */ }

const flyyer = new Flyyer({
  project: "your-project-identifier",
  path: product["path"],
  default: product["image_path"],
});

// Use this image in your <head/> tags
const url = flyyer.href()
// > https://cdn.flyyer.io/v2/your-project-identifier/_/_def=%2Fproduct%2Fhoodie%2Fpicture.png&__v=1618283086/products/hoodie
```

To upgrade your flyyer-js library run:

```sh
npm install --save @flyyer/flyyer@latest

yarn add @flyyer/flyyer@latest
```

Remember to join our Discord channel to discuss new features: https://flyyer.io/discord

Happy sharing.
