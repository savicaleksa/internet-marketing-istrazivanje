---
description: Should be loaded when the user asks the AI agent to install Tailwind CSS v4 and Vite in the project.
# applyTo: 'Describe when these instructions should be loaded' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

This is a set of instructions for installing Tailwind CSS v4 in the project. Follow the steps below to ensure that Tailwind CSS is properly integrated into your Vite development environment.

Create your project
Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

```bash
pnpm create vite@latest <project-name>
cd <project-name>
```

Install Tailwind CSS
Install tailwindcss and @tailwindcss/vite via pnpm.

```bash
pnpm install tailwindcss @tailwindcss/vite
```

Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

```ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
});
```

Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.

```css
@import "tailwindcss";
```

Start your build process
Run your build process with pnpm run dev or whatever command is configured in your package.json file.

```bash
pnpm run dev
```

This will start your development server, and Tailwind CSS should now be available for use in your project. You can start using Tailwind's utility classes in your HTML and React components to style your application.
