import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Compare from "@/components/sections/Compare";
import Testimonials from "@/components/sections/Testimonials";
import { cookies, headers } from "next/headers";
import en from "@/messages/en.json";
import ru from "@/messages/ru.json";
import pl from "@/messages/pl.json";
import fr from "@/messages/fr.json";

function getLocale() {
  const c = cookies().get("lang")?.value;
  if (c) return c;
  const a = headers().get("accept-language") || "";
  if (a.toLowerCase().startsWith("ru")) return "ru";
  if (a.toLowerCase().startsWith("pl")) return "pl";
  if (a.toLowerCase().startsWith("fr")) return "fr";
  return "en";
}
function getT(locale: string) {
  const dict: any = { en, ru, pl, fr };
  const m = dict[locale] ?? en;
  return (k: string) => m[k] ?? k;
}

export const metadata = {
  title: "Ultrasonic Mosquito Repellent — Premium",
  description: "Freemium + Premium. Pay with Payeer, get license instantly.",
};

export default function Page() {
  const t = getT(getLocale());
  return (
    <>
      <Hero t={t} />
      <Pain t={t} />
      <HowItWorks t={t} />
      <Features t={t} />
      <CTA t={t} />
      <Compare t={t} />
      <Testimonials t={t} />
    </>
  );
}
