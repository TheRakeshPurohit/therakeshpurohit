'use client';

import { useEffect, useState } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Card } from '@/components/ui/card';

export default function MDXContent({ content }: { content: string }) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const compileMdx = async () => {
      const compiled = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            [remarkToc, { tight: true }],
          ],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
        },
      });
      setMdxSource(compiled);
    };

    compileMdx();
  }, [content]);

  return (
    <Card className="p-8 prose dark:prose-invert max-w-none">
      {mdxSource && <MDXRemote {...mdxSource} />}
    </Card>
  );
}