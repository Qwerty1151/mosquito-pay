"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const locales = ["en","ru","pl","fr"] as const;

export function Header() {
  const [lang, setLang] = useState<string>("en");
  useEffect(() => {
    const m = document.cookie.match(/(?:^|; )lang=([^;]+)/);
    if (m) setLang(decodeURIComponent(m[1]));
    else {
      const nav = navigator.language.toLowerCase();
      const found = (locales as readonly string[]).find(l => nav.startsWith(l));
      setLang(found || "en");
    }
  }, []);
  async function switchLang(l: string) {
    try { await fetch(`/api/lang?lang=${l}`, { method: "POST" }); setLang(l); location.reload(); } catch {}
  }
  return (
    <header className="w-full border-b border-border bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" className="text-primary" aria-hidden="true"><path fill="currentColor" d="M12 2l7 4v12l-7 4l-7-4V6z"/></svg>
          <span className="font-semibold">Ultrasonic Repellent</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/pricing" className="hidden sm:inline text-slate-700 hover:text-slate-900">Pricing</Link>
          <Link href="/privacy" className="hidden sm:inline text-slate-700 hover:text-slate-900">Privacy</Link>
          <Link href="/terms" className="hidden sm:inline text-slate-700 hover:text-slate-900">Terms</Link>
          <Link href="/dashboard" className="hidden sm:inline text-slate-700 hover:text-slate-900">Dashboard</Link>
          <button className="btn-outline" onClick={() => switchLang(lang === "en" ? "ru" : lang === "ru" ? "pl" : lang === "pl" ? "fr" : "en")} aria-label="Switch language">
            {lang.toUpperCase()}
          </button>
          <Link href="/pricing" className="btn-primary">Buy Premium</Link>
        </nav>
      </div>
    </header>
  );
}
