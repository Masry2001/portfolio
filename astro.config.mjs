// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { CONFIG } from "./src/data/config.ts";

// https://astro.build/config
export default defineConfig({
  site: CONFIG.site.url,
  // Static output: `astro build` emits plain HTML/CSS/JS into dist/,
  // served directly by Nginx on the VPS.
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});
