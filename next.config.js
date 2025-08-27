const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  poweredByHeader: false,
  images: {
    formats: ['image/avif','image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
      ]
    }];
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }
};
module.exports = nextConfig;
