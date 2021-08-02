---
id: schema
title: Flyyer Schema
---

By default Flyyer uses variables passed down via queryparams. These variables lack of semantic and meaning and are hard to discover if you are not the creator of the template.

We created [@flyyer/variables](https://github.com/useflyyer/flyyer-variables) to make life easier to developers and users. Please visit our package's repository to learn more and get code examples about these smart variables.

## Smart variables

By matching variable names with meta-tag names allows our Flyyer UI to autocomplete values. For example setting a variable with name `title` will hint the user to use `og:title` as it value.

```tsx
/**
 * Export `const schema = V.Object({})` to make variables visible on https://flyyer.io/
 */
export const schema = V.Object({
  // Will suggest og:title
  title: V.String({ description: "Displayed on https://flyyer.io" }),
  // Will suggest price obtained from website by our crawler bot.
  price: V.Optional(V.Number()),
  // Will suggest main image  from website by our crawler bot.
  image: V.Optional(V.Image({ description: "Image URL" })),
  // Will use project's logo defined by user in our dashboard
  logo: V.Optional(V.Image()),
  // Will use project's primary color defined by user in our dashboard
  color: V.Optional(V.ColorHex({ default: "#FFFFFF" })),
  // Will use project's secondary color defined by user in our dashboard
  colorSecondary: V.Optional(V.ColorHex({ default: "#000000" })),
  // Will use project's primary font defined by user in our dashboard
  font: V.Optional(V.Font({ default: "Inter" })),
  // Will use project's secondary font defined by user in our dashboard
  fontSecondary: V.Optional(V.Font({ default: "Bebas Neue" })),
});
```

The most important smart variable names are:

* `title`
* `description`
* `image` (main image)
* `url`
* `price`
* `currency`
* `logo`
* `author` (for autor name)
* `createAt`
* `color` (website's primary color)
* `colorSecondary` (website's secondary color)
* `font` (website's primary font)
* `fontSecondary` (website's secondary font)

Do not use a `locale` variable for internationalization (i18n) since it always comes from the context, see [/docs/advanced/i18n](/docs/advanced/i18n).

![Example of Flyyer Schema being use](https://github.com/useflyyer/flyyer-variables/raw/master/.github/assets/dashboard.png)
