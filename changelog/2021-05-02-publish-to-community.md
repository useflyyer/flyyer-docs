---
slug: publish-to-community
title: Publish to Community
author: Patricio Lopez Juri
author_title: Founder @ Flyyer.io
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [community]
---

Now you can make your templates public by publishing them to the [Flayyer Community](https://flyyer.io/community).

It is super easy, just set on your `flyyer.config.js` the `private` flag to `false`.

```js title=flyyer.config.js {14}
const {config} = require('@flyyer/types');
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
  private: false, // 👈 set to false to make it public
  repository: 'https:/github.com/useflyyer/impact-news',
  sizes: ['THUMBNAIL', 'BANNER', 'SQUARE', 'STORY'] // supported formats
});
```
