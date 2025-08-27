import Link from "next/link";
import { detectLocale, getMessages } from "@/lib/i18n";
export default async function PricingPage() {
  const t = await getMessages(detectLocale());
  return (
    <div className="container py-14 lg:py-20">
      <div className="max-w-xl mx-auto card p-6">
        <h1 className="text-3xl font-bold">{t.pricing.title}</h1>
        <p className="mt-2 text-slate-300">Pay with Payeer. License key will be sent to your email.</p>
        <form className="mt-6 space-y-4" action="/api/checkout" method="GET">
          <input type="hidden" name="plan" value="premium" />
          <div>
            <label className="label" htmlFor="email">{t.pricing.email}</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className="input" />
          </div>
          <label className="flex items-start gap-3">
            <input type="checkbox" className="mt-1" name="agree" required />
            <span className="text-sm text-slate-300">I agree with <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy</Link>.</span>
          </label>
          <button type="submit" className="btn-primary">{t.pricing.pay}</button>
        </form>
      </div>
    </div>
  );
}
