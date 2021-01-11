---
id: getting-started
title: Getting started
slug: /
---

[flayyer-studio]: https://flayyer.github.io/flayyer-studio/
[create-flayyer-app]: https://github.com/flayyer/create-flayyer-app

## Create project

We recommend creating a new Flayyer app using [`create-flayyer-app`][create-flayyer-app], which sets up everything automatically for you. To start a project follow the steps below.

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Using Yarn will create a folder called `my-project` in your current directory:

```bash title="Terminal.app"
yarn create flayyer-app my-project
```

</TabItem>

<TabItem value="npm">

Using NPM will create a folder called `my-project` in your current directory:

```bash title="Terminal.app"
npm init flayyer-app my-project
```

</TabItem>
</Tabs>

You will be prompted with multiple starting setups. You can choose the one that suites best for you.

```txt {2}
? Select the best template setup for you …  You can customize the template later
react
react-styled-components
react-typescript-styled-components
react-typescript-tailwind
vue
vue-typescript
```

## Your first template

:::note CLI
For more details about the available commands refer to [Command-Line Interface](./cli/flayyer-cli.md).
:::

Create (if you don't have) a file with the desired name of your template in a directory called `templates`. Every project created with `create-flayyer-app` starts with a file named `templates/main.js`, `template/main.tsx`, or `template/main.vue`.

Let's take https://github.com/flayyer/create-flayyer-app/tree/master/templates/react as example

```tree
PROJECT-NAME/
│   ...
├── templates/
│   └── main.js
```

```jsx title="templates/main.js"
import React from "react";
import background from "../static/background.jpg";
import logo from "../static/logo.svg";
import "./styles.css"

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }) {
  const { title = "Hello world!", img = background, description, } = variables;

  return (
    <div>
      <div className="layer background" style={{ backgroundImage: `url("${img}")` }} />
      <div className="layer fade" />
      <div className="layer content">
        <img className="logo" src={logo} />
        <h1 className="title">
          {title}
        </h1>
        {description && (
          <span className="description">
            {description}
          </span>
        )}
      </div>
    </div>
  );
}
```

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

Start the development server with:

```bash title="Terminal.app"
yarn start
```

</TabItem>

<TabItem value="npm">

Start the development server with:

```bash title="Terminal.app"
npm start
```

</TabItem>
</Tabs>

:::caution
Please use Google Chrome, Firefox or Opera. Safari is not widely supported.
:::

This command starts a development server using Parcel.js. Then open [Flayyer Studio][flayyer-studio] in your browser for a better developer experience.

[![Flayyer Studio screenshot](/img/images/studio-hello-world.png)][flayyer-studio]

## Deploy

Work on your template, try changing the variables and when you are ready, run:

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
yarn build
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
npm run-script build
```

</TabItem>
</Tabs>

To upload the final bundled templates to our cloud you must have an API Key.

[**Click here to manage your keys 🔑**](https://flayyer.com/settings/keys)

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

When you are ready to deploy, run:

```bash title="Terminal.app"
yarn run deploy
```

</TabItem>

<TabItem value="npm">

When you are ready to deploy, run:

```bash title="Terminal.app"
npm run-script deploy
```

</TabItem>
</Tabs>

If everything is correct, you should see an output with your templates' URLs.

```bash
🖼 Created template with URL: https://flayyer.io/v2/company/deck/template.jpeg
```

**Congratulations! You deployed your first Flayyer project! 🎉**

![cat on a rocket](/img/launch.svg)

Continue reading this documentation to understand more about Flayyer and what other amazing features we support.

