---
id: images
title: Images and SVG
---

We recommend creating a folder called `/static` or `/assets` and putting any image in that folder. This is optional, you can name the folder as you want.

```bash title="Terminal.app"
mkdir assets
```

To import files:

```jsx title="templates/main.js" {3,4}
import React from "react";

import background from "../static/background.jpg";
import logo from "../static/logo.svg";

export default function Template({ variables }) {
  return (
    <div style={{ /* ... */ }}>
      <img src={background} style={{ /* ... */ }} />
      <img src={logo} style={{ /* ... */ }} />
    </div>
  )
}
```

## Smart crop

To create smart images that focus on people's faces use [use-smartcrop](https://github.com/useflyyer/use-smartcrop) built by us on top of [jwagner/smartcrop.js](https://github.com/jwagner/smartcrop.js/)

It's important to use `.flyyer-wait` CSS class to prevent premature renders, see [/docs/advanced/flyyer-wait](/docs/advanced/flyyer-wait).

![Example of use-smartcrop](https://raw.githubusercontent.com/useflyyer/use-smartcrop/HEAD/.github/image.png)
