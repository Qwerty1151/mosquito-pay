import Section from "../Section";
type T = (k: string) => string;

export default function Testimonials({ t }: { t: T }) {
  const list = [
    {name:"Anna", text:t("reviews.1")},
    {name:"Marek", text:t("reviews.2")},
    {name:"Claire", text:t("reviews.3")},
  ];
  return (
    <Section id="reviews">
      <h2 className="text-3xl font-bold mb-6">{t("reviews.title")}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {list.map((r,i)=>(
          <div key={i} className="card p-5">
            <div className="font-semibold">{r.name}</div>
            <p className="text-sm mt-1 text-[rgb(var(--muted-foreground-rgb))]">“{r.text}”</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
