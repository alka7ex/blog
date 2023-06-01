/** @type {import('next').NextConfig} */
const nextConfig = {}

/** module.exports = nextConfig */

module.exports = {
    images: {
      formats: ['image/webp'],
      domains: ['strapi.farhienza-haikal.my.id'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'strapi.farhienza-haikal.my.id',
          port: '443',
          pathname: '/upload/**',
        },
      ],
    },
  };
