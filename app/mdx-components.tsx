import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export default function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  console.log("comps", components);
  return {
    ...components,
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => (
      <h1 style={{ fontSize: "200px", color: "red" }}>{props.children}</h1>
    ),
    p: (props) => (
      <p
        style={{
          fontSize: "200px",
          color: "red",
          backgroundColor: "lightblue",
        }}
      >
        {props.children}
      </p>
    ),
  };
}
