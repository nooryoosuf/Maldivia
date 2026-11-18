import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '/Maldivia';

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: repoBasePath,
        assetPrefix: `${repoBasePath}/`,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'thumb.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  ...(isGithubPages
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
                },
                {
                  key: 'X-Frame-Options',
                  value: 'DENY',
                },
                {
                  key: 'Referrer-Policy',
                  value: 'strict-origin-when-cross-origin',
                },
                {
                  key: 'Permissions-Policy',
                  value: 'camera=(), microphone=(), geolocation=()',
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
