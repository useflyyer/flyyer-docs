---
id: styles
title: Styles
---

We recommend creating a folder for your styles, but this is optional. You can have style files anywhere.

```bash title="Terminal.app"
mkdir styles
```

## CSS

To use a style file you must import it inside your JS files where it is needed.

```js title="templates/main.js"
import "../styles/style.css";
```

## SCSS/SASS

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const jsManagers = [
  {label: "Yarn", value: "yarn"},
  {label: "NPM", value: "npm"},
]

<Tabs groupId="js-manager" defaultValue="yarn" values={jsManagers}>
<TabItem value="yarn">

If you need SCSS/SASS you must install an extra dependency:

```bash title="Terminal.app"
yarn add --dev sass
```

</TabItem>

<TabItem value="npm">

If you need SCSS/SASS you must install an extra dependency:

```bash
npm i --save-dev sass
```

</TabItem>
</Tabs>

Now you can import the those files as usual

```js title="templates/main.js"
import "../styles/style.scss";
import "../styles/style.sass";
```

## LESS

No need for extra dependencies. Just import those files.

```js title="templates/main.js"
import "../styles/style.less";
```

## Stylus

No need for extra dependencies. Just import those files.

```js title="templates/main.js"
import "../styles/style.styl";
```

## Tailwind CSS

For Tailwind support refer to our starter template: [react-typescript-tailwind](https://github.com/useflyyer/create-flyyer-app/tree/master/templates/react-typescript-tailwind).
