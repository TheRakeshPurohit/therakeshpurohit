import type { Metadata } from 'next';
import Link from 'next/link';
import ExperienceTimeline from '@/components/experience-timeline';
import MetricCounter from '@/components/metric-counter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StructuredData from '@/components/structured-data';
import { credentials, experience, impactMetrics, skills, site } from '@/lib/content';
import { defaultOgImage, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior frontend engineer specializing in performance, design systems, and developer tooling.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'profile',
    url: `${siteUrl}/about`,
    title: `About | ${site.name}`,
    description:
      'Senior frontend engineer specializing in performance, design systems, and developer tooling.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.name} about`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${site.name}`,
    description:
      'Senior frontend engineer specializing in performance, design systems, and developer tooling.',
    images: [defaultOgImage],
  },
};

export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${siteUrl}/about#about`,
          url: `${siteUrl}/about`,
          name: `About ${site.name}`,
          description:
            'Senior frontend engineer specializing in performance, design systems, and developer tooling.',
          isPartOf: {
            '@id': `${siteUrl}/#website`,
          },
          mainEntity: {
            '@id': `${siteUrl}/#person`,
          },
        }}
      />
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          About
        </p>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          {site.name} — {site.role}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{site.summary}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects">View case studies</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read writing</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((metric) => (
          <Card
            key={metric.value}
            className="border-border/60 bg-background/70 p-5 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
            data-cursor="card"
          >
            <MetricCounter value={metric.value} label={metric.label} />
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Experience
          </p>
          <h2 className="font-serif text-3xl text-foreground">Build history.</h2>
          <p className="text-muted-foreground">
            A mix of product engineering, developer tools, and frontend platforms.
          </p>
        </div>
        <div className="space-y-5">
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Skills
          </p>
          <h2 className="font-serif text-3xl text-foreground">Toolbelt.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="rounded-full border border-border/60 bg-background/70 text-foreground shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
              data-cursor="card"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Credentials
          </p>
          <h2 className="font-serif text-3xl text-foreground">
            Recognition, writing, and open source.
          </h2>
          <p className="text-muted-foreground">
            Awards, certifications, and community work that show up in how I build.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {credentials.map((group) => (
            <Card
              key={group.title}
              className="border-border/60 bg-background/70 p-5 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
              data-cursor="card"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item.title} className="space-y-1">
                    {item.href ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <p className="font-medium text-foreground">{item.title}</p>
                    )}
                    {item.description ? (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    ) : null}
                    {item.meta ? (
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {item.meta}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
