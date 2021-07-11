---
slug: emoji-support
title: Added Emoji support
author: Patricio Lopez Juri
author_title: Founder @ Flyyer.io
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [cli,flyyer-render]
---

Previously emojis were not rendered, until now 🚀

We just released [@flyyer/cli@1.11.0](https://www.npmjs.com/package/@flyyer/cli) which adds an additional post-procesisng step to add Emojis via [twemoji](https://twemoji.twitter.com/), an amazing open-source library from Twitter.

Here is an example:

```txt
https://cdn.flyyer.io/render/v2/flyyer/flyyer-landing-demo/main
  ?title=Now+with+Emojis+😃
```

![Emoji example](https://cdn.flyyer.io/render/v2/flyyer/flyyer-landing-demo/main?title=Now+with+Emojis+😃)

Are we missing a feature? Have you found a bug? Let us know via Github: [github.com/useflyyer/flyyer-cli](https://github.com/useflyyer/flyyer-cli).
