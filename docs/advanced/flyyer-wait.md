---
id: flyyer-wait
title: .flyyer-wait
---

To tell our rendering service to wait for a particular task you can use `.flyyer-wait` CSS class on your HTML and our service will wait until that class disappears.

This is particularly useful for

- [use-smartcrop](https://github.com/useflyyer/use-smartcrop)
- [use-googlefonts](https://github.com/useflyyer/use-googlefonts)

```tsx
import React from "react";
import { useSmartcrop, SmartcropStatus } from "use-smartcrop";

export default function Template({ width, height }) {
  // TODO: get this from variables.
  const src = "https://images.pexels.com/photos/1496286/pexels-photo-1496286.jpeg";

  // Width and height are required.
  const [cropped, error] = useSmartcrop({ src }, { width, height, minScale: 1.0 });
  if (error) {
    console.error(error);
  }

  return (
    <div className={!cropped && "flyyer-wait"}>
      {cropped && <img src={cropped} />}
    </div>
  );
}
```

We recommend the module [`clsx`](https://github.com/lukeed/clsx) to toggle classes:

```tsx
import clsx from "clsx";

// ...

return (
  <div className={clsx({ "flyyer-wait": !cropped })}>
    {cropped && <img src={cropped} />}
  </div>
);
```
