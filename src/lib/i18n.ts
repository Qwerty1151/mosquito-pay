import { cookies, headers } from "next/headers";
export type Locale = "en" | "ru" | "pl" | "fr";
export const SUPPORTED: Locale[] = ["en","ru","pl","fr"];
export function detectLocale(): Locale {
  const c = cookies().get("lang")?.value;
  if (c && SUPPORTED.includes(c as Locale)) return c as Locale;
  const al = (headers().get("accept-language") || "").toLowerCase();
  for (const part of al.split(",")) {
    const base = part.split(";")[0].trim().split("-")[0];
    if (SUPPORTED.includes(base as Locale)) return base as Locale;
  }
  return "en";
}
const loaders = {
  en: () => import("../../messages/en.json").then(m => m.default),
  ru: () => import("../../messages/ru.json").then(m => m.default),
  pl: () => import("../../messages/pl.json").then(m => m.default),
  fr: () => import("../../messages/fr.json").then(m => m.default),
} as const;
export async function getMessages(locale: Locale): Promise<any> { return loaders[locale](); }
