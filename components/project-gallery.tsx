'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Project } from '@/lib/content';
import { cn } from '@/lib/utils';

type ProjectGalleryProps = {
  projects: Project[];
  className?: string;
};

const ProjectGallery = ({ projects, className }: ProjectGalleryProps) => {
  const tags = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => all.add(tag));
    });
    return Array.from(all);
  }, [projects]);

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        counts[tag] = (counts[tag] ?? 0) + 1;
      });
    });
    return counts;
  }, [projects]);

  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeTag === 'All') {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Filter by focus
          </p>
          <h2 className="font-serif text-2xl text-foreground">
            Explore projects by craft area.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag('All')}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition',
              activeTag === 'All'
                ? 'border-primary/40 bg-primary/10 text-foreground shadow-glow'
                : 'border-border/60 bg-background/70 text-muted-foreground hover:text-foreground'
            )}
            aria-pressed={activeTag === 'All'}
            data-sound-click="select"
          >
            All
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
              {projects.length}
            </span>
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition',
                activeTag === tag
                  ? 'border-primary/40 bg-primary/10 text-foreground shadow-glow'
                  : 'border-border/60 bg-background/70 text-muted-foreground hover:text-foreground'
              )}
              aria-pressed={activeTag === tag}
              data-sound-click="select"
            >
              {tag}
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                {tagCounts[tag]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>
            Showing {filteredProjects.length} of {projects.length} builds.
          </span>
        </div>
        <span className="hidden sm:inline">Tap a tag to curate.</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.title}
            className="group overflow-hidden border-border/60 bg-background/70 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
            data-cursor="card"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="space-y-4 p-5">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
