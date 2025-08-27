import Section from "../Section";
type T = (k: string) => string;

export default function Compare({ t }: { t: T }) {
  return (
    <Section id="compare">
      <h2 className="text-3xl font-bold mb-6">{t("compare.title")}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="font-semibold">🔌 {t("compare.a1.t")}</div>
          <p className="text-sm mt-1 text-[rgb(var(--muted-foreground-rgb))]">{t("compare.a1.d")}</p>
        </div>
        <div className="card p-5">
          <div className="font-semibold">📱 {t("compare.a2.t")}</div>
          <p className="text-sm mt-1 text-[rgb(var(--muted-foreground-rgb))]">{t("compare.a2.d")}</p>
        </div>
        <div className="card p-5">
          <div className="font-semibold">🧩 {t("compare.a3.t")}</div>
          <p className="text-sm mt-1 text-[rgb(var(--muted-foreground-rgb))]">{t("compare.a3.d")}</p>
        </div>
      </div>
    </Section>
  );
}
