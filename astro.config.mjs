// @ts-check
import { defineConfig } from 'astro/config';

// Cambiá `site` por tu dominio definitivo (o el *.pages.dev que te asigne Cloudflare).
export default defineConfig({
  site: 'https://thecuratorsatlas.pages.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
