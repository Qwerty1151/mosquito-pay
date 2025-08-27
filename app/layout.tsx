import type { Metadata } from "next";
import "./../src/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://mosquito.navilon.tech"),
  title: { default: "Ultrasonic Mosquito Repellent — Premium", template: "%s — Ultrasonic Mosquito Repellent" },
  description: "Freemium + Premium: pay with Payeer and activate your license key for the Ultrasonic Mosquito Repellent browser extension.",
  openGraph: { title: "Ultrasonic Mosquito Repellent — Premium", description: "Pay with Payeer. Instant license activation for Premium.", url: "/", siteName: "Navilon Tech", type: "website" },
  twitter: { card: "summary_large_image", title: "Ultrasonic Mosquito Repellent — Premium", description: "Freemium + Premium with Payeer checkout." },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
