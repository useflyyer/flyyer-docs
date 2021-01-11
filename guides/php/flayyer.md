---
id: flayyer
title: flayyer package
---

> Repository: https://github.com/flayyer/flayyer-php

Learn how to ingrate Flayyer with any PHP framework. Here you will find the required documentation to use your templates on your websites. **Note: PHP 7.1+ is required.**

We have created a library that can help you creating valid Flayyer URLs and so avoiding any potential issues with manually encoding values.

It is built as a PHP Composer package and is very lightweight and has zero dependencies. You can check the source-code on our GitHub: [flayyer/flayyer-php](https://github.com/flayyer/flayyer-php).

Use [Composer](https://getcomposer.org/) to install this package.

```bash title="Terminal.app"
composer require flayyer/flayyer
```

Basic usage is very straight-forward:

```php
require_once 'vendor/flayyer/flayyer/src/Flayyer.php';

$flayyer = new Flayyer('tenant', 'deck', 'template');
$flayyer->variables = [ 'title' => 'Title' ];

// Use this URL string in your <head/> tags
$url = $flayyer->href();
print($url);
// https://flayyer.io/v2/tenant/deck/template.jpeg?__v=1609102236&title=Title
```
