import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack e-commerce platform built with Next.js and Supabase.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Two',
    description: 'Real-time chat application using WebSocket and React.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?q=80&w=2674&auto=format&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Three',
    description: 'AI-powered content management system.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-2">
            A collection of my recent work and side projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="flex gap-4 mt-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}