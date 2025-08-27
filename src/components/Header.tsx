'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
const LOCALES = ["en","ru","pl","fr"] as const;

export function Header({ locale, labels, cta }:{ locale: string; labels: any; cta: string }) {
  const r = useRouter();
  async function setLang(l: string) {
    await fetch(`/api/lang?lang=${l}`, { method: "POST" });
    r.refresh();
  }
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(10,15,28,0.85)] backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-primary" aria-hidden="true"><path fill="currentColor" d="M12 2l7 4v12l-7 4l-7-4V6z"/></svg>
          <span className="font-semibold">Ultrasonic Repellent</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/pricing" className="hidden sm:inline text-slate-300 hover:text-white">{labels?.pricing || "Pricing"}</Link>
          <Link href="/privacy" className="hidden sm:inline text-slate-300 hover:text-white">{labels?.privacy || "Privacy"}</Link>
          <Link href="/terms" className="hidden sm:inline text-slate-300 hover:text-white">{labels?.terms || "Terms"}</Link>
          <Link href="/dashboard" className="hidden sm:inline text-slate-300 hover:text-white">{labels?.dashboard || "Dashboard"}</Link>
          <div className="relative">
            <select defaultValue={locale} onChange={e=>setLang(e.target.value)} className="btn-outline">
              {LOCALES.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
            </select>
          </div>
          <Link href="/pricing" className="btn-primary">{cta || "Buy Premium"}</Link>
        </nav>
      </div>
    </header>
  );
}
