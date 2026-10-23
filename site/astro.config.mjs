// @ts-check
import { defineConfig } from 'astro/config';

/* The site has its own domain and sits at its root, so there is no base path
   and every absolute URL is built from here. */
// https://astro.build/config
export default defineConfig({
  site: 'https://chengsupply.com',
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
