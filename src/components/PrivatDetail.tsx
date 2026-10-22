import Link from "next/link";
import { bilderFuer } from "@/lib/bilder";
import type { Leistung } from "@/lib/leistungen";
import { serviceJsonLd } from "@/lib/seo";
import { AnfrageForm } from "./AnfrageForm";
import { Breadcrumbs } from "./Breadcrumbs";
import { Faq } from "./Faq";
import { Foto } from "./Foto";
import { Galerie } from "./Galerie";
import { JsonLd } from "./JsonLd";
import { PrivatSubnav } from "./PrivatSubnav";
import { Varianten } from "./Varianten";

const farben = [
  { name: "RAL 9005", hex: "#0e0e10" },
  { name: "RAL 7016", hex: "#383e42" },
  { name: "DB 703", hex: "#5b5c5e" },
];

export function PrivatDetail({ leistung }: { leistung: Leistung }) {
  const path = `/privat/${leistung.slug}/`;
  const bilder = bilderFuer(leistung.slug);
  const loft = leistung.slug === "loft-tueren-trennwaende";
  return (
    <>
      <PrivatSubnav aktiv={leistung.slug} />
      <section className="pt-10 pb-16 sm:pt-14 sm:pb-[72px]">
        <div className="wrap flex flex-wrap items-stretch gap-12">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col justify-center gap-6">
            <Breadcrumbs items={[{ name: "Privat", path: "/privat/" }, { name: leistung.short, path }]} />
            {leistung.eyebrow && <span className="eyebrow text-muted">{leistung.eyebrow}</span>}
            <h1 className="h1">{leistung.h1 ?? leistung.title}</h1>
            <p className="lede text-ink-2">{leistung.intro}</p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#anfrage" className="btn-dark">Kostenloses Angebot</a>
              {leistung.preisAb && (
                <div className="flex flex-col leading-tight">
                  <span className="label">Preisrahmen</span>
                  <span className="font-display text-2xl font-bold">ab {leistung.preisAb} € inkl. Montage</span>
                </div>
              )}
            </div>
          </div>
          <Foto bild={bilder[0]} label={leistung.short} priority className="min-h-[320px] min-w-0 flex-[1_1_520px] sm:min-h-[520px]" sizes="(min-width: 1024px) 620px, 100vw" />
        </div>
      </section>

      {leistung.varianten ? (
        <section className="band section">
          <div className="wrap grid gap-8">
            <h2 className="h2">Welche Lofttür passt?</h2>
            <Varianten varianten={leistung.varianten} bilder={bilder} />
            {loft && (
              <div className="flex flex-wrap gap-8 text-[15px]">
                <div className="grid gap-1.5">
                  <span className="label">Beliebte Farben</span>
                  <div className="flex flex-wrap items-center gap-3">
                    {farben.map((f) => (
                      <span key={f.name} className="flex items-center gap-2">
                        <span className="size-7 border border-line-strong" style={{ background: f.hex }} aria-hidden />
                        {f.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <span className="label">Glas</span>
                  <span>Klarglas, satiniert oder Folie</span>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="band section">
          <div className="wrap grid gap-6">
            <h2 className="h2-sm">Das fertigen wir</h2>
            <ul className="grid gap-x-10 gap-y-2 pl-5 [list-style:square] sm:grid-cols-2">
              {leistung.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </section>
      )}

      {leistung.ratgeber && (
        <section className="section">
          <div className="wrap grid gap-8">
            <div className="grid gap-3">
              <span className="eyebrow text-muted">{leistung.ratgeber.eyebrow}</span>
              <h2 className="h2">{leistung.ratgeber.titel}</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {leistung.ratgeber.bloecke.map((b) => (
                <div key={b.title} className="rule grid content-start gap-2.5 pt-5">
                  <h3 className="h3">{b.title}</h3>
                  <p className="text-ink-2">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Galerie bilder={bilder.slice(1)} titel={leistung.galerieTitel ?? "Ausgeführte Arbeiten"} />

      <section id="anfrage" className="dark section scroll-mt-4">
        <div className="wrap flex flex-wrap gap-14">
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
            <h2 className="h2">Ihr Angebot in zwei Minuten anfragen</h2>
            <p className="text-on-dark-2">{loft ? "Maße und ein Foto der Öffnung genügen." : "Ein paar Fotos und ungefähre Maße genügen."} Wir melden uns innerhalb eines Werktags mit einer ersten Einschätzung.</p>
            <ul className="pl-5 text-on-dark-2 [list-style:square]">
              <li>Kostenlos und unverbindlich</li>
              <li>Aufmaß vor Ort in OWL</li>
              <li>Fertigung und Montage aus einer Hand</li>
            </ul>
          </div>
          <div className="min-w-0 flex-[1_1_520px] bg-sheet p-6 text-ink sm:p-8">
            <AnfrageForm variante={loft ? "loft" : "privat"} submitLabel="Angebot anfragen" />
          </div>
        </div>
      </section>

      {leistung.faq && <Faq titel={leistung.faqTitel ?? "Häufige Fragen"} items={leistung.faq} />}

      {leistung.counterpart && (
        <p className="wrap pb-16">
          Sie planen ein größeres Bauvorhaben? <Link href={leistung.counterpart} className="link">Zur Seite für Planer und Bauträger</Link>
        </p>
      )}

      <JsonLd data={serviceJsonLd({ name: leistung.title, description: leistung.description, path, audience: "Privatkunden" })} />
    </>
  );
}
