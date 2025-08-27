const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // SVG как React-компоненты
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    // Алиасы
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@msgs'] = path.resolve(__dirname, 'messages');
    return config;
  },
};

module.exports = nextConfig;
