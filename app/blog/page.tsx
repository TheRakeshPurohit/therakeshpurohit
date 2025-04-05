import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import MDXContent from "./[slug]/mdx-content"

// Sample blog posts data - in a real app, this would come from a CMS or API
const posts = {
  'building-modern-web-app': {
    title: 'Building a Modern Web Application with Next.js 13',
    content: `
# Building a Modern Web Application with Next.js 13

## Table of Contents

## Introduction

Next.js 13 introduces revolutionary features that change how we build web applications. In this comprehensive guide, we'll explore the latest capabilities and best practices.

## Server Components

React Server Components represent a paradigm shift in how we think about component rendering. They allow us to:

- Reduce client-side JavaScript
- Improve initial page load
- Better SEO performance

## Data Fetching

Next.js 13 simplifies data fetching with new patterns:

\`\`\`typescript
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}
\`\`\`

## Routing

The new app directory provides:

- Nested layouts
- Route groups
- Loading and error states
- Server-side rendering

## Conclusion

Next.js 13 represents a significant step forward in web development, offering improved performance, better developer experience, and more powerful features.

## Related Posts

- Understanding TypeScript
- React Best Practices
- Modern CSS Techniques
`,
    date: '2024-03-15',
    readTime: '5 min read',
    author: 'John Doe',
  },
  'power-of-server-components': {
    title: 'The Power of Server Components in React',
    content: 'Content for server components article...',
    date: '2024-03-14',
    readTime: '4 min read',
    author: 'Jane Smith',
  },
  'mastering-typescript': {
    title: 'Mastering TypeScript: Best Practices',
    content: 'Content for TypeScript article...',
    date: '2024-03-13',
    readTime: '6 min read',
    author: 'Alex Johnson',
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          <div>
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="flex items-center space-x-4 mt-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <MDXContent content={post.content} />

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 hover:bg-muted/50 transition-colors">
                <Link href="/blog/power-of-server-components">
                  <h3 className="font-semibold mb-2">The Power of Server Components in React</h3>
                  <p className="text-muted-foreground">Exploring the benefits and use cases of React Server Components.</p>
                </Link>
              </Card>
              <Card className="p-6 hover:bg-muted/50 transition-colors">
                <Link href="/blog/mastering-typescript">
                  <h3 className="font-semibold mb-2">Mastering TypeScript: Best Practices</h3>
                  <p className="text-muted-foreground">Essential TypeScript patterns and practices for writing maintainable code.</p>
                </Link>
              </Card>
            </div>
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <nav className="space-y-2 text-sm">
                <Link href="#introduction" className="block text-muted-foreground hover:text-primary">
                  Introduction
                </Link>
                <Link href="#server-components" className="block text-muted-foreground hover:text-primary">
                  Server Components
                </Link>
                <Link href="#data-fetching" className="block text-muted-foreground hover:text-primary">
                  Data Fetching
                </Link>
                <Link href="#routing" className="block text-muted-foreground hover:text-primary">
                  Routing
                </Link>
                <Link href="#conclusion" className="block text-muted-foreground hover:text-primary">
                  Conclusion
                </Link>
                <Link href="#related-posts" className="block text-muted-foreground hover:text-primary">
                  Related Posts
                </Link>
              </nav>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}