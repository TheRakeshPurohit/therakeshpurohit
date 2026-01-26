import Link from 'next/link';
import { socials, site } from '@/lib/content';

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-foreground">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              {social.label}
            </Link>
          ))}
        </div>
        <div className="text-xs text-muted-foreground">
          Designed & built with Next.js, Tailwind CSS, and a focus on developer experience.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
