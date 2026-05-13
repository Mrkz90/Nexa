// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Mrkz90.github.io', 
  base: 'Nexa',
  vite: {
    plugins: [tailwindcss()]
  }
});