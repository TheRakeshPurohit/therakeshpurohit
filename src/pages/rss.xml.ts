import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/utils/content';

export async function GET(context: APIContext) {
  const posts = (await getCollection('writing')).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: `${site.name} · Writing`,
    description: site.summary,
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
