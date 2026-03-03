import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default async () => {
  const tailwindMod = await import("@tailwindcss/vite");
  const tailwind =
    tailwindMod && (tailwindMod as any).default
      ? (tailwindMod as any).default
      : tailwindMod;
  return defineConfig({
    plugins: [react(), tailwind()],
  });
};
