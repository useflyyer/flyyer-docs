---
id: cache-invalidation
title: Cache invalidation
---

Each time a link is shared on social media, those social networks executes some crawlers/bots to grab content from the website and display rich information to their users.

Regarding images, these crawlers looks for `og:image` and `twitter:image` meta-tags to render the preview images we usually see on posts. These crawlers store those images in a cache to deliver content faster to their users the next time the links are shared.

**The problem comes when an image is cached and you update your flyyers (or the content changes) and these social networks are still rendering the old image from their cache layer**.

There is two ways of dealing with this issue 👇

## The __v parameter

When you use one of our [libraries](/docs/libraries) we append a `__v` argument to any generated URL. This argument is a timestamp that changes every time an URL is generated to force a cache invalidation on the social media crawlers but it is ignored on Flayyer's servers when retrieving images from caches layers.

**This tries to force social media crawlers to always show the latest version of an image but our system is smart enough to not trigger unnecessary renders of your images.**

### Toggling off

If you are using Flyyer Render in other ways but _og:images_, let's say:

* Rendering images in your website or app.
* Using it as an API to render content, etc.

**If you want to improve performance on those cases: we recommend toggling off this feature so the users' browser can store the images on their local cache and prevent extra request to our servers.** This ensures a better UX, less network consumption and less carbon footprint.

To toggle it of —if you are using one of our libraries— just set the `meta.v` parameter to `null` (or `nil`, `NONE`, depending on your programing language):

```js
const flyyer = new FlyyerRender({
  meta: {
    v: null,
  },
});
```

## Automatic invalidation

We are working on a system to automatically invalidate cache of links. Stay tuned!

## Manual invalidation

The last resource is to force an invalidation. Each social network has its own user interface to accomplish this.

* Facebook, Whatsapp and Instagram: https://developers.facebook.com/tools/debug/
* Twitter: https://cards-dev.twitter.com/validator
* LinkedIn: https://www.linkedin.com/post-inspector/
* Telegram: https://t.me/WebpageBot

Are we missing something? [Let us know.](https://github.com/useflyyer/flyyer-docs/issues)
