"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
        <span className="inline-block h-3 w-3 rounded-sm bg-[rgb(var(--primary-rgb))]" />
        <span>Ultrasonic Repellent</span>
      </Link>

      <nav className="flex items-center gap-5 text-sm">
        <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
        <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
        <Link href="/terms" className="hover:opacity-80">Terms</Link>
      </nav>
    </header>
  );
}
