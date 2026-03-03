---
description: Load these instructions when the user asks the AI agent to generate a dashboard.
# applyTo: 'Describe when these instructions should be loaded' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

When the user asks the AI agent to generate a dashboard, the AI agent should document each step of the process in a separate README file located in the `agent-steps` folder, which is reserved for a specific dashboard/research project. After each initial prompt for each individual dashboard, it is necessary to document in the README file why the prompt is good/bad for generating the dashboard.
Each individual dashboard should be it's own Vite project inside of the `dashboards` folder.

All responses inside of those README files should be in Serbian, ekavica dialect.
