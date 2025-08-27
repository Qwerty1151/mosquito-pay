const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  webpack: (config) => {
    // SVG как React-компоненты
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    // Алиасы проекта
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@msgs'] = path.resolve(__dirname, 'messages');
    return config;
  },
};

module.exports = nextConfig;
