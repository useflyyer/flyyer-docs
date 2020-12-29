---
id: django
title: Django
---

> Repository: https://github.com/flayyer/integration-examples/tree/main/examples/django

Basically we are going to use [flayyer/flayyer-python](https://github.com/flayyer/flayyer-python) to format Flayyer URL and [nephila/django-meta](https://github.com/nephila/django-meta) to render them into the `<head />` of your views.

## Install

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

Install it with [Poetry](https://python-poetry.org/), the modern package manager.

```bash title="Terminal.app"
poetry add flayyer django-meta
```

</TabItem>

<TabItem value="pipenv">

Install it with [Pipenv](https://pipenv.pypa.io/), the Python dev workflow for humans.

```bash title="Terminal.app"
pipenv install flayyer django-meta
```

</TabItem>

<TabItem value="pip">

You can also use [pip](https://pip.pypa.io/en/stable/).

```bash title="Terminal.app"
pip install -U flayyer django-meta
pip freeze > requirements.txt
```

</TabItem>
</Tabs>

Import `Flayyer`, add `meta` to `INSTALLED_APPS` and setup default values:

```py title="projectname/settings.py" {1,11,14-18,20-40}
from flayyer import Flayyer

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # ....
    'meta',
]

FLAYYER_DEFAULT = {
    'tenant': "my-company",
    'deck': "my-project",
    'template': "main",
}

META_SITE_PROTOCOL='https'
META_SITE_DOMAIN='example.com'
META_SITE_NAME='Flayyer Example'
META_INCLUDE_KEYWORDS=['flayyer', 'django', 'seo']
META_DEFAULT_KEYWORDS=META_INCLUDE_KEYWORDS
META_USE_OG_PROPERTIES=True
META_USE_TWITTER_PROPERTIES=True
META_USE_SCHEMAORG_PROPERTIES=True
META_USE_TITLE_TAG=True
META_DEFAULT_IMAGE=Flayyer(**FLAYYER_DEFAULT).href() # here we use Flayyer
META_TWITTER_TYPE="summary_large_image"
META_TWITTER_SITE="@example"
META_TWITTER_AUTHOR="@example"
```

To render the meta tags, simply add the `meta` dictionary/object to the [template context](https://docs.djangoproject.com/en/3.1/topics/class-based-views/generic-display/#adding-extra-context), and add this inside the `<head>` tags in your main layout file:

```html title="projectname/templates/base.html" {2,5-6,9}
{% load static %}
{% load meta %}

<!DOCTYPE html>
<html {% meta_namespaces_schemaorg %} lang="en">
<head {% meta_namespaces %}>
  <link rel="stylesheet" href="style.css">

  {% include 'meta/meta.html' %}

  {% block head %}
  {% endblock %}
</head>

<body>
  <nav>
    {% block nav %}
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
    </ul>
    {% endblock %}
  </nav>

  <main id="content">
    {% block content %}
    {% endblock %}
  </main>
</body>
</html>
```

## Usage

On its most simple form: all you have to do is set an instance of `Meta` from `meta.views` as `context['meta']` on your view.py files.

Make sure every view has a `meta` value in their context, otherwise `<meta />` won't be rendered.

```python
context['meta'] = Meta() # use defaults from settings.py
```

To render Flayyer URL as `og:image` and `twitter:image`:

```python
from flayyer import Flayyer

flayyer = Flayyer(tenant='my-company', deck='my-deck', template='my-template')
context['meta'] = Meta(image=flayyer.href())
```

### Function views

The most low-level views are just functions. Make sure to pass the `context` back to the `render(...)` method.

```py title="projectname/views.py" {7-8}
from django.http import HttpRequest # remove if you don't use types
from django.shortcuts import render
from meta.views import Meta # from django-meta

def index(request: HttpRequest):
    context = {}
    context['meta'] = Meta() # use defaults from settings.py
    return render(request, 'polls/index.html', context)
```

To render a Flayyer template when a page is shared can be done by overriding default values:

```py title="projectname/views.py" {5,8-14,19}
from django.http import HttpRequest # remove if you don't use types
from django.shortcuts import render
from django.conf import settings
from meta.views import Meta # from django-meta
from flayyer import Flayyer, FlayyerMeta

def about(request):
    flayyer = Flayyer(**{
      **settings.FLAYYER_DEFAULT,
      'variables': {
        'title': 'Get to know us',
      },
      'meta': FlayyerMeta(id='about'), # for analytics
    })
    context = {}
    context['meta'] = Meta(
      title='About',
      description='Lorem ipsum',
      image=flayyer.href(),
    )
    return render(request, 'polls/index.html', context)
```

### Class views

:::note Official docs
* https://docs.djangoproject.com/en/3.1/topics/class-based-views/intro/
* https://django-meta.readthedocs.io/en/latest/views.html
:::

Class-based views provide an alternative way to implement views as Python objects instead of functions. They do not replace function-based views, but have certain differences and advantages when compared to function-based views.

If you don't override the `context_object_name` attribute of the Views, the current object in the context is available as `context['object']` for `django.views.generic.DetailView` and as `context['object_list']` for `django.views.generic.ListView`.

Similar to the previous section, we need set an instance of `Meta` to the `context['meta']`.

```python
from django.views import generic
from django.conf import settings
from meta.views import Meta # from django-meta
from flayyer import Flayyer, FlayyerMeta

from .models import Question

# GET /polls/<int:pk>/
class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'
    # context_object_name = 'object' # defaults to `object`

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        question: Question = context['object'] # see 'context_object_name'
        flayyer = Flayyer(**{
            **settings.FLAYYER_DEFAULT,
            'template': 'item',
            'variables': {
                'title': question.question_text,
            },
            'meta': FlayyerMeta(id=question.id),
        })
        context['meta'] = Meta(
            title=f'Question: #{question.id}',
            description=question.question_text,
            image=flayyer.href(),
        )
        return context
```

Another way of setting the `<meta />` tags is provided by `django-meta`:

```python {12-15}
from django.views import generic
from django.conf import settings
from meta.views import MetadataMixin
from flayyer import Flayyer

from .models import Question

class IndexView(MetadataMixin, generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_meta_image(self, context):
        n = len(context['latest_question_list']) # see context_object_name
        variables = { 'title': f'There is {n} questions' }
        return str(Flayyer(**settings.FLAYYER_DEFAULT, variables=variables))

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]
```

If you inspect the `<head />` of your HTML you should see the `og:image` tags with URLs to `flayyer.io`.
