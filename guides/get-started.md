---
id: get-started
title: Getting started
---

## Install Flayyer previews

Setup everything by default in 2 steps and customize later.

1. Create a project [here](https://flayyer.com/dashboard/_/projects/new).

2. Insert the smart image link on your `og:image` meta tag. It's built with your `project-slug` and the current `path` of your site. Why the current path? Our AI system needs to know from which path of your website obtain the information to enrich your preview.

  In HTML it would look like this:

  ```html
  <meta property="og:image" content="https://flayyer.ai/{project-slug}/_/_/{path}" />
  <meta name="twitter:image" content="https://flayyer.ai/{project-slug}/_/_/{path}" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Optional but recommended to keep your original image handy for your project -->
  <meta property="flayyer:default" content="{your-original-og:image-link}" />
  ```

To see a **full example** please select your website technology or programming language.

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