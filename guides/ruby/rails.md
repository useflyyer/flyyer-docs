---
id: rails
title: Ruby on Rails
---

> Repository: https://github.com/flayyer/integration-examples/tree/main/examples/rails

Basically we are going to use [flayyer/flayyer-ruby](https://github.com/flayyer/flayyer-ruby) to format Flayyer URL and [kpumuk/meta-tags](https://github.com/kpumuk/meta-tags) to render them into the `<head />` of your views.

Add to your Gemfile:

```ruby title="Gemfile"
gem 'flayyer'
gem 'meta-tags'
```

And then execute:

```bash title="Terminal.app"
bundle install
rails generate meta_tags:install
```

Add `display_meta_tags` to your _layouts_ files:

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

We recommended adding a _before action_ so every view has a Flayyer URL.

```ruby title="app/controllers/application_controller.rb" {2,4-23,30-33}
class ApplicationController < ActionController::Base
  before_action :set_flayyer

  def set_flayyer(&block)
    flayyer = Flayyer::FlayyerURL.create(&block)
    flayyer.tenant = "my-company" unless flayyer.tenant.present?
    flayyer.deck = "my-project" unless flayyer.deck.present?
    flayyer.template = "main" unless flayyer.template.present?
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

  def root
    render "/index"
  end

  def about
    # override default flayyer variables
    set_flayyer do |f|
      f.variables = { title: "About" }
    end
    render "/about"
  end
end
```

:::note
For more information refer to:
* https://github.com/kpumuk/meta-tags#using-metatags-in-controller
* https://github.com/flayyer/flayyer-ruby#ruby-on-rails
:::
