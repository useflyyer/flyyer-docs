---
id: components
title: Components
---

Do you have multiple templates and you want to share components between these templates? Create a `/components` directory in the root of your project. Then you can import the components as usual.

```ssh
mkdir components
```

```tree {3,4}
PROJECT-NAME/
│   ...
├── components/
│   └── Title.js
├── templates/
│   ├── blog-post.js
│   └── home.js
│   ...
```

Here is an example:

```jsx title="components/Title.js"
import React from "react";

export function Title(props) {
  return <h1 {...props} />;
}
```

```jsx title="templates/home.js" {2}
import React from "react";
import { Title } from "../components/Title";

export default function HomeTemplate({ variables })) {
  return <Title>{variables.title}</Title>;
}
```
