/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  poweredByHeader: false,
  images: { formats: ['image/avif','image/webp'], remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
    ] }];
  }
};
module.exports = nextConfig;
