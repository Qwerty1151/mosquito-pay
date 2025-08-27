import Section from "../Section";
import Link from "next/link";
type T = (k: string) => string;

export default function CTA({ t }: { t: T }) {
  return (
    <Section id="cta" className="text-center">
      <h2 className="text-3xl font-bold">{t("cta.title")}</h2>
      <p className="mt-2 text-[rgb(var(--muted-foreground-rgb))]">{t("cta.subtitle")}</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link href="/pricing" className="btn-primary">{t("cta.buy")}</Link>
        <Link href="/pricing" className="btn-ghost">{t("cta.activate")}</Link>
      </div>
      <p className="mt-3 text-sm text-[rgb(var(--muted-foreground-rgb))]">{t("cta.note")}</p>
    </Section>
  );
}
