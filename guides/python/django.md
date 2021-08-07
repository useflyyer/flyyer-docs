---
id: django
title: Django
---

<!-- TODO -->
<!-- > Example Repository: https://github.com/useflyyer/integration-examples/tree/main/examples/django/django-without-extra-dependencies -->

## Installation

We're going to use [flyyer/flyyer-python](/guides/python/flyyer) to format Flyyer URLs in a [context processor](https://docs.djangoproject.com/en/3.2/ref/templates/api/#django.template.RequestContext) to render meta-tags into the `<head />` of your views dynamically with few lines of code.

Alternatively, you can set it with [django-meta](https://github.com/nephila/django-meta) meta-tags helper, [just jump to it ↓](#installation-with-django-meta).

### 1. Install `flyyer` module

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const pyManagers = [
  {label: "Poetry", value: "poetry"},
  {label: "Pipenv", value: "pipenv"},
  {label: "Pip", value: "pip"},
]

<Tabs groupId="py-manager" defaultValue="poetry" values={pyManagers}>
<TabItem value="poetry">

Install it with [Poetry](https://python-poetry.org/), the modern package manager

```bash title="Terminal.app"
poetry add flyyer
```

</TabItem>

<TabItem value="pipenv">

Install it with [Pipenv](https://pipenv.pypa.io/), the Python dev workflow for humans

```bash title="Terminal.app"
pipenv install flyyer
```

</TabItem>

<TabItem value="pip">

Install it with [pip](https://pip.pypa.io/en/stable/)

```bash title="Terminal.app"
pip install -U flyyer
pip freeze > requirements.txt
```

</TabItem>
</Tabs>

### 2. Create a `myapp/custom_context_processors.py` file

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

```py title="myapp/custom_context_processors.py" {6-11}
from django.http.request import HttpRequest
from flyyer import Flyyer

# ...

def flyyer_href(request: HttpRequest):
    flyyer = Flyyer(
        project="your-project-identifier",
        path=request.get_full_path(),  # set current pathname dynamically
    )
    return {'flyyer_href': flyyer.href()} # pass smart image link to views templates
```

### 3. Add `myapp.custom_context_processors.flyyer_href` to project settings

```py title="myapp/settings.py" {9}
# ...
TEMPLATES = [
    {
        # ...
        'OPTIONS': {
            # ...
            'context_processors': [
                # ...
                'myapp.custom_context_processors.flyyer_href',
            ],
        },
    },
# ...
```

:::note
If you're using Django < 1.8, it should work like this:

```py title="myapp/settings.py" {4}
# ...
TEMPLATE_CONTEXT_PROCESSORS = (
    # ...
    'myapp.custom_context_processors.flyyer_href',
)
```

:::

### 4. Add the meta-tags to the `<head />` to your `base.html`

When added to the `base.html` they should be added to each one of your pages. Please make sure they are not overwritten elsewhere.

```html title="myapp/templates/base.html" {4-6,9}
<!-- ... -->

<head>
  <meta property="og:image" content="{{ flyyer_href }}" />
  <meta name="twitter:image" content="{{ flyyer_href }}" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- [Recommended] Keep your original og:image handy for your project -->
  <!-- <meta name="flyyer:default" content={{your-original-og-image}} /> -->

  <!-- ... -->
</head>

<!-- ... -->
```

:::note
If you inspect the `<head />` of your HTML you should see the `og:image` and `twitter:image` tags with `cdn.flyyer.io` URLs with your **project identifier** and current `pathname` on it. If you're having trouble, please make sure they are not overwritten elsewhere.
:::

### 5. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Installation with `django-meta`

<!-- TODO -->
<!-- > Example Repository: https://github.com/useflyyer/integration-examples/tree/main/examples/django/django-with-django-meta -->

The `django-meta` module helps you rendering meta-tags efficiently.

### 1. Install `flyyer` module and `django-meta`

<Tabs groupId="py-manager" defaultValue="poetry" values={pyManagers}>
<TabItem value="poetry">

Install them with [Poetry](https://python-poetry.org/), the modern package manager

```bash title="Terminal.app"
poetry add flyyer django-meta
```

</TabItem>

<TabItem value="pipenv">

Install them with [Pipenv](https://pipenv.pypa.io/), the Python dev workflow for humans

```bash title="Terminal.app"
pipenv install flyyer django-meta
```

</TabItem>

<TabItem value="pip">

Install them with [pip](https://pip.pypa.io/en/stable/)

```bash title="Terminal.app"
pip install -U flyyer django-meta
pip freeze > requirements.txt
```

</TabItem>
</Tabs>

### 2. Complete `settings.py`

You can [Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

```py title="myapp/settings.py" {1,5,10-12,14-18}
from flyyer import Flyyer

INSTALLED_APPS = [
    # ...
    'meta',
]

# ...

FLYYER_DEFAULT = {
    'project': "your-project-identifier",
}

META_SITE_DOMAIN = 'mydomain.com'
META_USE_OG_PROPERTIES = True
META_USE_TWITTER_PROPERTIES = True
META_DEFAULT_IMAGE = Flyyer(**FLYYER_DEFAULT).href()
META_TWITTER_TYPE = "summary_large_image"
```

### 3. Pass the current `pathname` to Flyyer instance

In Django there are [function views](https://docs.djangoproject.com/en/3.2/topics/http/views/) and [class views](https://docs.djangoproject.com/en/3.2/topics/class-based-views/intro/) that may render HTML. Here you have an example for each one of them.

```py title="mymodel/views.py" {4-5,9-14,21-29,34-36}
from django.http import HttpRequest
from django.shortcuts import render
from django.conf import settings
from meta.views import Meta
from flyyer import Flyyer
from .models import Choice, Question

# Flyyer smart image link helper
def flyyer_href(current_pathname):
    flyyer = Flyyer(**{
        **settings.FLYYER_DEFAULT,
        'path': current_pathname,
    })
    return flyyer.href()

# Class view example
class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        question = context['object']
        context['meta'] = Meta(
            title=f'Question: #{question.id}',
            description=question.question_text,
            image=flyyer_href(self.request.get_full_path()),
        )
        return context

# Function view example
def index(request: HttpRequest):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    meta = Meta(image=flyyer_href(request.get_full_path()))
    context = {'latest_question_list': latest_question_list, 'meta': meta}
    return render(request, 'polls/index.html', context)
```

Check [other ways](https://django-meta.readthedocs.io/en/latest/views.html) to integrate Flyyer on Django views. Then don't hesitate to [contribute](https://github.com/useflyyer/flyyer-docs/edit/main/guides/python/django.md) to the docs.

### 4. Render meta-tags on views

Put the following code in your `base.html`.

```html {1,7}
{% load meta %}

<!DOCTYPE html>
<html lang="en">

<head>
  {% include 'meta/meta.html' %}
  <!-- ... -->
</head>

<!-- ... -->
```

:::note
If you inspect the `<head />` of your HTML you should see the `og:image` and `twitter:image` tags with `cdn.flyyer.io` URLs with your **project identifier** and current `pathname` on it. If you're having trouble, please make sure they are not overwritten elsewhere.
:::

### 5. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Signed URLs

The package `flyyer` supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

**If you integrated Flyyer with a context processor** then set it like below.

```py title="myapp/custom_context_processors.py" {8-9}
from django.http.request import HttpRequest
from flyyer import Flyyer

def flyyer_href(request: HttpRequest):
    flyyer = Flyyer(
        project="your-project-identifier",
        path=request.get_full_path(),
        secret="your-secret-key",
        strategy="JWT", # or "HMAC"
    )
    return {'flyyer_href': flyyer.href()} # pass smart image link to views templates

# ...
```

**If you integrated Flyyer with `django-meta`**, then in `settings.py` set `FLYYER_DEFAULT` as follows.

```py title="myapp/settings.py" {5-6}
# ...

FLYYER_DEFAULT = {
    'project': "your-project-identifier",
    'secret': "your-secret-key",
    'strategy': "JWT", # or "HMAC"
}

# ...
```
