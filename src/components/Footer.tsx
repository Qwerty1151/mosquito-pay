"use client";
export default function Footer(){
  return (
    <footer className="container py-8 text-sm text-[rgb(var(--muted-foreground-rgb))]">
      <a href="https://navilon.tech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
        <span className="inline-block h-3 w-3 rounded-sm" style={{ background: `rgb(var(--primary-rgb))` }} />
        <span className="font-semibold">Navilon Tech</span>
      </a>
      <p className="mt-2">Digital subscription. License delivered by email after payment.</p>
    </footer>
  );
}
