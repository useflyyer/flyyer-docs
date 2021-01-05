---
id: wordpress
title: Wordpress
---

> Repository: https://github.com/flayyer/flayyer-wp

![demo image of flayyer for wordpress](https://raw.githubusercontent.com/flayyer/flayyer-wp/master/.github/assets/view.png)

We have developed a Wordpress Plugin but is not listed in the official plugin list yet. Feel free to review it, here is the source code: [github.com/flayyer/flayyer-wp](https://github.com/flayyer/flayyer-wp).

## Requirements

* [Yoast SEO](https://yoast.com) version 14.0 or newer.
* PHP version 14.0 or newer

## Download

To get started download the latest plugin version: [flayyer-wordpress-plugin.zip](https://github.com/flayyer/flayyer-wp/releases/latest/download/flayyer-wordpress-plugin.zip)

If you are looking for an older version of the plugin you can find them in the [releases page](https://github.com/flayyer/flayyer-wp/releases/latest). They	are all listed as zip files named `flayyer-wordpress-plugin.zip`.

## Install

From your admin dashboard go to the **Plugins** menu. Click on **Upload Plugin** and upload	the zipped file `flayyer-wordpress-plugin.zip` (no need to decompress it).

![demo image of flayyer install](https://raw.githubusercontent.com/flayyer/flayyer-wp/master/.github/assets/install.png)

## Categories and variables

By default we have defined **5 types of content pages** on Wordpress. Each one maps the most common fields from Wordpress to variables you can grab inside the Flayyer templates.

### Home / default

The main page of your Wordpress site. If you don't setup the next templates this is going to be used as default.

* No variables are pass

### Posts

Each entry you create on your site. This is probably the most important category.

* `title`: Post title
* `description`: Post description
* `images`: Array of images urls (`string[]`)
* `author`: Author object
  * `first_name`
  * `last_name`
  * `display_name`
  * `nickname`
  * `avatar`: Image URL from Gravatar.

### Author / profile

A good use-case is displaying profile images (avatar) or for social media profiles.

* `first_name`
* `last_name`
* `display_name`
* `nickname`
* `avatar`: Image URL from Gravatar.

### Categories

Also called <em>tags</em>. This is useful to display a collection of items.

* `title`: Category title
* `description`: Category description
* `images`: Array of images urls (`string[]`)

### Pages

Any other page like _About_, _Contact us_ or the privacy policy.

* `title`: Page title
* `description`: Page description
* `images`: Array of images urls (`string[]`)

**Great! 🎉 This is all you need to start using FLAYYER with Wordpress.**
