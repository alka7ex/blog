/** @type {import('next').NextConfig} */
const nextConfig = {}

/** module.exports = nextConfig */

module.exports = {
    images: {
      formats: ['image/webp'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'strapi.farhienza-haikal.my.id',
          port: '',
          pathname: '/upload/**',
        },
      ],
    },
  };
