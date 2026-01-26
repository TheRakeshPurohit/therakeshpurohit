import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/custom-cursor';
import StructuredData from '@/components/structured-data';
import { SoundProvider } from '@/components/sound-provider';
import { ThemeProvider } from '@/components/theme-provider';
import SiteFooter from '@/components/site-footer';
import { defaultDescription, defaultKeywords, defaultOgImage, defaultTitle, sameAsLinks, siteUrl } from '@/lib/seo';
import { site } from '@/lib/content';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: site.name,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.name} portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            <div className="relative min-h-screen text-foreground">
              <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.2),_transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.04),_transparent_45%,_rgba(2,132,199,0.06))] dark:bg-[linear-gradient(120deg,_rgba(15,23,42,0.35),_transparent_45%,_rgba(15,23,42,0.6))]" />
                <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(14,116,144,0.22),_transparent_60%)] blur-3xl animate-float" />
                <div className="absolute bottom-[-120px] left-[-5%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,0.2),_transparent_65%)] blur-3xl animate-float" />
                <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(15,23,42,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.2)_1px,transparent_1px)] [background-size:120px_120px]" />
              </div>
              <Navbar />
              <main>{children}</main>
              <SiteFooter />
              <CustomCursor />
              <StructuredData
                data={{
                  '@context': 'https://schema.org',
                  '@graph': [
                    {
                      '@type': 'Person',
                      '@id': `${siteUrl}/#person`,
                      name: site.name,
                      url: siteUrl,
                      jobTitle: site.role,
                      description: site.summary,
                      sameAs: sameAsLinks,
                    },
                    {
                      '@type': 'WebSite',
                      '@id': `${siteUrl}/#website`,
                      name: site.name,
                      url: siteUrl,
                      description: site.summary,
                      inLanguage: 'en',
                      author: {
                        '@id': `${siteUrl}/#person`,
                      },
                    },
                  ],
                }}
              />
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
