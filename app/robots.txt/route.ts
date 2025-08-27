export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${process.env.NEXT_PUBLIC_BASE_URL || "https://mosquito.navilon.tech"}/sitemap.xml`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
