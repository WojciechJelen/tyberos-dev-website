import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.tyberos.com',
  integrations: [tailwind(), react(), mdx()],
  output: 'static',
  adapter: vercel(),
  alias: {
    '@layouts': './src/layouts',
    '@components': './src/components',
  },
  devOverlay: true,
});
