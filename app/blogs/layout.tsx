import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Rakesh Purohit Blogs ",
  description: "This is where The Rakesh Purohit publishes all his blogs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
