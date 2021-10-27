---
slug: flyyer-lite
title: "Lightweight Flyyer JS module: flyyer-lite"
author: Patricio Lopez Juri
author_title: Founder @ Flyyer.io
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [flyyer,feature]
---

Hello fellow developers 👋

This feature has been around for a while but it requires a special mention here.

JavaScript projects are very sensible to third-party dependencies file sizes because each byte sent to the browsers can reduce the time to interaction.

Our JavaScript library `@flyyer/flyyer` includes some cryptographic functions to [sign URLs](/guides/javascript/flyyer-js#signed-urls), but if you are not using this feature you can use our lightweight module that doesn't include those functions.

```sh
npm install --save @flyyer/flyyer-lite

yarn add @flyyer/flyyer-lite
```

The code change is minimal:

```diff
- import { Flyyer } from "@flyyer/flyyer";
+ import { Flyyer } from "@flyyer/flyyer-lite";
```

See the difference here:

![bundlephobia with Flyyer JS](/img/changelog/bundlephobia.png)

* https://bundlephobia.com/package/@flyyer/flyyer-lite
* https://bundlephobia.com/package/@flyyer/flyyer

Remember to join our Discord channel to discuss new features: https://flyyer.io/discord

Happy sharing.
