import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Live Link Embedded Preview',
    description: 'A complete frontend solution for link embedded preview.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    github: 'https://github.com/TheRakeshPurohit/live-link-embedded-preview',
    demo: 'https://live-link-embedded-preview.vercel.app/',
  },
  {
    title: 'VSCode-ReactTestGen',
    description: 'ReactComponent TestCase Generator for Visual Studio Code',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d9?q=80&w=2674&auto=format&fit=crop',
    github: 'https://github.com/TheRakeshPurohit/VSCode-ReactTestGen',
    demo: 'https://marketplace.visualstudio.com/items?itemName=TheRakeshPurohit.reacttestgen',
  },
  {
    title: 'Water Reminder Chrome extension (Dev Edition)',
    description: 'Water Reminder is an extension which will force you to drink water after every hour you spend on your screen.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
    github: 'https://github.com/TheRakeshPurohit/water-reminder',
    demo: 'https://github.com/TheRakeshPurohit/water-reminder',
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