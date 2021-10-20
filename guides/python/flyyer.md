---
id: flyyer
title: flyyer lib
---

> Repository: https://github.com/useflyyer/flyyer-python

## Installation

This module is agnostic to any Python framework and requires Python >= 3.6.

### 1. Install `flyyer` library

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
poetry add flyyer
```

</TabItem>

<TabItem value="pipenv">

Install it with [Pipenv](https://pipenv.pypa.io/), the Python dev workflow for humans.

```bash title="Terminal.app"
pipenv install flyyer
```

</TabItem>

<TabItem value="pip">

Install it with [pip](https://pip.pypa.io/en/stable/).

```bash title="Terminal.app"
pip install flyyer
pip freeze > requirements.txt
```

</TabItem>
</Tabs>

### 2. Format Flyyer CDN URLs for your meta-tags

[Find your project identifier here](https://flyyer.io/dashboard/_/projects/_/integrate?ref=docs). If you don't have a project yet, [create one here](https://flyyer.io/get-started?ref=docs).

Now you can format Flyyer CDN URLs like shown below.

```python
from flyyer import Flyyer

flyyer = Flyyer(
  # Your project identifier
  project="your-project-identifier",
  # The current pathname of your website, try to set it dynamically
  path="/path/to/product",
)

# Use this image URL in your <head/> tags
url = flyyer.href()
# > https://cdn.flyyer.io/v2/your-project-identifier/_/__v=1618281823/path/to/product
```

Take a look into the [Django integration guide](/guides/python/django) to see a full example for your specific setup. You're invited to [contribute to the Python documentation](https://github.com/useflyyer/flyyer-docs/tree/main/guides/python) and add your own guide for other technologies.

:::note
The meta-tags code needs to be static, processed at build time or server-side rendered for link previews to work.
:::

### 3. Voilà 🎉

Now you're able to manage your link previews from your dashboard, create content from templates while preserving your brand style and export it as social media formats.

[Go to your dashboard 🚀](https://flyyer.io/dashboard/_/projects/_/)

## Advanced usage

### Default image

Pass your main or default image for each page through the `default` parameter. This will help Flyyer to create a better preview efficiently.

```python {6}
from flyyer import Flyyer

flyyer = Flyyer(
  project="your-project-identifier",
  path="/path/to/product",
  default="/static/image-1.png" # or https://your-site.com/static/image-1.png
)

# Use this image in your <head/> tags
url = flyyer.href()
# > https://cdn.flyyer.io/v2/your-project-identifier/_/_def=%2Fstatic%2Fimage-1.png&__v=1618283086/path/to/product
```

### Signed URLs

The package `flyyer` supports HMAC and JWT signatures.

Find your `secret key` [here](https://www.flyyer.io/dashboard/_/projects/_/advanced) under Signed URLS, and enable the signing strategy you desire.

```python {6-7}
from flyyer import Flyyer

flyyer = Flyyer(
  project="your-project-identifier",
  path="/path/to/product",
  secret="your-secret-key",
  strategy="JWT", # or "HMAC"
)

# Use this image in your <head/> tags
url = flyyer.href()
# > https://cdn.flyyer.io/v2/your-project-identifier/jwt-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJhbXMiOnsiX19pZCI6ImplYW5zLTEyMyJ9LCJwYXRoIjoiXC9wYXRoXC90b1wvcHJvZHVjdCJ9.X8Vs5SGEA1-3M6bH-h24jhQnbwH95V_G0f-gPhTBTzE?__v=1618283086
```
