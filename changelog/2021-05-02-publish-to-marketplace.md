---
slug: publish-to-marketplace
title: Publish to Marketplace
author: Patricio Lopez Juri
author_title: Founder @ Flayyer.com
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [marketplace]
---

Now you can make your templates public by publishing them to the [Flayyer Marketplace](https://flayyer.com/marketplace).

It is super easy, just set on your `flayyer.config.js` the `marketplace` flag to `true`.

```js title=flayyer.config.js {14}
const {config} = require('@flayyer/flayyer-types');
require('dotenv').config();

module.exports = config({
  engine: 'react-typescript',
  key: process.env.FLAYYER_KEY,
  deck: 'impact-news',

  // Optionals
  name: 'Impact News',
  description: 'A short description of this deck.',
  homepage: 'https://lopezjuri.com', // your personal webpage.
  keywords: ['news', 'vue', 'tailwind'],
  marketplace: true,
  repository: 'https:/github.com/flayyer/impact-news',
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // supported formats
});
```
