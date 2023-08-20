"use client";
import Revision from "./revision-for-a-web-developer.mdx";

export default function Page() {
  console.log("Revision", Revision);
  return (
    <article className="flex flex-col flex-grow">
      <Revision />
    </article>
  );
}
