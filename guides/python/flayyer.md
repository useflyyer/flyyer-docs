---
id: flayyer
title: flayyer lib
---

> Repository: https://github.com/flayyer/flayyer-python

## Installation

This module is agnostic to any Python framework and requires Python >= 3.6.

### 1. Install `flayyer`

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
poetry add flayyer
```

</TabItem>

<TabItem value="pipenv">

Install it with [Pipenv](https://pipenv.pypa.io/), the Python dev workflow for humans.

```bash title="Terminal.app"
pipenv install flayyer
```

</TabItem>

<TabItem value="pip">

Install it with [pip](https://pip.pypa.io/en/stable/).

```bash title="Terminal.app"
pip install flayyer
pip freeze > requirements.txt
```

</TabItem>
</Tabs>

### 2. Generate smart image URLs

Find your `project-slug` in [your dashboard](https://flayyer.com/auth/login?ref=docs). If you don't have a project yet, [create one here](https://flayyer.com/get-started?ref=docs).

Now you can generate smart image URLs like shown below.

```python
from flayyer import FlayyerAI

flayyer = FlayyerAI(
  # Your project slug
  project="your-project-slug",
  # The current pathname of your website, try to set it dynamically
  path="/path/to/product",
)

# Use this image in your <head/> tags
url = flayyer.href()
# > https://flayyer.ai/v2/your-project-slug/_/__v=1618281823/path/to/product
```

Take a look into the [Django integration guide](/guides/python/django) to see a full example for your specific setup. You're invited to [contribute to the Python documentation](https://github.com/flayyer/flayyer-docs/tree/main/guides/python) and add your own guide for other technologies.

:::note
For link previews to work meta-tags code needs to be static or server-side rendered.
:::

## Advanced usage

### Signed URLs

The package `flayyer` supports HMAC and JWT signatures.

Find your `secret key` in [your dashboard](https://flayyer.com/dashboard/_/projects?ref=docs) > your project > Advanced settings > Signed URLS, and enable the signing strategy you desire.

```python {6-7}
from flayyer import FlayyerAI

flayyer = FlayyerAI(
  project="your-project-slug",
  path="/path/to/product",
  secret="your-secret-key",
  strategy="JWT", # or "HMAC"
)

# Use this image in your <head/> tags
url = flayyer.href()
# > https://flayyer.ai/v2/your-project-slug/jwt-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJhbXMiOnsiX19pZCI6ImplYW5zLTEyMyJ9LCJwYXRoIjoiXC9wYXRoXC90b1wvcHJvZHVjdCJ9.X8Vs5SGEA1-3M6bH-h24jhQnbwH95V_G0f-gPhTBTzE?__v=1618283086
```

:::caution
Make sure FlayyerAI is instanciated at build time or server-side, so your secret is not exposed on the client.
:::
