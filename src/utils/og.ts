import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import satori from 'satori';
import sharp from 'sharp';

type OgData = { title: string; subtitle: string };

const require = createRequire(import.meta.url);

let cachedFonts: Array<{ name: string; data: ArrayBuffer; weight: 400 | 700; style: 'normal' }> | null = null;

function getFonts() {
  if (cachedFonts) return cachedFonts;
  const base = require.resolve('@fontsource/inter/package.json').replace('package.json', 'files/');
  const rBuf = readFileSync(base + 'inter-latin-400-normal.woff');
  const bBuf = readFileSync(base + 'inter-latin-700-normal.woff');
  // Slice to avoid shared ArrayBuffer issues
  const regular = rBuf.buffer.slice(rBuf.byteOffset, rBuf.byteOffset + rBuf.byteLength) as ArrayBuffer;
  const bold    = bBuf.buffer.slice(bBuf.byteOffset, bBuf.byteOffset + bBuf.byteLength) as ArrayBuffer;
  cachedFonts = [
    { name: 'Inter', data: regular, weight: 400, style: 'normal' },
    { name: 'Inter', data: bold,    weight: 700, style: 'normal' },
  ];
  return cachedFonts;
}

export async function generateOgImage({ title, subtitle }: OgData): Promise<Buffer> {
  const fonts = getFonts();

  const tree = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'flex-end' as const,
        alignItems: 'flex-start' as const,
        padding: '60px 72px',
        backgroundColor: '#111010',
        position: 'relative' as const,
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute' as const,
              top: '52px',
              left: '72px',
              fontSize: '16px',
              fontWeight: 400,
              color: '#D4A853',
              letterSpacing: '0.18em',
              textTransform: 'uppercase' as const,
            },
            children: 'therakeshpurohit.com',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: title.length > 35 ? '50px' : '68px',
              fontWeight: 700,
              color: '#F2EEE4',
              lineHeight: 1.1,
              marginBottom: '18px',
              maxWidth: '960px',
            },
            children: title,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: '24px',
              fontWeight: 400,
              color: '#9A9087',
            },
            children: subtitle,
          },
        },
      ],
    },
  };

  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
}

export const PAGE_OG_DATA: Record<string, OgData> = {
  home:     { title: 'Rakesh Purohit',  subtitle: 'DevRel Engineer at Rocket' },
  about:    { title: 'About',           subtitle: 'Rakesh Purohit · Surat → Bengaluru' },
  work:     { title: 'Work',            subtitle: 'Articles, campaigns, social, video' },
  projects: { title: 'Projects',        subtitle: 'Open source tools and experiments' },
  writing:  { title: 'Writing',         subtitle: '144 bylines and counting' },
  '404':    { title: '404',             subtitle: 'Page not found · therakeshpurohit.com' },
};
