---
id: setup
title: Setup
---

## Create project (recommended)

We recommend creating a new Flayyer app using `create-flayyer-app`, which sets up everything automatically for you. To start a project, run in your terminal:

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Using Yarn this will create a folder called `flayyer-app` in your current directory:

```bash title="Terminal.app"
yarn create flayyer-app
```

</TabItem>

<TabItem value="npm">

Using NPM this will create a folder called `flayyer-app` in your current directory:

```bash title="Terminal.app"
npx create-flayyer-app
```

</TabItem>
</Tabs>

You will be prompted with multiple starting setups. You can chose the one that suites best for you.

```txt {2}
? Select the best template setup for you …  You can customize the template later
react
react-styled-components
react-typescript-styled-components
react-typescript-tailwind
vue
vue-typescript
```

## Adding to existing projects

If you already have a repository or project and you want your templates to live inside that project, then you can follow these steps.

The main benefit of having Flayyer inside your project is being able to reuse your current styles and components.

### React.js projects

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Install `react`, `react-dom` and `@flayyer/cli` with:

```bash title="Terminal.app"
yarn add react react-dom
yarn add --dev @flayyer/cli
```

Add the following scrips to your `package.json`:

```json title="package.json" {3-5}
{
  "scripts": {
    "flayyer:start": "flayyer start",
    "flayyer:build": "flayyer build",
    "flayyer:deploy": "flayyer deploy"
  },
}
```

Add the following to your `.gitignore`:

```gitignore title=".gitignore"
.flayyer-*
```

Now you can start the development server with:

```bash title="Terminal.app"
yarn run flayyer:start
```

</TabItem>

<TabItem value="npm">

Install `react`, `react-dom` and `@flayyer/cli` with:

```bash title="Terminal.app"
npm install react react-dom
npm install --save-dev @flayyer/cli
```

Add the following scrips to your `package.json`:

```json title="package.json" {3-5}
{
  "scripts": {
    "flayyer:start": "flayyer start",
    "flayyer:build": "flayyer build",
    "flayyer:deploy": "flayyer deploy"
  },
}
```

Add the following to your `.gitignore`:

```gitignore title=".gitignore"
.flayyer-*
```

Now you can start the development server with:

```bash title="Terminal.app"
npm run-script flayyer:start
```

</TabItem>
</Tabs>

> Be aware of the terminal output when running Flayyer in this mode. You are probably going to be asked to install some extra devDependencies.
