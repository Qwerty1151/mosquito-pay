const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@msgs'] = path.resolve(__dirname, 'messages');
    return config;
  },
};
module.exports = nextConfig;
