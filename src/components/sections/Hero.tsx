"use client";
import Section from "../Section";
import { WEBSTORE_URL } from "@/src/lib/const";
import Link from "next/link";

type T = (k: string) => string;

export default function Hero({ t }: { t: T }) {
  return (
    <Section className="grid gap-10 md:grid-cols-2 items-center">
      <div>
        <div className="badge mb-4">{t("hero.badge")}</div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-lg text-[rgb(var(--muted-foreground-rgb))]">
          {t("hero.subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/pricing" className="btn-primary">{t("cta.buy")}</Link>
          <a href={WEBSTORE_URL} target="_blank" rel="noreferrer" className="btn-ghost">
            {t("cta.download")}
          </a>
        </div>
        <div className="mt-6 flex items-center gap-6 text-sm text-[rgb(var(--muted-foreground-rgb))]">
          <div>✓ {t("hero.point1")}</div>
          <div>✓ {t("hero.point2")}</div>
          <div>✓ {t("hero.point3")}</div>
        </div>
      </div>

      <div className="relative">
        <div className="card p-6">
          <div className="mb-4 font-semibold text-[rgb(var(--muted-foreground-rgb))]">{t("hero.mockTitle")}</div>
          <div className="h-48 rounded-xl bg-secondary/40 grid place-items-center">
            <div className="text-center">
              <div className="text-5xl mb-3">🎵</div>
              <div className="text-emerald-400 font-semibold">{t("hero.active")}</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted-foreground-rgb))]">{t("hero.desc")}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
