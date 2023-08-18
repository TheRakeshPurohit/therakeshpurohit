import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Rakesh Purohit",
  description: "This place is the online presence of The Rakesh Purohit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
