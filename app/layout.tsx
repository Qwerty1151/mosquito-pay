import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { detectLocale, getMessages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { default: "Ultrasonic Mosquito Repellent — Premium", template: "%s — Mosquito Repellent" },
  description: "Freemium + Premium via Payeer. Instant license email.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = detectLocale();
  const t = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} labels={t.nav} cta={t.hero.ctaBuy} />
        <main className="flex-1">{children}</main>
        <Footer labels={{privacy:t.nav.privacy, terms:t.nav.terms}}/>
      </body>
    </html>
  );
}
