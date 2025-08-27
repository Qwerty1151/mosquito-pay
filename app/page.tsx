import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card";
import { detectLocale, getMessages } from "@/lib/i18n";

export default async function Page() {
  const t = await getMessages(detectLocale());
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_20%_0%,rgba(0,212,255,0.20),transparent_60%),radial-gradient(70%_50%_at_90%_10%,rgba(99,102,241,0.20),transparent_60%)]" />
        <div className="container relative py-14 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="badge mb-4"><span aria-hidden>🦟</span> Ultrasonic Mosquito Repellent</div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{t.hero.title}</h1>
            <p className="mt-4 text-lg text-slate-300">{t.hero.subtitle}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://chromewebstore.google.com/detail/ultrasonic-mosquito-repel/" className="btn-ghost">{t.hero.ctaDownload}</a>
              <Link href="/pricing" className="btn-primary">{t.hero.ctaBuy}</Link>
            </div>
            <p className="mt-3 text-sm text-slate-400">No tracking. No ads. Email + license only.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-slate-400">
              <div className="card py-3 text-center">No chemicals</div>
              <div className="card py-3 text-center">Runs in background</div>
              <div className="card py-3 text-center">One-click</div>
            </div>
          </div>
          <div className="relative">
            <Image src="/images/hero-ui.svg" alt="Premium controls" width={960} height={720} className="rounded-3xl border border-border shadow-card" />
          </div>
        </div>
      </section>
    </>
  );
}
