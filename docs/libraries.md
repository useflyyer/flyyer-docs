---
id: libraries
title: Libraries
---

Dealing with URL serialization is tough, specially if you have complex variables.

We have some libraries to make this process of creating a Flayyer URL easier for developers.

```js
import { Flayyer } from "@flayyer/flayyer";

const flayyer = new Flayyer({
  tenant: "tenant",
  deck: "deck",
  template: "template",
  variables: { title: "Hello world!" },
  meta { id: "item-name" /* for analytics reports */ },
});

const url = flayyer.href();
// > https://flayyer.io/v2/tenant/deck/template.jpeg?__v=1596906866&title=Hello+world%21

// Use this `url` in the <head /> of your HTML
<meta property="og:image" content={url} />
<meta name="twitter:image" content={url} />
```

## Official

* JavaScript / TypeScript — [`@flayyer/flayyer`](https://www.npmjs.com/package/@flayyer/flayyer) — [github.com/flayyer/flayyer-js](https://github.com/flayyer/flayyer-js)
* Python — [`flayyer`](https://pypi.org/project/flayyer/) — [github.com/flayyer/flayyer-python](https://github.com/flayyer/flayyer-python)
* Ruby — [`flayyer`](https://rubygems.org/gems/flayyer/) — [github.com/flayyer/flayyer-ruby](https://github.com/flayyer/flayyer-ruby)
* PHP — [`flayyer/flayyer`](https://packagist.org/packages/flayyer/flayyer) — [github.com/flayyer/flayyer-php](https://github.com/flayyer/flayyer-php)
  * Wordpress — [github.com/flayyer/flayyer-wp](https://github.com/flayyer/flayyer-wp)

:::note
These libraries are for composing and formatting parameters into Flayyer URLs, **not for creating Flayyer projects**. To create a project go to [Getting started](./getting-started.md).
:::
