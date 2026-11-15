import { defineConfig } from 'astro/config';
import { SITE } from './src/config.ts';

// En GitHub Pages el workflow pasa la dirección y la subcarpeta de la web
// (SITE_URL y BASE_PATH). En local se usa el dominio de src/config.ts.
const site = process.env.SITE_URL || SITE.url;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
