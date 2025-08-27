export type Locale = "en" | "ru" | "pl" | "fr";
export function getLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/(?:^|; )lang=([^;]+)/);
  const l = m ? decodeURIComponent(m[1]) : "en";
  if (["en","ru","pl","fr"].includes(l)) return l as any;
  return "en";
}
