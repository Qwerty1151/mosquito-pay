import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const locales = ["en","ru","pl","fr"];
function getPreferredLocale(acceptLang: string | null) {
  if (!acceptLang) return "en";
  const parts = acceptLang.toLowerCase().split(",");
  for (const part of parts) {
    const code = part.split(";")[0].trim();
    const base = code.split("-")[0];
    if (locales.includes(base)) return base;
  }
  return "en";
}
export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const cookie = request.cookies.get("lang")?.value;
  if (!cookie) {
    const preferred = getPreferredLocale(request.headers.get("accept-language"));
    res.cookies.set("lang", preferred, { path: "/", maxAge: 60*60*24*365 });
  }
  return res;
}
