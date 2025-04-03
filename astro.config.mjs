// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import tailwindVite from '@astrojs/tailwind';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-frappe'
    }
  },

  integrations: [tailwindVite(), preact()]
});
