---
id: requirements
title: Requirements
---

We asume you have some experience with web-development.
But don't worry! You only need basic HTML and CSS knowledge to create your first dynamic template

## System requirements

* A computer with MacOS, Windows or Linux
* [Node.js 12](https://nodejs.org/) or later

## Supported technologies

### Creation

This is what you can use to develop flyyers:

* **React.js ✅**
* **Vue.js ✅**
* Svelte (coming soon)
* Handlebars (coming soon)
* Pug (coming soon)
* Plain HTML (coming soon)
* **SASS/SCSS/LESS/PostCSS ✅**
* **Tailwind CSS ✅**
* **Typescript ✅**
* **Babel ✅**
* CoffeeScript (coming soon)

> Remember: a flyyer is just a webpage that acts as a template to create dynamic images.

### Integration

The only requirement is being able to add/modify the following meta-tag:

```html
<meta property="og:image" content="use Flyyer URL here">
```

Optional but recommended is being able to modify

```html
<meta name="twitter:image" content="use Flyyer URL here">
<meta name="twitter:card" content="summary_large_image" />

<meta property="flyyer:default" content="original URL from og:image before using Flyyer" />
```

Checkout our [Guides](/guides/) for some common workflows of how to integrate Flyyer with the most popular technologies.
