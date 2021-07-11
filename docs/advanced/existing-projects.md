---
id: existing-projects
title: Adding to existing projects
sidebar_label: Existing projects
---

If you already have a repository or project and you want your templates to live inside that project, then you can follow these steps.

The main benefit of having Flayyer inside your project is being able to reuse your current styles and components.

### React.js projects

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Install `react`, `react-dom` and `@flyyer/cli` with:

```bash title="Terminal.app"
yarn add react react-dom
yarn add --dev @flyyer/cli
```

Add the following scripts to your `package.json`:

```json title="package.json" {3-5}
{
  "scripts": {
    "flyyer:start": "flyyer start",
    "flyyer:build": "flyyer build",
    "flyyer:deploy": "flyyer deploy"
  },
}
```

Add the following to your `.gitignore`:

```gitignore title=".gitignore"
.flyyer-*
```

Now you can start the development server with:

```bash title="Terminal.app"
yarn run flyyer:start
```

</TabItem>

<TabItem value="npm">

Install `react`, `react-dom` and `@flyyer/cli` with:

```bash title="Terminal.app"
npm install react react-dom
npm install --save-dev @flyyer/cli
```

Add the following scrips to your `package.json`:

```json title="package.json" {3-5}
{
  "scripts": {
    "flyyer:start": "flyyer start",
    "flyyer:build": "flyyer build",
    "flyyer:deploy": "flyyer deploy"
  },
}
```

Add the following to your `.gitignore`:

```gitignore title=".gitignore"
.flyyer-*
```

Now you can start the development server with:

```bash title="Terminal.app"
npm run-script flyyer:start
```

</TabItem>
</Tabs>

Be aware of the terminal output when running Flayyer in this mode. You are probably going to be asked to install some extra _devDependencies_.

:::note Typescript support
To use Typescript instead of plain Javascript go to: [Typescript](./typescript.md).
:::
