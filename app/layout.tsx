import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ultrasonic Mosquito Repellent",
  description: "Защита от комаров прямо в браузере. Без химии, без запаха.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
