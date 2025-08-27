import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-8 grid gap-6 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" className="text-primary" aria-hidden="true"><path fill="currentColor" d="M12 2l7 4v12l-7 4l-7-4V6z"/></svg>
            <span className="font-semibold">Navilon Tech</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">Mosquito Repellent Premium is a digital subscription. Licenses are delivered by email immediately after payment.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Product</div>
          <ul className="space-y-1 text-slate-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-slate-700">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms & Refunds</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} Navilon Tech. All rights reserved.</div>
    </footer>
  );
}
