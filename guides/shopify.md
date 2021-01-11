---
id: shopify
title: Shopify
---

We are working on a plugin to make this task code-free, in the meantime you can follow this guide which is basically about changing a couple of lines in your theme files.

## Shopify plugin

Work in progress 👷‍♀️👷‍♂️

## Theme

The current way of using Flayyer with your shopify store is via modifying the theme files with _liquid_ extension.

### Open theme code

First, find your theme and open the code editor via: `Online Store` -> `Themes` -> `Actions` -> `Edit code`.

![alt1](/img/guides/shopify1.png)

### Modify meta-tags lines

Then find the file where the rendering logic of the social tags is located. By default, it should be at `Snippets` -> `social-meta-tags.liquid`.

![alt1](/img/guides/shopify2.png)

The last step consist on updating the contents of `og:image` and `twitter:items` to use the Flayyer URL provided by us.

```liquid title="social-meta-tags.liquid"
{% assign f_tenant = 'my-company' %}
{% assign f_deck = 'my-project' %}
{% assign f_v = 'now' | date: '%N' %}
{% assign f_id = canonical_url | url_encode %}
{% assign f_title = page_title | strip_html | url_encode  %}
{% assign f_description = page_description | strip_html | url_encode %}
{% assign f_img = '' %}
{% assign f_logo = settings.logo | img_url | url_encode  %}

{% if template == 'index' %}
  {% assign f_template = 'main' %}
{% elsif template contains 'product' %}
  {% assign f_template = 'product' %}
  {% assign f_img = product.featured_image.src | img_url: 'x630' | url_encode %}
{% elsif template contains 'article' %}
  {% assign f_template = 'article' %}
  {% assign f_img = article.image.src | img_url: 'x630' | url_encode %}
{% elsif template contains 'collection' %}
  {% assign f_template = 'collection' %}
  {% assign f_img = collection.image.src | img_url: 'x630' | url_encode %}
{% else %}
  {% assign f_template = 'page' %}
{% endif %}

{% comment %}
  ---
  Create Flayyer URL and assign social tags to target that URL.
  ---
{% endcomment %}

{% capture f_url %}
  https://flayyer.io/v2/{{ f_tenant }}/{{ f_deck }}/{{ f_template }}.jpeg?__v={{ f_v }}&__id={{ f_id }}&title={{ f_title }}&description={{ f_description }}&logo={{ f_logo }}&img={{ f_img }}
{% endcapture %}

<meta property="og:image" content="{{ f_url }}">
<meta property="og:image:secure_url" content="{{ f_url }}">
<meta name="twitter:image" content="{{ f_url }}">
<meta name="twitter:card" content="summary_large_image">
```

Customize the variables you need depending on the variables your Flayyer URL expect.

**Done! Now you can use Flayyer with your Shopify store and boost your sales 🚀**
