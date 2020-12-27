---
id: concepts
title: Concepts
---

Let's speak the same language:

## Glossary

Here is the list of the technical terms.

### Flayyer

The name of the company but also **we call "Flayyer" every created [dynamic template](#template)**. As a company we are composed by two main domains:

* [Flayyer.com](https://flayyer.com) — Main service with dashboard, billing, account management and more user-friendly.
* [Flayyer.io](https://flayyer.io) — "Og:Image as a Service" rendering server.

### Slug

The machine-friendly version of a text. Example: `Hello there!` as slug would be `hello-there`.

### Template

This is the most important thing about Flayyer. **This is in reality a webpage (HTML, CSS and JavaScript) acting as a template to create dynamic images** . What is great about this templates is that you can use them to generate infinite amount of images based on variables. 

For developers and engineers: a template is a **web component** (React, Vue, etc). To develop templates you can start a project following this [section](./getting-started.md). **Every template has a name corresponding to the name of its file** (similar to Next.js and _pages_).

Take a look at this example, here we have a template with multiple [variables](#variables) and some of all the possible outcomes:

![image](/img/images/demo.png)

#### Variables

These templates receives **variables** as input and renders images based on those inputs. This is way more smarter than other image services whom only allows to compose images, add watermarks, etc. You can do all of that and even more with custom login and your own styles. 

Variables are passed through the unique URL of a flayyer as **queryparams**. Eg: This is an actual URL of a Flayyer with a param `title`:

```bash
https://flayyer.io/v2/flayyer/landing/demo.png?title=Title
```

Inside the component it looks like this:

```jsx title="templates/main.js" {4}
import React from "react";

export default function DemoTemplate({ variables }) {
  const title = variables.title; // 👈 variable from queryparams
  return <h1>{title}</h1>;
}
```

:::tip
To read more about variables and how to support objects and array go to [Complex variables](./advanced/complex-variables.md).
:::

### Deck or Project

A deck —also known as "project"— is a collection of [Templates](#template). The idea of a deck is being able to share common styles, components and code between many templates. Each deck is identified by a _slug_.

### Tenant or Company

Every user belongs to an organization. We call this entities "tenants" or "companies" for simplicity. Each tenant is identified by an unique _slug_, eg: `my-company`. Each tenant has many [Decks](#deck-or-project).

## URL anatomy

Every Flayyer.io URL is built around this schema. For variables refer to [Variables](#variables) and [Complex variables](./advanced/complex-variables.md).

* `:tenant` — is the Tenant's slug
* `:deck` — is the Deck's slug
* `:template` — is the Template's slug
* `:extension` — the extension of the rendered image
  * Possible values: `png`, `webp`, `jpeg` (`jpg` is an alias)
  * Defaults to `jpeg`.
* `:version` — The version control number of your deck.
  * Defaults to `_` which means _latest version_.
  * Omit to always use the latest version (recommended).

:::note
Please note that `:tenant`, `:deck` and `:template` are always **required**, everything else is optional.
:::

### Short format

Shortest form: always latest version and defaults to `.jpeg` format.

```bash
https://flayyer.io/v2/:tenant/:deck/:template?variable=value

# Example:
https://flayyer.io/v2/flayyer/landing/demo?title=Title
```

### Long format

Longest form: explicit version and extension.

```bash
https://flayyer.io/v2/:tenant/:deck/:template.:version.:extension?variable=value

# Example:
https://flayyer.io/v2/flayyer/landing/demo.1608497482.png?title=Title&description=Description+text
```

:::tip
To easily compose and format Flayyer URLs please use one of our [libraries](libraries.md).
:::
