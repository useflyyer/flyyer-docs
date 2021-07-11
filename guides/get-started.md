---
id: get-started
title: Getting started
---

[new-project]: https://flyyer.io/dashboard/_/projects/new
[current-project]: https://flyyer.io/dashboard/_/projects
[guides-with-full-examples]: #guides-with-full-examples

## Install Flyyer previews

### 1. Create a project [here][new-project]

### 2. Insert smart image URLs in your meta-tags

It's built with your `project-slug` and the current `pathname` of your site which lets our AI system enrich your preview automatically.

Find your `project-slug` in [your dashboard](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

In HTML it would look like this:

```html
<meta property="og:image" content="https://cdn.flyyer.io/v2/{project-slug}/_/_/{path}" />
<meta name="twitter:image" content="https://cdn.flyyer.io/v2/{project-slug}/_/_/{path}" />
<meta name="twitter:card" content="summary_large_image" />

<!-- [Recommended] Keep your original image handy for your project -->
<meta property="flyyer:default" content="{your-original-og:image-link}" />
```

To see a **full example** please [select your website technology or programming language][guides-with-full-examples].

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Guides with full examples

### JavaScript guides

* [Pure JavaScript](/guides/javascript/flyyer-js)
* [Next.js](/guides/javascript/nextjs)
* [Gatsby.js](/guides/javascript/gatsbyjs)
* [Express.js](/guides/javascript/expressjs)
* [Docusaurus.io](/guides/javascript/docusaurus)

### Python guides

* [Pure Python](/guides/python/flyyer)
* [Django](/guides/python/django)

### Ruby guides

* [Pure Ruby](/guides/ruby/flyyer)
* [Ruby on Rails](/guides/ruby/rails)

### PHP guides

* [Pure PHP](/guides/php/flyyer)
* [Wordpress](/guides/php/wordpress)
