import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container py-12 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="badge mb-4"><span aria-hidden>🦟</span> Ultrasonic Mosquito Repellent</div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-deep">
              Premium protection that runs in the background
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Unlock stronger presets, schedules and continuous background mode. Pay securely with Payeer, receive a license key instantly.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://chromewebstore.google.com/detail/ultrasonic-mosquito-repel/" className="btn-outline" aria-label="Download from Chrome Web Store">Download Extension</a>
              <Link href="/pricing" className="btn-primary">Buy Premium</Link>
            </div>
            <p className="mt-3 text-sm text-slate-500">No tracking. No ads. Email + license only.</p>
          </div>
          <div className="relative">
            <Image src="/images/hero-ui.svg" alt="Premium controls preview" width={960} height={720} className="rounded-3xl border border-border shadow-card" />
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <Card className="p-4">
                <div className="text-sm text-slate-600">Background</div>
                <div className="mt-1 font-semibold">Enabled</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 lg:py-20">
        <h2 className="text-3xl font-bold text-deep text-center">Why Premium</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Stronger ultrasonic range","Extended frequency presets engineered to repel more species."],
            ["Background protection","Runs even when popup is closed using safe alarm timers."],
            ["Smart schedules","Quiet at night, active at dusk — set and forget."],
            ["License for all your profiles","Use your key across devices under fair-use policy."],
            ["No tracking, no ads","We store email and license only. Payments via Payeer."],
            ["One-click activation","Paste the key — the app verifies it via secure API."]
          ].map(([t,d],i)=>(
            <Card key={i}>
              <div className="text-deep font-semibold">{t}</div>
              <p className="mt-2 text-slate-600">{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container py-12 lg:py-20">
          <h2 className="text-3xl font-bold text-deep text-center">How it works</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Install the free extension",
              "Choose a frequency and test",
              "Go Premium for background & schedules",
              "Activate with the email license key"
            ].map((s,i)=>(
              <Card key={i}>
                <div className="text-sm text-slate-500">Step {i+1}</div>
                <div className="mt-2 font-semibold text-deep">{s}</div>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      <section className="container py-12 lg:py-20">
        <h2 className="text-3xl font-bold text-deep text-center">FAQ</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Does ultrasonic sound really repel mosquitoes?","Effect may vary across species and environments. We provide safe audio emissions; Premium adds more presets so you can test what works best."],
            ["What do I get after paying?","A license key is generated and delivered to your email. Paste it in the extension to unlock Premium."],
            ["Where is my data stored?","We store your email and license in Vercel KV. No card data touches our servers."],
            ["Refund policy?","Digital licenses are generally non-refundable. If you paid by mistake and didn’t activate the key, contact support."]
          ].map(([q,a],i)=>(
            <Card key={i}>
              <div className="font-semibold text-deep">{q}</div>
              <p className="mt-2 text-slate-600">{a}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-deep-blue text-white">
        <div className="container py-12 lg:py-16 flex items-center justify-between gap-6 flex-col md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">Ready to keep bugs away?</h3>
            <p className="mt-2 text-white/80">Buy Premium now, get your license instantly by email.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/pricing" className="btn-primary bg-white text-deep hover:opacity-90">Buy Premium</Link>
            <a href="https://chromewebstore.google.com/detail/ultrasonic-mosquito-repel/" className="btn-ghost text-white border-white">Download</a>
          </div>
        </div>
      </section>
    </>
  );
}
