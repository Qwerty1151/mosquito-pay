import Link from "next/link";
export const metadata = { title: "Payment successful" };
export default function SuccessPage() {
  return (
    <div className="container py-12 lg:py-20 max-w-xl">
      <h1 className="text-3xl font-bold text-deep">Payment successful</h1>
      <p className="mt-2 text-slate-700">Your license key has been delivered to your email. Paste it into the extension to unlock Premium.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/dashboard" className="btn-primary">Dashboard</Link>
        <Link href="/" className="btn-ghost">Home</Link>
      </div>
    </div>
  );
}
