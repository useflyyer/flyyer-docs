---
id: shopify
title: Shopify
---

## Installation

This guide is intended for anyone (you don't need to be a developer).

### 1. Open theme code

Find your theme and open the code editor via: `Online Store` -> `Themes` -> `Actions` -> `Edit code`.

![alt1](/img/guides/shopify1.png)

### 2. Locate and remove old meta-tags

By default they're at `Snippets/social-meta-tags.liquid` but in some cases they may be in 2 different files: `Snippets/fb-open-graph-tags.liquid` and `Snippets/twitter-card.liquid`.

We are going to modify few lines of code. You can always go back to a previous version using the `Older versions` button next to the opened file name.

1. Delete the lines containing `<meta property="og:image`
2. Delete the lines containing `<meta property="twitter:image`
3. Delete the lines containing `<meta property="twitter:card`
4. Save the file(s), use the top-right corner "Save" button

![alt1](/img/guides/shopify2.png)

### 3. Add Flyyer meta-tags

At the start of the file, press `Enter ⏎` to create a new line and paste the code below **replacing `your-project-slug` with your project slug** (it's on the first line).

You can find your `project-slug` in [your dashboard](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

```liquid title="Snippets/social-meta-tags.liquid" {1}
{% assign f_project = 'your-project-slug' %}

{%- capture f_url -%}https://cdn.flyyer.io/v2/{{ f_project }}/_/__v={{ "now" | date: "%N" }}{{ request.path }}{% endcapture %}
<meta property="og:image" content="{{ f_url }}">
<meta property="og:image:secure_url" content="{{ f_url }}">
<meta name="twitter:image" content="{{ f_url }}">
<meta name="twitter:card" content="summary_large_image">

{% if product %}
<meta name="flyyer:default" content="{{ product.featured_image | img_url: 'medium' }}">
{% elsif article and article.image %}
<meta name="flyyer:default" content="{{ article.image | img_url: 'medium' }}">
{% elsif collection and collection.featured_image %}
<meta name="flyyer:default" content="{{ collection.featured_image | img_url: 'medium' }}">
{% elsif collection and collection.products %}
{% for item in collection.products limit:4 %}
<meta name="flyyer:default" content="{{ item.featured_image | img_url: 'medium' }}">
{% endfor %}
{% endif %}
```

**Remember to press the top-right corner "Save" button.**

:::note
In case your meta-tags were in 2 different files, just put this code in one of them.
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)
