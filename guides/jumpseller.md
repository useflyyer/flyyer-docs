---
id: jumpseller
title: JumpSeller
---

## Installation

This guide is intended for anyone (you don't need to be a developer).

### 1. Open theme code

Find your theme and open the code editor via: `Admin` -> `Themes` -> `Code Editor`.

![alt1](/img/guides/jumpseller1.png)

### 2. Locate and remove old meta-tags

By default they're at `Assets/Partials/og_meta-tags.liquid`, but it can change depending on your current template structure.

We are going to modify few lines of code. We recommend storing a backup of this page in your computer.

1. Replace `og:image` with `flyyer:default`
2. Delete the lines containing `<meta property="twitter:image`
3. Delete the lines containing `<meta property="twitter:card`
4. Save the file(s), use the top-right corner "Save" button

![alt1](/img/guides/jumpseller2.png)

### 3. Add Flyyer meta-tags

At the start of the file, press `Enter ⏎` to create a new line and paste the code below **replacing `your-project-identifier` with your project identifier** (it's on the first line).

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

```liquid title="Snippets/social-meta-tags.liquid" {1}
{% assign f_project = 'your-project-identifier' %}

{%- capture f_url -%}https://cdn.flyyer.io/v2/{{ f_project }}/_/__v={{ "now" | date: "%N" }}{{ store.current_url }}{% endcapture %}
<meta property="og:image" content="{{f_url}}" />
<meta name="twitter:card" content="summary_large_image" />
```

**Remember to press the top-right corner "Save" button.**

:::note
In case your meta-tags were in 2 different files, just put this code in one of them.
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)
