import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Project } from '@/lib/content';
import { cn } from '@/lib/utils';

type ProjectCarouselProps = {
  projects: Project[];
  className?: string;
};

const ProjectCarousel = ({ projects, className }: ProjectCarouselProps) => {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <div className="inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Scroll or drag to explore the builds.</span>
        </div>
        <span>{projects.length} featured</span>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background/90 to-transparent" />
        <div
          className="flex gap-4 overflow-x-auto pb-4 pr-6 snap-x snap-mandatory scroll-smooth"
          data-cursor="drag"
          data-cursor-label="Scroll"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="min-w-[80%] snap-start sm:min-w-[60%] lg:min-w-[32%]"
            >
              <Card
                className="group h-full overflow-hidden border-border/60 bg-background/70 shadow-crisp transition hover:-translate-y-1 hover:shadow-glow"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
