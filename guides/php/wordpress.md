---
id: wordpress
title: Wordpress
---

## Installation

Let our Wordpress plugin integrate Flyyer for you. It requires **Yoast SEO** plugin and PHP >= 14.0.

### 1. Install the official plugin `flyyer previews`

In your Wordpress dashboard, go to Plugins > Add new, search for `flyyer previews`, then install and activate the plugin.

You can also install it from the [official plugin page in Wordpress](https://wordpress.org/plugins/flyyer-previews/).

![demo image of flyyer install](https://raw.githubusercontent.com/useflyyer/flyyer-wp/master/.github/assets/install-wp-plugin.png)

### 2. Add `Yoast SEO` plugin

In the same way install **Yoast SEO**, Plugins > Add New > Search for `Yoast SEO`, or [from the official page](https://wordpress.org/plugins/wordpress-seo/). Make sure to **Activate** this plugin too.

![demo image of flyyer install](https://raw.githubusercontent.com/useflyyer/flyyer-wp/master/.github/assets/install-yoast.png)

### 3. Set your **project identifier**

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

Write it down in the Flyyer settings, then hit **Save Settings**. It looks like this:

![demo image of flyyer for wordpress](https://raw.githubusercontent.com/useflyyer/flyyer-wp/master/.github/assets/view.png)

:::note
If you inspect the `<head />` of your HTML you should see the `og:image` and `twitter:image` tags with `cdn.flyyer.io` URLs with your **project identifier** and current `pathname` on it. If you're having trouble, **please make sure both plugins are active** in the Plugins menu.
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)
