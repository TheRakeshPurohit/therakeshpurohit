import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StructuredData from '@/components/structured-data';
import { posts } from '@/lib/content';
import { defaultOgImage, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const safePosts = Array.isArray(posts) ? posts : [];

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Essays on frontend performance, tooling, and scalable UI systems.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/blog`,
    title: 'Writing',
    description:
      'Essays on frontend performance, tooling, and scalable UI systems.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Writing by Rakesh Purohit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing',
    description:
      'Essays on frontend performance, tooling, and scalable UI systems.',
    images: [defaultOgImage],
  },
};

export default function Blog() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': `${siteUrl}/blog#blog`,
          url: `${siteUrl}/blog`,
          name: 'Writing',
          description:
            'Essays on frontend performance, tooling, and scalable UI systems.',
          isPartOf: {
            '@id': `${siteUrl}/#website`,
          },
          ...(safePosts.length > 0
            ? {
                blogPost: safePosts.map((post) => ({
                  '@type': 'BlogPosting',
                  headline: post.title,
                  datePublished: post.date,
                  dateModified: post.date,
                  url: `${siteUrl}/blog/${post.slug}`,
                })),
              }
            : {}),
        }}
      />
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Writing
        </p>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          Notes on tooling, performance, and frontend craft.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A curated set of deep dives from the work behind frontend platforms.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {safePosts.length > 0 ? (
          safePosts.map((post) => (
            <Card
              key={post.slug}
              className="border-border/60 bg-background/70 p-6 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
              data-cursor="card"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {post.date} · {post.readTime}
                </p>
                <h2 className="text-xl font-semibold text-foreground">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground">{post.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="border-border/60 bg-background/70 p-6 shadow-crisp">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                No posts yet
              </p>
              <h2 className="text-xl font-semibold text-foreground">
                Fresh writing is on the way.
              </h2>
              <p className="text-sm text-muted-foreground">
                Until then, explore the latest frontend builds and experiments.
              </p>
              <Button variant="outline" asChild>
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
          </Card>
        )}
      </section>
    </div>
  );
}
