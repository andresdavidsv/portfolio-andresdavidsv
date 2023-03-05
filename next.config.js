/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const imageConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
};

module.exports = { nextConfig, imageConfig };
