export async function GET() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://mosquito.navilon.tech";
  const urls = ["","/pricing","/success","/fail","/privacy","/terms","/dashboard"].map(p=>`<url><loc>${base}${p}</loc></url>`).join("");
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
