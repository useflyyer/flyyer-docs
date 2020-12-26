---
id: fonts
title: Fonts
---

## From CDN

The easiest way to include fonts is via SCSS:

```scss title="styles/style.scss"
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900");

.text {
  font-family: 'Montserrat', sans-serif;
}
```

## From files

:::note
If you need a tool to generate the `@font-face` definitions we recommend: https://google-webfonts-helper.herokuapp.com/
:::

We are working on making font easier to import. But at the moment this is how you can import custom fonts.

Grab your custom font as `.woff` and `.woff2` format and place them inside a directory. Let's call that directory `/fonts` on the root of your repository.

```sh
mkdir fonts
```

```tree {4,5}
PROJECT-NAME/
│   ...
├── fonts/
│   ├── ibm-plex-sans-v7-latin-600.woff2
│   └── ibm-plex-sans-v7-latin-regular.woff2
│   ...
```

Create a [style](features/styles.md) file and add the corresponding `@font-face`.

```sh
mkdir styles
touch styles/fonts.css
```

```css title="styles/fonts.css"
/* ibm-plex-sans-regular - latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src: local('IBM Plex Sans'), local('IBMPlexSans'),
        url('../fonts/ibm-plex-sans-v7-latin-regular.woff2') format('woff2');
}
/* ibm-plex-sans-600 - latin */
@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src: local('IBM Plex Sans SemiBold'), local('IBMPlexSans-SemiBold'),
        url('../fonts/ibm-plex-sans-v7-latin-600.woff2') format('woff2');
}
```

**Done! Now you can use your custom fonts.**

```js title="templates/main.js" {5}
import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "IBM Plex Sans",sans-serif;
  font-weight: 600;
`;
```
