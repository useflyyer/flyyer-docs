---
id: automatic-deploys
title: Automatic deploys
---

[flyyer-actions]: https://github.com/useflyyer/flyyer-actions

> Repository: [https://github.com/useflyyer/flyyer-actions][flyyer-actions]

To speed-up the process of deploying Flyyers and making collaboration easier you can take advantage of Continuous Integration (CI) services such as [GitHub Actions](#github-actions) among others.

## GitHub Actions

[![Github actions screenshot deploying to Flyyer](https://github.com/useflyyer/flyyer-actions/raw/main/assets/result.png)](https://github.com/useflyyer/flyyer-deck-docs/actions)

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

Write these two lines on your terminal to download from [https://github.com/useflyyer/flyyer-actions][flyyer-actions] the latest version of the workflow file:

```bash title="Terminal.app"
mkdir -p .github/workflows
curl -L https://raw.githubusercontent.com/useflyyer/flyyer-actions/main/workflow-templates/flyyer-yarn.yml --output .github/workflows/deploy.yml
```

:::note
Afraid of copy-pasting commands from strangers?
Grab this file [flyyer-yarn.yml](https://raw.githubusercontent.com/useflyyer/flyyer-actions/main/workflow-templates/flyyer-yarn.yml) and put it in your project as `.github/workflows/deploy.yml`
:::

### Add FLYYER_KEY to your GitHub's secrets

Get your FLYYER_KEY from https://flyyer.io/dashboard/_/settings then add it to your `Settings` `->` `Secrets` inside the settings of your repository.

![Github example of adding api keys to secrets](https://github.com/useflyyer/flyyer-actions/raw/main/assets/settings-secrets.png)

**Finally, on your next `git push` your project will deploy automatically 🎉**
