---
id: typescript
title: Typescript
---

To add Typescript support (if you started with a Javascript template) do the following:

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
yarn add --dev typescript @flayyer/flayyer-types @types/react
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npm i --save-dev typescript @flayyer/flayyer-types @types/react
```

</TabItem>
</Tabs>

Create a file named `types.d.ts` to silence errors when importing assets such as `import logo from "../assets/logo.png"`.

```tsx title="types.d.ts"
/// <reference types="@flayyer/flayyer-types/global" />
```

Add this minimal `tsconfig.json`:

```tsx title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react",
    "esModuleInterop": true,
    "allowJs": true,
  },
  "exclude": ["node_modules", ".flayyer-cache", ".flayyer-dev", ".flayyer-dist", ".flayyer-processed"],
  "include": ["types.d.ts", "**/*.ts", "**/*.tsx"]
}
```

Now you can code your templates using Typescript:

```tsx title="templates/main.tsx"
import React from "react";
import { TemplateProps } from "@flayyer/flayyer-types";

type Variables = {
  title: string;
};

export default function MainTemplate({ agent, variables }: TemplateProps<Variables>) {
  const title = variables.title; // string | undefined
  // ...
}
```

:::note
Remember to use the extension `.tsx` for Typescript files.
:::
