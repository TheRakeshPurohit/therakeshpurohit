'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import SoundToggle from '@/components/sound-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="font-serif text-xl">Rakesh Purohit</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
            data-cursor="cta"
            data-cursor-label="Talk"
          >
            <Link href="https://linkedin.com/in/therakeshpurohit" target="_blank">
              Let&apos;s talk
            </Link>
          </Button>
          <SoundToggle />
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full justify-center"
              data-cursor="cta"
              data-cursor-label="Talk"
            >
              <Link href="https://linkedin.com/in/therakeshpurohit" target="_blank">
                Let&apos;s talk
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
