import Section from "../Section";
type T = (k: string) => string;

export default function Pain({ t }: { t: T }) {
  const items = ["pain.1","pain.2","pain.3"];
  return (
    <Section id="pain">
      <h2 className="text-3xl font-bold mb-6">{t("pain.title")}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map(k=>(
          <div key={k} className="card p-5">
            <div className="text-2xl mb-2">🦟</div>
            <p className="text-[rgb(var(--muted-foreground-rgb))]">{t(k)}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
