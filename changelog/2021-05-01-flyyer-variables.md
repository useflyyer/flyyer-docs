---
slug: flyyer-variables
title: Flayyer Variables
author: Patricio Lopez Juri
author_title: Founder @ Flyyer.io
author_url: https://github.com/lopezjurip
author_image_url: https://github.com/lopezjurip.png?size=200
tags: [dashboard, ui, flyyer-render, variables]
---

We are glad to announce we added the long awaited Variables UI support on the Flyyer.io dashboard.

**This allows users to know what variables are required and optional in each template.**

**Now an UI Widget will be displayed based on the type of the variable.** We support a _hint_, a _default value_ and even an _array of examples_! 🤯

[![demo](https://github.com/useflyyer/flyyer-variables/raw/master/.github/assets/dashboard.png)](/changelog/flyyer-variables)

You can start using it by upgrading `@flyyer/cli` to `^1.17.0` and installing `@flyyer/variables`:

```sh
yarn add --dev @flyyer/cli
yarn add @flyyer/variables
```

<!--truncate-->

Here is an example:

```tsx title="templates/article.tsx {2,5-22}"
import React from 'react';
import {Variable as V} from '@flyyer/variables';
import defaultImage from "../static/background.jpeg":

export const schema = V.Object({
  title: V.String({
    default: 'Flayyer blog entry',
  }),
  image: V.Optional(V.Image({
    title: 'Background image URL',
    default: defaultImage,
    examples: ["https://example.com/img.jpeg"]
  })),
  date: V.Optional(V.DateTime({
    description: 'Publication date',
    examples: [new Date().toISOString()]
  })),
  authorName: V.Optional(V.String({
    title: 'Author name',
    examples: ['Patricio Lopez J.', 'Franco Mendez'],
  }))
});
```

Some custom types are: `V.Image` and `V.Font`. We will be adding over the next weeks.

For TypeScript users you can get the inferred type of `schema` as:

```tsx title="templates/article.tsx
import {Static} from '@flyyer/variables';
type Variables = Static<typeof schema>;
```

Finally, you can validate and parse the incomming variables with the `Validator` class from `@flyyer/variables`:

```tsx title="templates/article.tsx"
import {Validator} from '@flyyer/variables';

const validator = new Validator(schema);

export default function MainTemplate(props: TemplateProps) {
  const {width, height, variables, locale = 'en'} = props;
  if (!validator.validate(variables)) {
    // Fallback for invalid variables
    return <img className="w-full h-full object-cover" src={defaultImage} />;
  }

  const {title, image, date, authorName} = variables;
  // ...
}
```

> Checkout [flyyer/flyyer-official](https://github.com/useflyyer/flyyer-official) to see a a real project using these new feature.

Are we missing a feature? Have you found a bug? Let us know via Github: [github.com/useflyyer/flyyer-variables](https://github.com/useflyyer/flyyer-variables).
