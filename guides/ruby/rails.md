---
id: rails
title: Ruby on Rails
---

## Installation

> Example Repository: https://github.com/flayyer/integration-examples/tree/main/examples/rails

We're going to use [flayyer/flayyer-ruby](https://github.com/flayyer/flayyer-ruby) to format FlayyerAI URLs and [kpumuk/meta-tags](https://github.com/kpumuk/meta-tags) to render them into the `<head />` of your views. Signed URLs are made with [jwt/ruby-jwt](https://github.com/jwt/ruby-jwt) explained in the [Advanced usage](#advanced-usage) section.

### 1. Install `flayyer`, `meta-tags` and `jwt` gems

Add to your Gemfile:

```ruby title="Gemfile"
gem 'flayyer'
gem 'meta-tags'
gem 'jwt'
```

And then execute:

```bash title="Terminal.app"
bundle install
rails generate meta_tags:install
```

### 2. Generate smart image URLs

Use `before_action` to provide the smart image URL to every view.

You can find your `project-slug` in [your dashboard](https://flayyer.com/auth/login?ref=docs). If you don't have a project yet, [create one here](https://flayyer.com/get-started?ref=docs).

```ruby title="app/controllers/application_controller.rb" {2,4-23}
class ApplicationController < ActionController::Base
  before_action :set_flayyer

  def set_flayyer(&block)
    flayyer = Flayyer::FlayyerAI.create(&block)
    flayyer.project = "your-project-slug"
    flayyer.path = request.path

    image_src = flayyer.href.html_safe

    social_image = {
      _: image_src,
    }
    set_meta_tags({
      image_src: image_src,
      og: {
        image: social_image,
      },
      twitter: {
        image: social_image,
      },
    })
  end

  # ...
end
```

### 3. Render meta-tags

Add `display_meta_tags` to your layout.

```ruby title="app/views/layouts/application.html.erb" {9}
<!DOCTYPE html>
<html>
  <head>
    <title>RailsExample</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= display_meta_tags site: 'My website' %>

    <%= stylesheet_link_tag 'application', media: 'all' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

Voilà!

:::note
If you inspect the `<head />` of your HTML you should see the `og:image` and `twitter:image` tags with `flayyer.ai` URLs with your `project-slug` and current `pathname` on it. If you're having trouble, please make sure they are not overwritten elsewhere.
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flayyer.com/auth/login?ref=docs)

## Advanced usage

### Signed URLs

The `flayyer` gem supports HMAC and JWT signatures.

Find your `secret key` in [your dashboard](https://flayyer.com/dashboard/_/projects?ref=docs) > your project > Advanced settings > Signed URLS, and enable the signing strategy you desire.

```ruby title="app/controllers/application_controller.rb" {8-9}
class ApplicationController < ActionController::Base
  before_action :set_flayyer

  def set_flayyer(&block)
    flayyer = Flayyer::FlayyerAI.create(&block)
    flayyer.project = "your-project-slug"
    flayyer.path = request.path
    flayyer.secret = "your-secret-key"
    flayyer.strategy = "JWT" # or "HMAC"

    image_src = flayyer.href.html_safe

    social_image = {
      _: image_src,
    }
    set_meta_tags({
      image_src: image_src,
      og: {
        image: social_image,
      },
      twitter: {
        image: social_image,
      },
    })
  end

  # ...
end
```
