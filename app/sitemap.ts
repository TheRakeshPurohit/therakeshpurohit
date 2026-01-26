import type { MetadataRoute } from 'next';
import { posts } from '@/lib/content';
import { siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const safePosts = Array.isArray(posts) ? posts : [];
  const routes: MetadataRoute.Sitemap = ['', '/about', '/projects', '/blog'].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.7,
    })
  );

  const postEntries: MetadataRoute.Sitemap = safePosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...routes, ...postEntries];
}
