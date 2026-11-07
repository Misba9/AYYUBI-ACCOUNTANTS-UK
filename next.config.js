const fs = require('fs');
const path = require('path');

// Homepage is the static index.html. Next.js does not serve a root index.html,
// so copy it into public and rewrite "/" to that file before App Router routes.
fs.copyFileSync(
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'public', 'legacy.html')
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/legacy.html' },
      ],
    };
  },
};

module.exports = nextConfig;
