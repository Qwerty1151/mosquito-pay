import Section from "../Section";
type T = (k: string) => string;

export default function HowItWorks({ t }: { t: T }) {
  const steps = [
    {icon:"🧩", title:t("flow.1.t"), text:t("flow.1.d")},
    {icon:"🖱️", title:t("flow.2.t"), text:t("flow.2.d")},
    {icon:"🔑", title:t("flow.3.t"), text:t("flow.3.d")},
    {icon:"😴", title:t("flow.4.t"), text:t("flow.4.d")},
  ];
  return (
    <Section id="how">
      <h2 className="text-3xl font-bold mb-6">{t("flow.title")}</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s,i)=>(
          <div key={i} className="card p-5">
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="font-semibold">{s.title}</div>
            <p className="text-sm mt-1 text-[rgb(var(--muted-foreground-rgb))]">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
