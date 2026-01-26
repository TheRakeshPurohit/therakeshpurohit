import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Card } from '@/components/ui/card';

export default async function MDXContent({ content }: { content: string }) {
  const mdx = await MDXRemote({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, [remarkToc, { tight: true }]],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      },
    },
  });

  return (
    <Card className="p-8 prose max-w-none bg-background/70 border-border/60 shadow-crisp dark:prose-invert prose-headings:font-serif prose-a:text-primary">
      {mdx}
    </Card>
  );
}
