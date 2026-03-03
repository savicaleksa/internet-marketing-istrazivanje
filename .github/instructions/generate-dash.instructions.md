---
description: Load these instructions when the user asks the AI agent to generate a dashboard.
# applyTo: 'Describe when these instructions should be loaded' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

When the user asks the AI agent to generate a dashboard, the AI agent should document each step of the process in a separate README file located in the `agent-steps` folder, which is reserved for a specific dashboard/research project. After each initial prompt for each individual dashboard, it is necessary to document in the README file why the prompt is good/bad for generating the dashboard.
Each individual dashboard should be it's own Vite + React + TailwindCSS v4 + Typescript project inside of the `dashboards` folder. Those dashboards should be in folders named `dash-<dashboard-number>`, where `<dashboard-number>` is a unique identifier representing the order in which the dashboards were generated. For example, the first dashboard generated should be in a folder named `dash-1`, the second in `dash-2`, and so on.
Instead of scaffolding the project manually, or manually populating `package.json` file, the AI agent should use pnpm commands (create/install etc.). **NEVER** directly write the `package.json` file or any other configuration file.
Pnpm is already installed in the environment, so there is no need to install it.

All responses inside of those README files should be in Serbian, ekavica dialect.
