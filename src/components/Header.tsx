"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className="h-6 w-6 rounded-sm bg-[rgb(0,170,252)]" />
          <span>Ultrasonic Repellent</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
          <Link href="/privacy" className="hover:opacity-80">Privacy</Link>
          <Link href="/terms" className="hover:opacity-80">Terms</Link>
          <a href="https://chromewebstore.google.com/detail/ultrasonic-mosquito-repel/fghngdjpbfengefgdoeajbcookmgcpcc"
             target="_blank" rel="noreferrer" className="btn-primary ml-3">Скачать расширение</a>
        </nav>
      </div>
    </header>
  );
}
