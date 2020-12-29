---
id: flayyer
title: flayyer lib
---

[flayyer-python]: https://github.com/flayyer/flayyer-python

> Repository: https://github.com/flayyer/flayyer-python

Learn how to ingrate Flayyer with any Python framework. Here you will find the required documentation to use your templates on your websites. **Note: Python 3.6+ is required.**

We have created a library that can help you creating valid Flayyer urls and so avoiding any potential issues with manually encoding values.

It is built as a Python package and is very lightweight and has zero dependencies. You can check the source-code on our GitHub: [flayyer/flayyer-python][flayyer-python].

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

You can also use [pip](https://pip.pypa.io/en/stable/).

```bash title="Terminal.app"
pip install flayyer
pip freeze > requirements.txt
```

</TabItem>
</Tabs>

After installing the package you can format URL as:

```python
from flayyer import Flayyer

flayyer = Flayyer(
    tenant="tenant",
    deck="deck",
    template="template",
    variables={"title": "Hello world!"},
)

# Use this image in your <head/> tags
url = flayyer.href()
# > https://flayyer.io/v2/tenant/deck/template.jpeg?__v=1596906866&title=Hello+world%21
```

:::note
For additional information about variables and other terminology please read [Concepts](/docs/concepts).
:::
