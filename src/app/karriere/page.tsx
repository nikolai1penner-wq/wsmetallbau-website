import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { Foto } from "@/components/Foto";
import { AufgabenProfil, Bewerbung, Vorteile } from "@/components/Karriere";
import { initiativ, karriereFaq, stellen } from "@/lib/karriere";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Jobs Metallbauer Herford (m/w/d) | Karriere bei W&S Metallbau",
  absolute: true,
  description:
    "Metallbauer und Monteure (m/w/d) in Herford gesucht. Unbefristet, 18 bis 23 €/Std., 30 Tage Urlaub, abends zuhause. Bewerbung in 2 Minuten ohne Anschreiben.",
  path: "/karriere/",
});

export default function Page() {
  const [metallbauer] = stellen;
  return (
    <>
      <section className="dark pt-10 pb-16 sm:pb-20">
        <div className="wrap grid gap-8">
          <Breadcrumbs onDark items={[{ name: "Karriere", path: "/karriere/" }]} />
          <div className="flex flex-wrap items-stretch gap-12">
            <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
              <h1 className="h1">Metallbauer (m/w/d) in Herford gesucht</h1>
              <p className="lede text-on-dark-2">
                Seit über 20 Jahren und mehr als 750 Projekten baut W&amp;S Metallbau Treppen, Balkone, Geländer und Lofttüren für Kunden in ganz OWL. Volle Auftragsbücher, feste Arbeitszeiten und ein Team, das zusammenhält. Bewirb dich in zwei Minuten, ganz ohne Anschreiben.
              </p>
              <ul className="flex flex-wrap gap-2">
                {["Vollzeit", "Unbefristet", "Herford + 100 km", "18 bis 23 € / Std."].map((c) => <li key={c} className="chip">{c}</li>)}
              </ul>
              <a href="#bewerbung" className="btn self-start">In 2 Minuten bewerben</a>
            </div>
            <Foto label="Team beim Schweißen in der Werkstatt" priority className="min-h-[280px] min-w-0 flex-[1_1_480px] sm:min-h-[420px]" sizes="(min-width: 1024px) 600px, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-8">
          <div className="grid gap-3">
            <span className="eyebrow text-muted">Offene Stellen</span>
            <h2 className="h2">Jobs bei W&amp;S Metallbau</h2>
          </div>
          <ul className="grid gap-6 md:grid-cols-3">
            {[...stellen.map((s) => ({ ...s, href: `/karriere/${s.slug}/`, cta: "Jetzt bewerben" })), { ...initiativ, href: "#bewerbung", cta: "Initiativ bewerben" }].map((j) => (
              <li key={j.title}>
                <Link href={j.href} className="group flex h-full flex-col gap-3 border-[1.5px] border-anthracite bg-sheet p-6 text-ink no-underline">
                  <span className="label">{j.tag}</span>
                  <h3 className="h3 group-hover:underline">{j.title}</h3>
                  <p className="text-ink-2">{j.text}</p>
                  <span className="mt-auto font-mono text-[13px] text-muted">{j.meta}</span>
                  <span className="font-semibold text-accent">{j.cta} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AufgabenProfil aufgaben={metallbauer.aufgaben} profil={metallbauer.profil} />
      <Vorteile />
      <Bewerbung />
      <Faq titel="Häufige Fragen zur Bewerbung" items={karriereFaq} className="section pt-0" />
    </>
  );
}
