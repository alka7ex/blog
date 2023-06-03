/** @type {import('next').NextConfig} */
const nextConfig = {images: {
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
}

module.exports = nextConfig
