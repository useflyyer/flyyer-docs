---
id: flayyer
title: flayyer gem
---

> Repository: https://github.com/flayyer/flayyer-ruby

## Installation

This module is agnostic to any Ruby framework.

### 1. Install `flayyer` gem

Add this line to your application's Gemfile:

```ruby title="Gemfile"
gem 'flayyer'
```

And then execute:

```bash title="Terminal.app"
bundle install
```

Or install it yourself as:

```bash title="Terminal.app"
gem install flayyer
```

### 2. Generate smart image URLs

Find your `project-slug` in [your dashboard](https://flayyer.com/auth/login?ref=docs). If you don't have a project yet, [create one here](https://flayyer.com/get-started?ref=docs).

Now you can generate smart image URLs like shown below.

```ruby
require 'flayyer'

flayyer = Flayyer::FlayyerAI.create do |f|
  # Your project slug
  f.project = 'your-project-slug'
  # The current pathname of your website, try to set it dynamically
  f.path = '/path/to/product'
end

# Use this image in your <head/> tags
url = flayyer.href
# > https://flayyer.ai/v2/project/_/__v=1596906866/path/to/product
```

Take a look into the [Ruby on Rails integration guide](/guides/ruby/rails) to see a full example for your specific setup. You're invited to [contribute to the Ruby documentation](https://github.com/flayyer/flayyer-docs/tree/main/guides/ruby) and add your own guide for other technologies.

:::note
For link previews to work meta-tags code needs to be static or server-side rendered.
:::
