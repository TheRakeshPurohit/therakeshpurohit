import type { Metadata } from 'next';
import ProjectGallery from '@/components/project-gallery';
import StructuredData from '@/components/structured-data';
import { projects, site } from '@/lib/content';
import { defaultOgImage, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected frontend builds, tooling experiments, and product-level interfaces.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/projects`,
    title: `Projects | ${site.name}`,
    description:
      'Selected frontend builds, tooling experiments, and product-level interfaces.',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.name} projects`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${site.name}`,
    description:
      'Selected frontend builds, tooling experiments, and product-level interfaces.',
    images: [defaultOgImage],
  },
};

export default function Projects() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${siteUrl}/projects#projects`,
          url: `${siteUrl}/projects`,
          name: `Projects | ${site.name}`,
          description:
            'Selected frontend builds, tooling experiments, and product-level interfaces.',
          isPartOf: {
            '@id': `${siteUrl}/#website`,
          },
          hasPart: projects.map((project) => ({
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            url: project.demo,
            codeRepository: project.github,
          })),
        }}
      />
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Projects
        </p>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
          Selected builds and side projects.
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          A mix of production-grade tools, extension work, and frontend experiments.
        </p>
      </section>

      <section>
        <ProjectGallery projects={projects} />
      </section>
    </div>
  );
}
