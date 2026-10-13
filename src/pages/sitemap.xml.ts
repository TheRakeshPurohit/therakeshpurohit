import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/utils/content';

const BASE = site.siteUrl;

const STATIC_PAGES = [
  { path: '/',          priority: '1.0', changefreq: 'monthly' },
  { path: '/work/',     priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/', priority: '0.8', changefreq: 'monthly' },
  { path: '/writing/',  priority: '0.8', changefreq: 'weekly'  },
  { path: '/about/',    priority: '0.7', changefreq: 'monthly' },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('writing');
  const buildDate = new Date().toISOString().split('T')[0];

  const urls: string[] = [
    ...STATIC_PAGES.map(
      ({ path, priority, changefreq }) =>
        `  <url>\n    <loc>${BASE}${path}</loc>\n    <lastmod>${buildDate}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    ),
    ...posts.map((post) => {
      const lastmod = new Date(post.data.date).toISOString().split('T')[0];
      return `  <url>\n    <loc>${BASE}/writing/${post.id}/</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
    }),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
