# Advanced

Some advanced tip and features to take full advantage of Flyyer.io

## Default image

It's recommended to keep your original image but it takes an additional request to get the default image to Flyyer from your website. Here is an example for an e-commerce store.

```html
<!-- Landing page -->
<meta property="og:image" content="https://cdn.flyyer.io/v2/example/_/_/" />
<meta property="flyyer:default" content="/banner.png" />

<!-- Product page 1: Hoodie -->
<meta property="og:image" content="https://cdn.flyyer.io/v2/example/_/_/products/hoodie" />
<meta property="flyyer:default" content="/products/hoodie.png" />

<!-- Product page 2: Sneakers -->
<meta property="og:image" content="https://cdn.flyyer.io/v2/example/_/_/products/sneakers" />
<meta property="flyyer:default" content="/products/sneakers.png" />
```

### Faster default images

:::tip
This is highly recommended to reduce latency 👍

Note: if a page of your website doesn't have a default image it is ok to not use this feature.
:::

To deliver faster images it's recommended to set the default image's URL inside the Flyyer CDN URL, here is an example:

```html
<!-- Landing page -->
<meta property="og:image" content="https://cdn.flyyer.io/v2/example/_/_def=%2Fbanner.png/" />

<!-- Product page 1: Hoodie -->
<meta property="og:image" content="https://cdn.flyyer.io/v2/example/_/_def=%2Fproducts%2Fhoodie.png/products/hoodie" />

<!-- Product page 2: Sneakers -->
<meta property="og:image" content="https://cdn.flyyer.io/v2/example/_/_def=%2Fproducts%2Fsneakers.png/products/sneakers" />
```

> Note: `%2F` is `/` but [URL-encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

Our libraries support this feature, here is an example for JavaScript ([flyyer-js](/guides/javascript/flyyer-js)):

```tsx {6}
import { Flyyer } from "@flyyer/flyyer";

const product = { /* */ }

const flyyer = new Flyyer({
  project: "your-project-identifier",
  path: product["path"],
  default: product["image_path"],
});

// Use this image in your <head/> tags
const url = flyyer.href()
// > https://cdn.flyyer.io/v2/your-project-identifier/_/_def=%2Fproduct%2Fhoodie%2Fpicture.png&__v=1618283086/products/hoodie
```
