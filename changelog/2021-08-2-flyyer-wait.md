---
slug: flyyer-wait
title: Prevent premature renders
author: Patricio Lopez Juri
author_title: Founder @ Flyyer.io
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [flyyer,feature]
---

To prevent premature renders because you are waiting for an image or doing some slow CPU task you can toggle a `.flyyer-wait` CSS class in your template's HTML to tell our rendering service to wait until that class disappears.

Our decks in production use this class while waiting for [use-smartcrop](https://github.com/useflyyer/use-smartcrop): https://github.com/useflyyer/flyyer-marketplace-brand/blob/main/templates/horizontal.tsx

```tsx {3}
export default function Template() {
  return (
    <div className={areYouReady ? "READY!" : "flyyer-wait"}>
      {content}
    </div>
  );
}
```

See more details at: [/docs/advanced/flyyer-wait](/docs/advanced/flyyer-wait)
