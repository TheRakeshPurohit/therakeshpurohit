import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, TwitterIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Rakesh Purohit</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Frontend developer passionate about building beautiful and functional web applications.
          Specialized in React and Next.js.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">About Me</Link>
          </Button>
        </div>
        <div className="flex justify-center space-x-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/therakeshpurohit" target="_blank">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/therakeshpurohit" target="_blank">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/irakeshpurohit" target="_blank">
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}