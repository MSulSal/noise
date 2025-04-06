// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Set base to your repository name (including leading and trailing slash)
  base: "/noise/",
});
