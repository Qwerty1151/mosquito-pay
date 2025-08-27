import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Compare from "@/components/sections/Compare";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";

import { cookies, headers } from "next/headers";
import en from "@msgs/en.json";
import ru from "@msgs/ru.json";
import pl from "@msgs/pl.json";
import fr from "@msgs/fr.json";

const DICTS = { en, ru, pl, fr } as const;
type Lang = keyof typeof DICTS;

function resolveLang(): Lang {
  const c = cookies().get("lang")?.value as Lang | undefined;
  const h = headers().get("x-lang") as Lang | undefined;
  return (c || h || "ru");
}

type T = (key: string) => string;
function createT(lang: Lang): T {
  const dict = DICTS[lang] as Record<string, string>;
  const fallback = DICTS.en as Record<string, string>;
  return (k: string) => dict[k] ?? fallback[k] ?? k;
}

export default function Page() {
  const t = createT(resolveLang());

  return (
    <>
      <Hero t={t} />
      <Pain t={t} />
      <HowItWorks t={t} />
      <Features t={t} />
      <Compare t={t} />
      <CTA t={t} />
      <Testimonials t={t} />
    </>
  );
}
