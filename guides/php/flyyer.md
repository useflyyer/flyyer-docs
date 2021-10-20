---
id: flyyer
title: flyyer package
---

> Repository: https://github.com/useflyyer/flyyer-php

## Installation

This module is agnostic to any PHP framework and requires PHP >= 7.1.

### 1. Install `flyyer/flyyer`

Install it with [Composer](https://getcomposer.org/).

```bash title="Terminal.app"
composer require flyyer/flyyer
```

### 2. Format Flyyer CDN URLs

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

Now you can format Flyyer CDN URLs like shown below.

```php
require_once 'vendor/flyyer/flyyer/src/Flyyer.php';

$flyyer = new Flyyer(
  # Your project identifier
  'your-project-identifier',
  # The current pathname of your website, try to set it dynamically
  '/path/to/product',
);

// Use this image URL in your <head/> tags
$url = $flyyer->href();
// > https://cdn.flyyer.io/v2/your-project-identifier/_/__v=1618281823/path/to/product
```

Take a look into the [Wordpress integration guide](/guides/php/wordpress) to see a full example for your specific setup. You're invited to [contribute to the PHP documentation](https://github.com/useflyyer/flyyer-docs/tree/main/guides/php) and add your own guide for other technologies.

:::note
The meta-tags code needs to be static, processed at build time or server-side rendered for link previews to work.
:::

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Default image

Pass your main or default image for each page through the `default` parameter. This will help Flyyer to create a better preview efficiently.

```php {4}
require_once 'vendor/flyyer/flyyer/src/Flyyer.php';

$flyyer = new Flyyer('your-project-identifier', '/path/to/product');
$flyyer->default = '/static/image-1.png';

# Use this image URL in your <head/> tags
url = flyyer.href();
# > https://cdn.flyyer.io/v2/your-project-identifier/_/_def=%2Fstatic%2Fimage-1.png&__v=1618283086/path/to/product
```

### Signed URLs

The package `flyyer/flyyer` supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```php {4,5}
require_once 'vendor/flyyer/flyyer/src/Flyyer.php';

$flyyer = new Flyyer('your-project-identifier', '/path/to/product');
$flyyer->secret="your-secret-key";
$flyyer->strategy="JWT"; // or "HMAC"

// Use this image URL in your <head/> tags
$url = $flyyer->href();
// > https://cdn.flyyer.io/v2/your-project-identifier/jwt-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJhbXMiOnsiX19pZCI6ImplYW5zLTEyMyJ9LCJwYXRoIjoiXC9wYXRoXC90b1wvcHJvZHVjdCJ9.X8Vs5SGEA1-3M6bH-h24jhQnbwH95V_G0f-gPhTBTzE?__v=1618283086
```
