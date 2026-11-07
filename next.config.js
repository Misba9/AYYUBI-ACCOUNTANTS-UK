/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./index.html'],
    },
  },
};

module.exports = nextConfig;
