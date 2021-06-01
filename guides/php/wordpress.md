---
id: wordpress
title: Wordpress
---

## Installation

Let our Wordpress plugin integrate FlayyerAI for you. It requires **Yoast SEO** plugin and PHP >= 14.0.

### 1. Download the plugin zip

Download the zip here: [flayyer-wordpress-plugin.zip](https://github.com/flayyer/flayyer-wp/releases/latest/download/flayyer-wordpress-plugin.zip). Feel free to review the source code here: [github.com/flayyer/flayyer-wp](https://github.com/flayyer/flayyer-wp).

### 2. Add `Yoast SEO` plugin

Download **Yoast SEO** from the plugins list (Plugins > Add New > Search for `Yoast SEO`) or [from here](https://wordpress.org/plugins/wordpress-seo/).

### 3. Upload the plugin

From your admin dashboard go to the **Plugins** menu. Click on **Upload Plugin** and upload the zipped file `flayyer-wordpress-plugin.zip`. If you downloaded `Yoast SEO` zip, then upload it the same way.

![demo image of flayyer install](https://raw.githubusercontent.com/flayyer/flayyer-wp/master/.github/assets/install.png)

### 4. Set your `project-slug`

You can Find your `project-slug` in [your dashboard](https://flayyer.com/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flayyer.com/get-started?ref=docs).

Write write it down in the Flayyer settings. By default it's your domain name but it may be different. Looks like this:

![demo image of flayyer for wordpress](https://raw.githubusercontent.com/flayyer/flayyer-wp/master/.github/assets/view.png)

:::note
If you inspect the `<head />` of your HTML you should see the `og:image` and `twitter:image` tags with `flayyer.ai` URLs with your `project-slug` and current `pathname` on it. If you're having trouble, **please make sure both plugins are active** in the Plugins menu.
:::

### 5. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flayyer.com/dashboard/_/projects/_/)
