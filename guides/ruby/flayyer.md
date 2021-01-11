---
id: flayyer
title: flayyer gem
---

> Repository: https://github.com/flayyer/flayyer-ruby

Learn how to ingrate Flayyer with any Ruby framework. Here you will find the required documentation to use your templates on your websites.

We have created a library that can help you creating valid Flayyer URLs and so avoiding any potential issues with manually encoding values.

It is built as a Ruby Gem and is very lightweight and has zero dependencies. You can check the source-code on our GitHub: [flayyer/flayyer-ruby](https://github.com/flayyer/flayyer-ruby).

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
gem install flayyer # not recommended
```

After installing the gem you can format URL as:

```ruby
require 'flayyer'

flayyer = Flayyer::FlayyerURL.create do |f|
  f.tenant = 'tenant'
  f.deck = 'deck'
  f.template = 'template'
  f.variables = {
      title: 'Hello world!'
  }
end

# Use this image in your <head/> tags
url = flayyer.href
# > https://flayyer.io/v2/tenant/deck/template.jpeg?__v=1596906866&title=Hello+world%21
```
