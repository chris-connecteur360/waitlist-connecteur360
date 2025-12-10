// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  server: {
      host: true, // ou '0.0.0.0'
  },
  site: 'https://waitlist-connecteur360-nine.vercel.app/fr',
  output: 'server',
  adapter: vercel()
});