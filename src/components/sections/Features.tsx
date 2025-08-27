import Section from "../Section";
type T = (k: string) => string;

export default function Features({ t }: { t: T }) {
  const feats = [
    {icon:"📶", k:"feat.1"},
    {icon:"⚖️", k:"feat.2"},
    {icon:"🔄", k:"feat.3"},
    {icon:"☁️", k:"feat.4"},
  ];
  return (
    <Section id="features">
      <h2 className="text-3xl font-bold mb-6">{t("features.title")}</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {feats.map(f=>(
          <div key={f.k} className="card p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <p className="text-[rgb(var(--muted-foreground-rgb))]">{t(f.k)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
