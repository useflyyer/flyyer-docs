---
id: libraries
title: Libraries
---

Dealing with URL serialization is tough, specially if you have complex variables.

We have some libraries to make this process of creating a Flayyer URL easier for developers.

```js
import { FlyyerRender } from "@flyyer/flyyer";

const flyyer = new FlyyerRender({
  tenant: "tenant",
  deck: "deck",
  template: "template",
  variables: { title: "Hello world!" },
  meta { id: "item-name" /* for analytics reports */ },
});

const url = flyyer.href();
// > https://cdn.flyyer.io/render/v2/tenant/deck/template.jpeg?__v=1596906866&title=Hello+world%21

// Use this `url` in the <head /> of your HTML
<meta property="og:image" content={url} />
<meta name="twitter:image" content={url} />
```

## Official

* JavaScript / TypeScript — [`@flyyer/flyyer`](https://www.npmjs.com/package/@flyyer/flyyer) — [github.com/useflyyer/flyyer-js](https://github.com/useflyyer/flyyer-js)
* Python — [`flyyer`](https://pypi.org/project/flyyer/) — [github.com/useflyyer/flyyer-python](https://github.com/useflyyer/flyyer-python)
* Ruby — [`flyyer`](https://rubygems.org/gems/flyyer/) — [github.com/useflyyer/flyyer-ruby](https://github.com/useflyyer/flyyer-ruby)
* PHP — [`flyyer/flyyer`](https://packagist.org/packages/flyyer/flyyer) — [github.com/useflyyer/flyyer-php](https://github.com/useflyyer/flyyer-php)
  * Wordpress — [github.com/useflyyer/flyyer-wp](https://github.com/useflyyer/flyyer-wp)

:::note
These libraries are for composing and formatting parameters into Flayyer URLs, **not for creating Flayyer projects**. To create a project go to [Getting started](./getting-started.md).
:::
