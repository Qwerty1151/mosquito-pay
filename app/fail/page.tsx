import Link from "next/link";
export const metadata = { title: "Payment failed" };
export default function FailPage() {
  return (
    <div className="container py-12 lg:py-20 max-w-xl">
      <h1 className="text-3xl font-bold text-deep">Payment failed</h1>
      <p className="mt-2 text-slate-700">Please check your card/balance and try again. If the problem persists, contact your bank or try another method.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/pricing" className="btn-primary">Try again</Link>
        <Link href="/" className="btn-ghost">Home</Link>
      </div>
    </div>
  );
}
