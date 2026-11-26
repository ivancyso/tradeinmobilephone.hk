import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tradeinmobilephone.hk',
  trailingSlash: 'always',
  integrations: [sitemap({ i18n: { defaultLocale: 'zh-HK', locales: { 'zh-HK': 'zh-HK' } } })],
  build: { format: 'directory' },
});
