---
id: project-structure
title: Project structure
---

[create-flyyer-app]: https://npmjs.com/package/create-flyyer-app

The most basic project structure (if you used [create-flyyer-app][create-flyyer-app]) should look something like:

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const engines = [
  {label: "React", value: "react"},
  {label: "React Typescript", value: "react-typescript"},
];

<Tabs groupId="engines" defaultValue="react" values={engines}>
<TabItem value="react">

```tree {6}
PROJECT-NAME/
├── static/
│   ├── background.jpg
│   └── logo.svg
├── templates/
│   └── hello.js
├── .eslintrc.js
├── .gitignore
├── flyyer.config.js
├── package.json
└── README.md
```

</TabItem>
<TabItem value="react-typescript">

```tree {6}
PROJECT-NAME/
├── static/
│   ├── background.jpg
│   └── logo.svg
├── templates/
│   └── hello.tsx
├── .eslintrc.js
├── .gitignore
├── flyyer.config.js
├── package.json
├── tsconfig.json
├── types.d.ts
└── README.md
```

</TabItem>
</Tabs>
