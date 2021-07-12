---
id: flyyer
title: flyyer gem
---

> Repository: https://github.com/useflyyer/flyyer-ruby

## Installation

This module is agnostic to any Ruby framework.

### 1. Install `flyyer` gem

Add this line to your application's Gemfile:

```ruby title="Gemfile"
gem 'flyyer'
```

And then execute:

```bash title="Terminal.app"
bundle install
```

Or install it yourself as:

```bash title="Terminal.app"
gem install flyyer
```

### 2. Generate smart image URLs for your meta-tags

Find your `project-slug` in [your dashboard](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

Now you can generate smart image URLs like shown below.

```ruby
require 'flyyer'

flyyer = Flyyer::Flyyer.create do |f|
  # Your project slug
  f.project = 'your-project-slug'
  # The current pathname of your website, try to set it dynamically
  f.path = '/path/to/product'
end

# Use this image URL in your <head/> tags
url = flyyer.href
# > https://cdn.flyyer.io/v2/project/_/__v=1596906866/path/to/product
```

Take a look into the [Ruby on Rails integration guide](/guides/ruby/rails) to see a full example for your specific setup. You're invited to [contribute to the Ruby documentation](https://github.com/useflyyer/flyyer-docs/tree/main/guides/ruby) and add your own guide for other technologies.

:::note
The meta-tags code needs to be static, processed at build time or server-side rendered for link previews to work.
:::

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Signed URLs

The package `flyyer` supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```python {6-7}
from flyyer import Flyyer

flyyer = Flyyer(
  project="website-com",
  path="/path/to/product",
  secret="your-secret-key",
  strategy="JWT", # or "HMAC"
)

# Use this image in your <head/> tags
url = flyyer.href()
# > https://cdn.flyyer.io/v2/website-com/jwt-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJhbXMiOnsiX19pZCI6ImplYW5zLTEyMyJ9LCJwYXRoIjoiXC9wYXRoXC90b1wvcHJvZHVjdCJ9.X8Vs5SGEA1-3M6bH-h24jhQnbwH95V_G0f-gPhTBTzE?__v=1618283086
```
