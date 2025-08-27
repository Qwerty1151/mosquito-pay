import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const body = await req.json().catch(()=>({}));
  const lang = searchParams.get("lang") || body?.lang;
  if (!lang) return NextResponse.json({ ok:false }, { status: 400 });
  const res = NextResponse.json({ ok:true });
  res.cookies.set("lang", String(lang), { path: "/", httpOnly: false, sameSite: "lax", maxAge: 60*60*24*365 });
  return res;
}
