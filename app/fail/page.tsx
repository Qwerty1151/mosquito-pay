import Link from "next/link";
import { detectLocale, getMessages } from "@/lib/i18n";
export const metadata = { title: "Payment failed" };
export default async function FailPage() {
  const t = await getMessages(detectLocale());
  return (
    <div className="container py-14 lg:py-20 max-w-xl">
      <h1 className="text-3xl font-bold">{t.fail.title}</h1>
      <p className="mt-2 text-slate-300">{t.fail.desc}</p>
      <div className="mt-6 flex gap-3">
        <Link href="/pricing" className="btn-primary">{t.fail.retry}</Link>
        <Link href="/" className="btn-ghost">{t.fail.home}</Link>
      </div>
    </div>
  );
}
