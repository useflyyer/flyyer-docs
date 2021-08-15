---
id: rails
title: Ruby on Rails
---

> Example Repository: https://github.com/useflyyer/flyyer-example-rails

## Installation

We're going to use [flyyer/flyyer-ruby](https://github.com/useflyyer/flyyer-ruby) to format Flyyer URLs and [kpumuk/meta-tags](https://github.com/kpumuk/meta-tags) to render them into the `<head />` of your views. Signed URLs are made with [jwt/ruby-jwt](https://github.com/jwt/ruby-jwt) explained in the [Advanced usage](#advanced-usage) section.

### 1. Install `flyyer`, `meta-tags` and `jwt` gems

Add to your Gemfile:

```ruby title="Gemfile"
gem 'flyyer'
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

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

```ruby title="app/controllers/application_controller.rb" {2,4-34}
class ApplicationController < ActionController::Base
  before_action :set_flyyer

  def set_flyyer(&block)
    flyyer = Flyyer::Flyyer.create(&block)
    flyyer.project = 'your-project-identifier'
    flyyer.path = request.path

    image_src = flyyer.href.html_safe

    social_image = {
      _: image_src,
    }
    # See 'meta-tags' documentation for more details: https://github.com/kpumuk/meta-tags
    set_meta_tags({
      # title: 'My Website', # <title />
      # description: 'My website description', # <description />
      image_src: image_src,
      og: {
        image: social_image,
      },
      twitter: {
        image: social_image,
        card: 'summary_large_image',
      },
      # Optional
      flyyer: {
        # Reference your previous or default image (eg: product item, profile image, etc.)
        default: '/default-social-image.png', # ActionController::Base.helpers.asset_path('default-social-image.png'),
        # Additional variables
        color: 'indigo',
      },
    })
  end

  # ...
end
```

### 3. Render meta-tags

Add `display_meta_tags` to your layout.

```ruby title="app/views/layouts/application.html.erb" {4,9}
<!DOCTYPE html>
<html>
  <head>
    <%# <title>RailsExample</title> 👈 Remove this line %>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= display_meta_tags %>

    <%= stylesheet_link_tag 'application', media: 'all' %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

:::note
If you inspect the `<head />` of your HTML you should see the `og:image` and `twitter:image` tags with `cdn.flyyer.io` URLs with your **project identifier** and current `pathname` on it. If you're having trouble, please make sure they are not overwritten elsewhere.
:::

### 4. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

## Flyyer meta-tags

You can pro

### Signed URLs

The `flyyer` gem supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```ruby title="app/controllers/application_controller.rb" {8-9}
class ApplicationController < ActionController::Base
  before_action :set_flyyer

  def set_flyyer(&block)
    flyyer = Flyyer::Flyyer.create(&block)
    flyyer.project = 'your-project-identifier'
    flyyer.path = request.path
    flyyer.secret = 'your-secret-key'
    flyyer.strategy = 'JWT' # or 'HMAC'

    image_src = flyyer.href.html_safe

    social_image = {
      _: image_src,
    }
    set_meta_tags({
      # Setup other meta-tags here.
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
