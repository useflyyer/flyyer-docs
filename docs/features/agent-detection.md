---
id: agent-detection
title: Agent detection
---

By _"agent"_ we mean the social platform (or web crawler) your images are being rendered for. You can render custom templates depending on the platform your links are being shared.

![multiple agents demo](/img/images/agents.png)

## Usage

To detect the agents on your templates grab the `agent` prop and get the name via `agent.name`.

<!-- MDX variables -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export const engines = [
  {label: "React", value: "react"},
  {label: "React Typescript", value: "react-typescript"},
];

<Tabs groupId="engines" defaultValue="react" values={engines}>
<TabItem value="react">

```jsx title="templates/main.js"
import React from "react";

export default function MainTemplate({ agent, variables }) {
  if (agent.name === "whatsapp") {
    return <WhatsappComponent variables={variables} />
  }
  // ... default component ...
}
```

</TabItem>
<TabItem value="react-typescript">

```tsx title="templates/main.tsx"
import React from "react";
import { TemplateProps, FlayyerAgentName } from "@flyyer/types";

export default function MainTemplate({ agent, variables }: TemplateProps) {
  if (agent.name === FlayyerAgentName.WHATSAPP) {
    // Custom rules for squared template
    return <WhatsappComponent variables={variables} />
  }
  // ... default component ...
}
```

</TabItem>
</Tabs>

## Agent list

Some agents are (but not limited to):

| Name | Value |
|------|-------|
| Facebook | `facebook` |
| Twitter | `twitter` |
| WhatsApp | `whatsapp` |
| Instagram | `instagram` |
| LinkedIn | `linkedin` |
| Reddit | `reddit` |
| Google | `google` |
| Pinterest | `pinterest` |
| Telegram | `telegram` |
| Slack | `slack` |
