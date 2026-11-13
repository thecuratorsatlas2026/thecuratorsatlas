// @ts-check
import { defineConfig } from 'astro/config';

// Por defecto el sitio vive en la raíz del dominio (Cloudflare Pages / dominio propio).
// El workflow de GitHub Pages define SITE_URL y BASE_PATH para publicarlo en una subcarpeta.
export default defineConfig({
  site: process.env.SITE_URL || 'https://thecuratorsatlas.pages.dev',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
