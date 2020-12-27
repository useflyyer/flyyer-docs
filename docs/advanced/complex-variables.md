---
id: complex-variables
title: Complex Variables
---

Variables are passed through the unique URL of a flayyer as **queryparams**.

## Multiple variables

This is easy, just follow the [correct queryparams standard](https://en.wikipedia.org/wiki/Query_string#Structure) of `?` to start the queryparams and `&` between consecutive variables.

Here is an example: `?first=` and `&second=`, `&third=`, etc.

```bash
https://flayyer.io/v2/flayyer/landing/demo.png?first=Foo&second=Bar&third=Baz
```

Inside the component it looks like this:

```jsx title="templates/main.js" {4}
import React from "react";

export default function DemoTemplate({ variables }) {
  const { first, second, third } = variables; // 👈  variables from queryparams
  // ...
}
```

## Objects and Arrays

For arrays use this syntax: `?array[0]=a&array[1]=b`. Example with an array variables named `items`:

```bash
https://flayyer.io/v2/flayyer/landing/demo.png?items[0]=apple&items[1]=pear
```

```jsx title="templates/main.js" {4}
import React from "react";

export default function DemoTemplate({ variables }) {
  const items = variables.items || []; // 👈  variables from queryparams
  // ...
}
```

For objects use this syntax: `?object[firstname]=a&object[lastname]=b`. Example with an object variables named `user`:

```bash
https://flayyer.io/v2/flayyer/landing/demo.png?user[firstname]=John&user[lastname]=Appleseed
```

```jsx title="templates/main.js" {4}
import React from "react";

export default function DemoTemplate({ variables }) {
  const user = variables.user || {}; // 👈  variables from queryparams
  // ...
}
```

Of course you can mix variables and arrays, but **try to keep variables simple.**

## Types

:::note
This requires [Typescript integration](./typescript.md). For Experimental JavaScript support see [this](https://github.com/flayyer/flayyer-types#experimental-javascript-support).
:::

You can type the variables coming from the props. First install [`@flayyer/flayyer-types`](https://github.com/flayyer/flayyer-types):

```bash title="Terminal.app"
yarn add --dev @flayyer/flayyer-types
```

Then on your templates:

```tsx title="templates/main.tsx" {2,20}
import React from "react";
import { TemplateProps } from "@flayyer/flayyer-types";

type Variables = {
  title: string;
  count: number;
  price: number;
  createdAt: Date;
  object: {
    name: string;
    age: number;
  };
  array: [
    {
      id: number;
    },
  ];
};

export default function MainTemplate({ variables }: TemplateProps<Variables>) {
  const {
    title, // type is `string | undefined`
    count, // type is `string | undefined`
    price = 10, // type is `string | 10` because incoming values will be string!
    createdAt, // type is `string | undefined`
    object, // type is a recursive object with `string | undefined` values
    array, // type is a recursive array with `string | undefined` values
  } = variables;

  return (
    <div>
      {title && <h1>{title}</h1>}
    </div>
  );
}
```
