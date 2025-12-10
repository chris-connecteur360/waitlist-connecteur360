// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  server: {
      host: true, // ou '0.0.0.0'
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});