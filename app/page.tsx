import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import HeroOrb from '@/components/hero-orb';
import MetricCounter from '@/components/metric-counter';
import ProjectCarousel from '@/components/project-carousel';
import RoleSwitcher from '@/components/role-switcher';
import StructuredData from '@/components/structured-data';
import {
  focusAreas,
  impactMetrics,
  posts,
  projects,
  roleTracks,
  site,
  socials,
} from '@/lib/content';
import { defaultDescription, defaultKeywords, defaultOgImage, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: `${site.name} | ${site.role}`,
    description: defaultDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
    description: defaultDescription,
    images: [defaultOgImage],
  },
};

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-16 sm:px-6 lg:px-8">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${siteUrl}/#home`,
          url: siteUrl,
          name: `${site.name} | ${site.role}`,
          description: defaultDescription,
          isPartOf: {
            '@id': `${siteUrl}/#website`,
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${siteUrl}${defaultOgImage}`,
          },
        }}
      />
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <Badge variant="secondary" className="w-fit text-xs uppercase tracking-[0.2em]">
            {site.role}
          </Badge>
          <div className="space-y-5">
            <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Building frontend systems that scale with product velocity.
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {site.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild data-cursor="cta" data-cursor-label="View">
              <Link href="/projects">
                View projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read writing</Link>
            </Button>
            <Button variant="ghost" asChild data-cursor="cta" data-cursor-label="Talk">
              <Link href="https://linkedin.com/in/therakeshpurohit" target="_blank">
                Let&apos;s talk
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{site.tagline}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              >
                {social.label}
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <HeroOrb className="h-[320px] sm:h-[360px] lg:h-[420px]" />
          <Card className="border-border/60 bg-background/70 p-6 shadow-crisp backdrop-blur">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Impact snapshot
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {impactMetrics.slice(0, 4).map((metric) => (
                <MetricCounter
                  key={metric.value}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Focus Areas
          </p>
          <h2 className="font-serif text-3xl text-foreground">
            Senior-level frontend craft.
          </h2>
          <p className="text-muted-foreground">
            From AST tooling to UX-focused design systems, I build the foundations that keep teams shipping.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <Card
              key={area.title}
              className="group border-border/60 bg-background/70 p-5 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
              data-cursor="card"
            >
              <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Collaboration modes
          </p>
          <h2 className="font-serif text-3xl text-foreground">
            Pick the partnership that fits.
          </h2>
          <p className="text-muted-foreground">
            From platform engineering to product delivery, I tailor the workflow to the team&apos;s needs.
          </p>
        </div>
        <RoleSwitcher tracks={roleTracks} />
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Selected Projects
            </p>
            <h2 className="font-serif text-3xl text-foreground">Product-level build work.</h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/projects">View all</Link>
          </Button>
        </div>
        <ProjectCarousel projects={projects} />
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Writing
          </p>
          <h2 className="font-serif text-3xl text-foreground">Shipping what I learn.</h2>
          <p className="text-muted-foreground">
            Writing helps me document insights on performance, tooling, and frontend systems.
          </p>
        </div>
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card
                key={post.slug}
                className="border-border/60 bg-background/70 p-5 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
                data-cursor="card"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.summary}</p>
                </div>
              </Card>
            ))
          ) : (
            <Card className="border-border/60 bg-background/70 p-5 shadow-crisp">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Writing in progress
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  New insights are coming soon.
                </h3>
                <p className="text-sm text-muted-foreground">
                  I&apos;m crafting the next set of deep dives. Meanwhile, explore the latest projects.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/projects">View projects</Link>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-primary/10 p-8 text-center shadow-glow">
        <h2 className="font-serif text-3xl text-foreground">
          Let&apos;s build the next version of your frontend.
        </h2>
        <p className="mt-3 text-muted-foreground">
          I&apos;m open to collaborations, product consulting, and developer experience work.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild data-cursor="cta" data-cursor-label="Connect">
            <Link href="https://linkedin.com/in/therakeshpurohit" target="_blank">
              Start a conversation
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Explore experience</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
