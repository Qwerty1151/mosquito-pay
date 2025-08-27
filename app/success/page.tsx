import Link from "next/link";
import { detectLocale, getMessages } from "@/lib/i18n";
export const metadata = { title: "Payment successful" };
export default async function SuccessPage() {
  const t = await getMessages(detectLocale());
  return (
    <div className="container py-14 lg:py-20 max-w-xl">
      <h1 className="text-3xl font-bold">{t.success.title}</h1>
      <p className="mt-2 text-slate-300">{t.success.desc}</p>
      <div className="mt-6 flex gap-3">
        <Link href="/dashboard" className="btn-primary">{t.success.dashboard}</Link>
        <Link href="/" className="btn-ghost">{t.success.home}</Link>
      </div>
    </div>
  );
}
