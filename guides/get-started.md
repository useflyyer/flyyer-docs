---
id: get-started
title: Getting started
---

[new-project]: https://flayyer.com/dashboard/_/projects/new
[current-project]: https://flayyer.com/dashboard/_/projects
[guides-with-full-examples]: #guides-with-full-examples

## Install FlayyerAI previews

### 1. Create a project [here][new-project]

### 2. Insert the smart image link on your `og:image` meta-tag

It's built with your `project-slug` and the current `pathname` of your site which lets our AI system obtain information to enrich your preview automatically.

In HTML it would look like this:

```html
<meta property="og:image" content="https://flayyer.ai/{project-slug}/_/_/{path}" />
<meta name="twitter:image" content="https://flayyer.ai/{project-slug}/_/_/{path}" />
<meta name="twitter:card" content="summary_large_image" />

<!-- [Recommended] Keep your original image handy for your project -->
<meta property="flayyer:default" content="{your-original-og:image-link}" />
```

To see a **full example** please [select your website technology or programming language][guides-with-full-examples].

### 3. Check and improve template path match

[In your dashboard][current-project] check and manually improve the image template used for each path pattern of your site.

<!-- TODO: Rules getting started here -->

## Guides with full examples

### JavaScript guides

* [Pure JavaScript](/guides/javascript/flayyer-js)
* [Next.js](/guides/javascript/nextjs)
* [Gatsby.js](/guides/javascript/gatsbyjs)
* [Express.js](/guides/javascript/expressjs)
* [Docusaurus.io](/guides/javascript/docusaurus)

### Python guides

* [Pure Python](/guides/python/flayyer)
* [Django](/guides/python/django)

### Ruby guides

* [Pure Ruby](/guides/ruby/flayyer)
* [Ruby on Rails](/guides/ruby/rails)

### PHP guides

* [Pure PHP](/guides/php/flayyer)
* [Wordpress](/guides/php/wordpress)
