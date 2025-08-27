const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    // .svg?component -> React-компонент через SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /component/, // использовать как компонент: import Icon from './icon.svg?component'
      use: ['@svgr/webpack'],
    });
    // Обычные .svg (без ?component) оставляем дефолтными — будут URL (для <Image src="...">)
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@msgs'] = path.resolve(__dirname, 'messages');
    return config;
  },
};

module.exports = nextConfig;
