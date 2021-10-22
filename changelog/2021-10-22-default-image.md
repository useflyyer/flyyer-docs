---
slug: default-image
title: "Optimize latency with a default image per page"
author: Franco Mendez
author_title: Co-Founder @ Flyyer.io
author_url: https://github.com/fnmendez
author_image_url: https://github.com/fnmendez.png?size=200
tags: [flyyer,feature]
---

Hey there 👋

A high CTR link preview usually has a **main image** accompanied by other elements. When this image is available in your website, Flyyer crawler gets it and builds a high CTR link preview among other site data (title, description, price, etc).

To ensure Flyyer gets the right image, you can provide `<meta property="flyyer:default" content="the-page-main-image-url">`, although that needs the crawler to read it.

For our **low-latency exigent customers, we've added the -optional- `default` parameter on the Flyyer constructor**. This provides the main image - **per page** - directly so the crawler isn't needed.

It's already available for [Node.js](/guides/javascript/flyyer-js#default-image), [Python](/guides/python/flyyer#default-image), [PHP](/guides/php/flyyer#default-image) and [Ruby](/guides/ruby/flyyer#default-image).

For the Node.js case it looks like this:

```js {6}
import { Flyyer } from "@flyyer/flyyer";

const flyyer = new Flyyer({
  project: "your-project-identifier",
  path: "/path/to/product",
  default: "/static/main/page/image.png",
});

// Use this image in your <head/> tags
const url = flyyer.href()
// > https://cdn.flyyer.io/v2/your-project-identifier/_/_def=%2Fstatic%2Fmain%2Fpage%2Fimage.png&__v=1618283086/path/to/product
```

To upgrade your flyyer-js library run:

```sh
yarn add @flyyer/flyyer@latest
```

Remember to join our Discord channel to discuss new features: https://flyyer.io/discord

Happy sharing.
