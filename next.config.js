/** @type {import('next').NextConfig} */
const isFastBuild = process.env.NEXT_FAST_BUILD === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: isFastBuild,
  },
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
