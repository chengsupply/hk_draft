// @ts-check
import { defineConfig } from 'astro/config';

/* The site lives at its own domain, so it sits at the root: no base path, and
   every absolute URL is built from chengsupply.com. BASE_PATH still works for a
   preview build under a subfolder, but nothing uses it now. */
const base = process.env.BASE_PATH || '/';
const site =
  base === '/'
    ? 'https://chengsupply.com'
    : `https://nurzhanmukhitov.github.io${base.replace(/\/$/, '')}`;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'never',
  integrations: [],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      // zh-CN locale served at /zh-cn/ URL (lowercase path).
      // Folder is src/pages/zh-cn/, locale code stays proper BCP 47 'zh-CN'.
      { codes: ['zh-CN'], path: 'zh-cn' },
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
