// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://docs.0xbasinas.dev",
  prefetch: true,
  integrations: [starlight({
      title: '0xbasinas docs',
      customCss: [
          '@fontsource/jetbrains-mono/400.css',
          '@fontsource/jetbrains-mono/600.css',
          './src/styles/global.css',
      ],
      social: [
        {  icon: "external",
           label: 'Links',
           href: 'https://links.0xbasinas.dev',
        },
      ],
      head: [
        {
          tag: 'script',
          content: 'document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".social-icons a").forEach(link=>{link.target="_blank";link.rel="noopener noreferrer"})});',
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
      sidebar: [
          {
              label: 'About',
              autogenerate: { directory: 'about' },
          },
      ],
  }), sitemap()],

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});