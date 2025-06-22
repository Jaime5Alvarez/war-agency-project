// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com', // Cambia esto por tu dominio real
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Personalizar entradas del sitemap
        if (item.url === 'https://yourdomain.com/') {
          item.priority = 1.0;
        }
        return item;
      },
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/private/'],
        },
      ],
      sitemap: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});