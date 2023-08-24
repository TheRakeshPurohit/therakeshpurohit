// mdx-renderer.tsx
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "./mdx-components";

const MDXRenderer = ({ content }) => (
  <MDXProvider components={MDXComponents}>{content}</MDXProvider>
);

export default MDXRenderer;
