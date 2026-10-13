import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage, PAGE_OG_DATA } from '@/utils/og';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('writing');

  return [
    ...Object.entries(PAGE_OG_DATA).map(([slug, meta]) => ({
      params: { slug },
      props: meta,
    })),
    ...posts.map((p) => ({
      params: { slug: p.id },
      props: { title: p.data.title, subtitle: 'therakeshpurohit.com' },
    })),
  ];
};

export const GET: APIRoute = async ({ props }) => {
  const { title, subtitle } = props as { title: string; subtitle: string };
  const png = await generateOgImage({ title, subtitle });

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=604800',
    },
  });
};
