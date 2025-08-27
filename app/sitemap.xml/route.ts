export async function GET() {
  const base = "https://mosquito.navilon.tech";
  const urls = ["","/pricing","/success","/fail","/privacy","/terms","/dashboard"];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(u=>`<url><loc>${base}${u}</loc></url>`).join("\n")}
  </urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
