export default function Footer() {
  return (
    <footer className="py-8 text-sm opacity-80">
      <div className="container flex items-center justify-between">
        <a href="https://navilon.tech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-[rgb(0,170,252)]" />
          <span className="font-semibold">Navilon Tech</span>
        </a>
        <p>Digital subscription. License delivered by email after payment.</p>
      </div>
    </footer>
  );
}
