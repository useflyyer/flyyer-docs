---
id: templates
title: Templates
---

:::note
Every component in the `/templates` directory is going to be treated as a template and **must default export a React.js component**.
:::

This is similar to how Next.js treats pages in the /pages directory.

```jsx title="/templates/hello.js"
import React from "react";

// Correct usage ✅
export default function HelloTemplate({ variables })) {
  return <h1>Hello</h1>;
}
```

:::caution
Folders inside `/templates` is not supported.
:::
