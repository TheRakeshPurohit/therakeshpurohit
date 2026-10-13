import type { APIRoute } from 'astro';
import sharp from 'sharp';

// 180×180 amber square with "R" — generated at build time, served as static PNG.
export const GET: APIRoute = async () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="24" fill="#D4A853"/>
  <text x="40" y="140" font-size="120" font-family="Georgia,serif" fill="#111010" font-weight="700">R</text>
</svg>`;

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
