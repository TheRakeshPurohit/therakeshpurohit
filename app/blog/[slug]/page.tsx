import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StructuredData from '@/components/structured-data';
import { posts, site } from '@/lib/content';
import { defaultOgImage, siteUrl } from '@/lib/seo';
import MDXContent from './mdx-content';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const safePosts = Array.isArray(posts) ? posts : [];
const fallbackPost = {
  slug: 'coming-soon',
  title: 'Writing in progress',
  summary:
    'A living knowledge base on performance, tooling, and frontend craft is on the way.',
  date: '2024-01-01',
  readTime: '2 min read',
  tags: ['Writing', 'Frontend'],
  content: `
# Writing in progress

I’m curating the next set of deep dives on performance, tooling, and scalable frontend systems.

In the meantime, explore the projects page for real-world build work and experiments.
`,
};

export async function generateStaticParams(_props: { params: { slug?: string } }) {
  if (safePosts.length > 0) {
    return safePosts.map((post) => ({ slug: post.slug }));
  }
  return [{ slug: fallbackPost.slug }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = safePosts.find((entry) => entry.slug === slug) ?? (slug === fallbackPost.slug ? fallbackPost : null);

  if (!post) {
    return {};
  }

  const description = post?.summary;
  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description,
      publishedTime: post.date,
      authors: [site.name],
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [defaultOgImage],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = safePosts.find((entry) => entry.slug === slug) ?? (slug === fallbackPost.slug ? fallbackPost : null);

  if (!post) {
    notFound();
  }

  const related =
    post.slug === fallbackPost.slug
      ? []
      : safePosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);
  const wordCount = post?.content.trim().split(/\s+/).length;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          '@id': `${siteUrl}/blog/${post?.slug}#post`,
          headline: post?.title,
          description: post?.summary,
          datePublished: post?.date,
          dateModified: post?.date,
          wordCount,
          inLanguage: 'en',
          author: {
            '@id': `${siteUrl}/#person`,
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/${post?.slug}`,
          },
          image: `${siteUrl}${defaultOgImage}`,
          keywords: post?.tags.join(', '),
        }}
      />
      <Button variant="ghost" asChild className="w-fit">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to writing
        </Link>
      </Button>

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {post?.date} · {post?.readTime}
        </p>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          {post?.title}
        </h1>
        <p className="max-w-2xl text-muted-foreground">{post?.summary}</p>
      </section>

      <MDXContent content={post.content} />

      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-foreground">Continue reading</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((entry) => (
            <Card key={entry.slug} className="border-border/60 bg-background/70 p-5 shadow-crisp">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {entry.date} · {entry.readTime}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                <Link href={`/blog/${entry.slug}`} className="hover:text-primary transition-colors">
                  {entry.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{entry.summary}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
