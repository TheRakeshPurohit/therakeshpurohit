import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const posts = [
  {
    title: 'Building a Modern Web Application with Next.js 13',
    description: 'Learn how to leverage the latest features in Next.js 13 to build scalable web applications.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    slug: 'building-modern-web-app',
  },
  {
    title: 'The Power of Server Components in React',
    description: 'Exploring the benefits and use cases of React Server Components.',
    date: 'March 10, 2024',
    readTime: '4 min read',
    slug: 'power-of-server-components',
  },
  {
    title: 'Mastering TypeScript: Best Practices',
    description: 'Essential TypeScript patterns and practices for writing maintainable code.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    slug: 'mastering-typescript',
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="text-muted-foreground mt-2">
            Thoughts, tutorials, and insights about web development.
          </p>
        </div>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}