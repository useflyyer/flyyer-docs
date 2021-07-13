---
id: flyyer-cli
title: "@flyyer/cli"
---

> * Repository: https://github.com/useflyyer/flyyer-cli
> * NPM Package: https://www.npmjs.com/package/@flyyer/cli

This is a Command-Line Interface (CLI) to develop dynamic og:images. Behind the scenes this package starts a development server with Parcel.js and enables developers to create Flyyer Templates using their favorite apps and technologies.

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

It is recommended to install it as a development dependency (`devDependencies`):

```bash title="Terminal.app"
yarn add --dev @flyyer/cli
```

</TabItem>

<TabItem value="npm">

It is recommended to install it as a development dependency (`devDependencies`):

```bash title="Terminal.app"
npm install --save-dev @flyyer/cli
```

</TabItem>
</Tabs>

:::note
This module is included when creating a project with [`create-flyyer-app`](../getting-started.md)
:::

## flyyer.config.js

This file is loaded when submitting the bundled file to Flyyer servers through [`flyyer deploy`](#flyyer-deploy).

Basic file structure is:

```js title="flyyer.config.js"
module.exports = {
  engine: "react",
  key: process.env.FLYYER_KEY,
  deck: "my-project",
};
```

Here is the expected format of the file using a Typescript Type notation:

```ts
// Typescript type for reference
type FlyyerConfigType = {
  /**
   * Engine/framework used to develop the templates
   */
  engine: "react" | "react-typescript" | "vue" | "vue-typescript";

  /**
   * Flyyer API key.
   * @default process.env.FLYYER_KEY
   */
  key: string;

  /**
   * Project name in slug format.
   * Beware this can override other project under your account if you use the same value here.
   * Eg: project-name ✅
   * Eg: Project Name ❌
   */
  deck: string;
}
```

### FLYYER_KEY

:::note
Get your API key at: [https://flyyer.io/dashboard/_/settings](https://flyyer.io/dashboard/_/settings)
:::

This is the API key required to authenticate before uploading your project to our cloud.

## Scripts

Every script here assumes you have the following `package.json`:

```json title="package.json"
{
  "scripts": {
    "start": "flyyer start",
    "build": "flyyer build",
    "deploy": "flyyer deploy",
  },
}
```

### flyyer start

[flyyer-studio]: https://useflyyer.github.io/studio

:::caution
Please use Google Chrome, Firefox or Opera. Safari is not widely supported.
:::

This command starts a development server using Parcel.js. Then open [Flyyer Studio][flyyer-studio] in your browser for a better developer experience.

[![Flyyer Studio screenshot](https://github.com/useflyyer/flyyer-studio/raw/main/.github/screenshot.png)][flyyer-studio]

To run the server at the default host and port [http://localhost:7777](http://localhost:7777) just execute:

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
yarn run start
```

You can change the port using the `-p` flag and the host with `-H`:

```bash title="Terminal.app"
yarn run start -H 0.0.0.0 -p 8000
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npm run-script start
```

You can change the port using the `-p` flag and the host with `-H`:

```bash title="Terminal.app"
npm run-script start -- -H 0.0.0.0 -p 8000
```

</TabItem>
</Tabs>

You should get a message like this on your terminal:

```bash {10,13}
🌠  FLYYER dev server running at http://localhost:7777

💡  Pass variables as query-params in the URL.
    Example: http://localhost:7777/hello.html?title=Hello+world

💡  This dev server sometimes fails or sometimes the UI does not update accordingly.
    Please restart the server if something goes wrong.

📄  Found template 'main' at: http://localhost:7777/main.html
    Go to: https://useflyyer.github.io/studio?template=main

💻  Remember to preview and develop your templates at:
    https://useflyyer.github.io/studio
```

Visit [Flyyer Studio][flyyer-studio] to preview your template while developing.

#### Caveats

* The development server is under heavy development and might have some issues while running.
* If the server crashes: you need to restart it.
* If hot-reloading is not working: Move your components to the same file as your template

### flyyer build

Before deploying to production via [flyyer deploy](#flyyer-deploy), you must run this build command:

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
NODE_ENV=production yarn run build
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
NODE_ENV=production npm run-script build
```

</TabItem>
</Tabs>

### flyyer deploy

:::info
You must run [**flyyer build**](#flyyer-build) before running this command.
:::

To upload the final bundled templates to our cloud you must have an API Key.

[**Click here to manage your keys 🔑**](https://flyyer.io/dashboard/_/settings)

Set your API key as `FLYYER_KEY` and an environment variables or directly in your flyyer.config.js if you are working on a private repository.

```bash title="Terminal.app"
export FLYYER_KEY=...
```

Dotenv files are supported via `dotenv`:

```bash title=".env"
FLYYER_KEY=...
```

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

When you are ready to deploy run:

```bash title="Terminal.app"
yarn run deploy
```

</TabItem>

<TabItem value="npm">

When you are ready to deploy run:

```bash title="Terminal.app"
npm run-script deploy
```

</TabItem>
</Tabs>

If everything is correct, you should see an output with your templates' URLs.

```bash
🖼 Created template with URL: https://cdn.flyyer.io/render/v2/company/deck/template.jpeg
```
