import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.therakeshpurohit.com',
  output: 'static',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/blog': '/writing',
    '/blog/[slug]': '/writing/[slug]',
  },
});
