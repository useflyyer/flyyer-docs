---
id: getting-started
title: Getting started
slug: /
---

[flyyer-studio]: https://useflyyer.github.io/studio
[result-1]: https://cdn.flyyer.io/render/v2/flyyer/probando-update/main.jpeg?title=try+changing+this
[result-2]: https://cdn.flyyer.io/render/v2/flyyer/probando-update/main.jpeg?title=awesome!+😃&description=Optional+description
[create-flyyer-app]: https://github.com/useflyyer/create-flyyer-app
[flyyer-guides]: /guides/get-started

:::note What's this documentation for
You'll **learn to create your own templates**, which you can use for your link previews, download social media formats, or offer them in the Marketplace. <!-- TODO: link to Marketplace  -->

Alternatively, you can integrate Flyyer to manage link previews and social media images enriched from your website (no effort required). You can choose templates that are already available. [Check it out][flyyer-guides] before coming here.
:::

## Create project

Create a new Flyyer app using [`create-flyyer-app`][create-flyyer-app], which sets up everything automatically for you. To start a project follow the steps below.

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
yarn create flyyer-app my-project
```

</TabItem>

<TabItem value="npm">

Using NPM will create a folder called `my-project` in your current directory:

```bash title="Terminal.app"
npm init flyyer-app@latest my-project
```

</TabItem>
</Tabs>

You will be prompted for startup configurations. Choose the one that best suits your needs.

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
For more details about the available commands refer to [Command-Line Interface](./cli/flyyer-cli.md).
:::

Create (if you don't have) a file with the desired name of your template in a directory called `templates`. Every project created with `create-flyyer-app` starts with a file named `templates/main.js`, `template/main.tsx`, or `template/main.vue`.

Let's take https://github.com/useflyyer/create-flyyer-app/tree/master/templates/react as example

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

This command starts a development server using Parcel.js. Then open [Flyyer Studio][flyyer-studio] in your browser for a better developer experience.

[![Flyyer Studio screenshot](/img/images/studio-hello-world.png)][flyyer-studio]

## Deploy

Work on your template, try changing the variables and when you are ready, run:

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

```bash title="Terminal.app"
NODE_ENV=production yarn build
```

</TabItem>

<TabItem value="npm">

```bash title="Terminal.app"
NODE_ENV=production npm run-script build
```

</TabItem>
</Tabs>

To upload the final bundled templates to our cloud you must have an API Key.

[**Click here to manage your keys 🔑**](https://flyyer.io/dashboard/_/settings)

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
🖼 Created template with URL: https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.jpeg
```

**Congratulations! You deployed your first Flyyer project! 🎉**

[![Resultant flyyer live image](https://github.com/useflyyer/create-flyyer-app/blob/master/.github/assets/result-1.png?raw=true)][result-1]

[![Resultant flyyer live image](https://github.com/useflyyer/create-flyyer-app/blob/master/.github/assets/result-2.png?raw=true)][result-2]

Here are some examples of how to pass parameters to create images:

* Set extension
  * `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.png`
  * `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.jpeg`
  * `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.webp`
* Set dimensions:
  * Instagram post: `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.jpeg?_w=1080&_h=1080`
  * Whatsapp image: `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.jpeg?_w=400&_h=400`
  * Story: `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.jpeg?_w=1080&_h=1920`
* Replace variables:
  * `https://cdn.flyyer.io/render/v2/TENANT/DECK/TEMPLATE.jpeg?title=New+title`

To format URL we recommend using one of [official libraries](/docs/libraries).

![cat on a rocket](/img/launch.svg)

Continue reading this documentation to understand more about Flyyer and what other amazing features we support.
