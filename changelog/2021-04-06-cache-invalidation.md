---
slug: cache-invalidation
title: Cache invalidation
author: Patricio Lopez Juri
author_title: Founder @ Flayyer.com
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [flayyer-io]
---

We added a new section about [Cache invalidation](/docs/cache-invalidation) to our docs page so you can check it out 👀

This section explains the `__v` parameter that usually pops up in Flayyer URLs.

This is a random value (not so random, it is just a timestamp) to trigger cache invalidation on social networks crawlers.

You can always [toggle off this feature](/docs/cache-invalidation#toggling-off) by setting to a nullish value the `meta.v` parameter when using our libraries.
