import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
        404 · Page not found
      </p>
      <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
        This page drifted off the grid.
      </h1>
      <p className="max-w-xl text-muted-foreground">
        The route you tried doesn&apos;t exist. Let&apos;s get you back to the work that matters.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild data-cursor="cta" data-cursor-label="Home">
          <Link href="/">
            Go home
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">View projects</Link>
        </Button>
      </div>
    </div>
  );
}
