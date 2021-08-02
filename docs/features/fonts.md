---
id: fonts
title: Fonts
---

## use-googlefonts

The easiest way to include fonts and also allow users to change them is via our custom React Hook:

```sh
yarn add @flyyer/use-googlefonts
```

Note: this hook is only available for Flyyer decks created with the React preset.

```tsx
import React from "react";
import { TemplateProps } from "@flyyer/types";
import { Variable as V, Validator, Static } from "@flyyer/variables";
import { useGoogleFonts, GoogleFontsStatus } from "@flyyer/use-googlefonts";

export const schema = V.Object({
  font: V.Font({
    default: 'Bebas Neue',
    examples: ['Bebas Neue', 'Bitter', 'Dela Gothic One', 'Heebo'],
    description: "Main text's font"
  }),
});
type Variables = Static<typeof schema>;

const validator = new Validator(schema);

export default function MyTemplate(props: TemplateProps<Variables>) {
  const {
    data: { font },
  } = validator.parse(props.variables);

  const googleFont = useGoogleFonts([{
    family: font,
    styles: [200, 400, 600, 800],
  }]);

  return (
    <div className={googleFont.status === GoogleFontsStatus.LOADING && "flyyer-wait"}>
      Using font: {font}
    <div/>
  );
}
```

> See https://github.com/useflyyer/flyyer-marketplace-nicetypography for a deck in production using this hook.

## From CDN

The next easiest way to include fonts is via SCSS:

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

We are working on making fonts easier to import. But at the moment this is how you can import custom fonts.

Grab your custom font as `.woff` and `.woff2` format and place them inside a directory. Let's call that directory `/fonts` on the root of your repository.

```bash title="Terminal.app"
mkdir fonts
```

```tree {4,5}
DECK-NAME/
│   ...
├── fonts/
│   ├── ibm-plex-sans-v7-latin-600.woff2
│   └── ibm-plex-sans-v7-latin-regular.woff2
│   ...
```

Create a [style](features/styles.md) file and add the corresponding `@font-face`.

```bash title="Terminal.app"
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

```jsx title="templates/main.js" {5}
import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "IBM Plex Sans",sans-serif;
  font-weight: 600;
`;
```
