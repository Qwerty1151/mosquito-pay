import { NextResponse } from "next/server";
const supported = ["en","ru","pl","fr"] as const;
export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang") || "en";
  const res = NextResponse.json({ ok: true });
  if ((supported as readonly string[]).includes(lang)) {
    res.cookies.set("lang", lang, { path: "/", httpOnly: false, sameSite: "lax", maxAge: 60*60*24*365 });
  }
  return res;
}
