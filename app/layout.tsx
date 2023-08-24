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
        className={`${firaCode.className} flex flex-col h-screen justify-between`}
      >
        <Header />
        <main className="flex flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
