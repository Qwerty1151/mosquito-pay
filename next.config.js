const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { optimizeCss: false }, // пофикс криттерса
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@msgs'] = path.resolve(__dirname, 'messages');
    return config;
  },
};
module.exports = nextConfig;
