// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
export default defineConfig({ site: 'https://polklusbedrijf.nl', integrations: [sitemap(), alpinejs(), mdx()] });