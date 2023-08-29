import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Rakesh Purohit",
  description: "The Rakesh Purohit | Software Engineer",
  keywords: [
    "rakesh",
    "purohit",
    "rakesh purohit",
    "TheRakeshPurohit",
    "ReactJS",
    "Frontend",
    "Software Engineer",
    "Surat",
    "India",
    "AST",
    "GitHub",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} flex flex-col lg:h-screen lg:w-full lg:justify-between lg:cursor-nw-resize lg:overscroll-none`}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
