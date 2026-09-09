// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// Served on the custom apex domain via GitHub Pages (see public/CNAME).
export default defineConfig({
  site: 'https://marynakantsyr.com',
  base: '/',
  integrations: [react()]
});
