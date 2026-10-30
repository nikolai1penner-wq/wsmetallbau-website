import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq, type FaqItem } from "@/components/Faq";
import { Foto } from "@/components/Foto";
import { bilderFuer } from "@/lib/bilder";
import { publishedReferenzen } from "@/lib/referenzen";
import { site } from "@/lib/site";

// Bildkacheln nach Kromm-Vorbild: Foto mit Titel, darunter ein Satz
const leistungen = [
  { title: "Treppen", text: "Spindel-, Innen- und Außentreppen aus Stahl", href: "/privat/treppen/", bildKey: "treppen" },
  { title: "Balkone", text: "Vorstellbalkone und Balkonanlagen", href: "/objektbau/balkonanlagen/", bildKey: "balkone" },
  { title: "Geländer", text: "Edelstahl, Stahl und Ganzglas", href: "/privat/gelaender/", bildKey: "gelaender" },
  { title: "Lofttüren", text: "Stahl-Glas-Türen und Trennwände nach Maß", href: "/privat/loft-tueren-trennwaende/", bildKey: "loft-tueren-trennwaende" },
  { title: "Vordächer", text: "Für Haustür, Terrasse und Eingang", href: "/privat/vordaecher/", bildKey: "vordaecher" },
  { title: "Fenstergitter", text: "Einbruchschutz aus Stahl und Edelstahl", href: "/privat/fenstergitter/", bildKey: "fenstergitter" },
  { title: "Sonderkonstruktionen", text: "Einzelanfertigungen nach Ihren Plänen", href: "/objektbau/sonderkonstruktionen/", bildKey: "sonderkonstruktionen" },
  { title: "Stahlbau", text: "Bühnen, Podeste und Überdachungen", href: "/objektbau/stahlbau-industrie/", bildKey: "stahlbau-industrie" },
];

const vorteile = [
  { title: "Gebaut nach Maß", text: "Jedes Teil entsteht für Ihr Gebäude, nicht aus dem Katalog." },
  { title: "Aus einer Hand", text: "Aufmaß, Werkplanung, Fertigung und Montage machen wir selbst." },
  { title: "Saubere Verarbeitung", text: "Gerade Nähte, glatte Kanten, langlebige Oberflächen." },
  { title: "Verlässliche Termine", text: "Feste Ansprechpartner und Montage, wie vereinbart." },
];

const warum = [
  { title: "Beratung vor Ort", text: "Wir kommen zu Ihnen, schauen uns die Situation an und nehmen selbst Maß. So passt am Ende jedes Detail." },
  { title: "Durchdachte Planung", text: "Bevor geschweißt wird, steht die Werkplanung. Anschlüsse, Oberflächen und Statik klären wir vorab, mit Partnern für die Tragwerksplanung." },
  { title: "Fertigung in Herford", text: "Zuschnitt, Schweißen und Schleifen passieren in unserer eigenen Werkstatt. Seit über 20 Jahren und in mehr als 750 Projekten." },
  { title: "Saubere Montage", text: "Unsere eigenen Teams bauen ein, räumen auf und übergeben erst, wenn alles sitzt. In ganz OWL und 100 km um Herford." },
];

// TODO: Angebotsfrist für Objektprojekte („innerhalb von X Werktagen“) ergänzen, sobald bestätigt
const faq: FaqItem[] = [
  { q: "Was macht ein Metallbauer?", a: "Ein Metallbauer plant, fertigt und montiert Bauteile aus Stahl, Edelstahl und Aluminium, zum Beispiel Treppen, Geländer, Balkone, Türen, Vordächer und Stahlkonstruktionen. Bei W&S kommen Fertigung und Montage aus einer Hand." },
  { q: "Welche Metallbauarbeiten übernehmen Sie in Herford und Bielefeld?", a: "Stahltreppen und Spindeltreppen, Vorstellbalkone und Balkonanlagen, Edelstahl-, Stahl- und Ganzglasgeländer, Lofttüren und Trennwände, Fenstergitter, Überdachungen und Sonderkonstruktionen." },
  { q: "Arbeiten Sie auch für Architekten und Bauträger?", a: "Ja. Für Objektprojekte liefern wir Details und Ausschreibungstexte, kalkulieren nach Leistungsverzeichnis und montieren mit eigenen Teams." },
  { q: "Was kostet eine Metallbauarbeit?", a: "Das hängt von Material, Größe, Oberfläche und Montageaufwand ab. Eine erste Einschätzung geben wir oft schon anhand von Fotos und Maßen, ein verbindliches Angebot erhalten Sie nach dem Aufmaß." },
  { q: "Wie schnell erhalte ich ein Angebot?", a: "Wir melden uns innerhalb eines Werktags. Für Objektprojekte mit Plänen oder Leistungsverzeichnis nennen wir Ihnen nach Sichtung der Unterlagen einen Termin für das Angebot." },
];

const schritte = [
  { title: "Beratung und Aufmaß", text: "Wir klären Anforderungen, Normen und Budget und nehmen vor Ort Maß." },
  { title: "Konstruktion", text: "Werkplanung, Statik mit Partnern und Freigabe der Details." },
  { title: "Fertigung und Montage", text: "Gefertigt in der eigenen Werkstatt, montiert von unserem Team." },
  { title: "Übergabe", text: "Abnahme, Dokumentation und Ansprechpartner auch nach dem Projekt." },
];

export default function Home() {
  const [projekte, jahre, umkreis] = site.facts;
  const kennzahlen = [projekte, jahre, { value: "1 Partner", label: "Planung, Fertigung, Montage" }, umkreis];
  const referenz = publishedReferenzen[0];
  return (
    <>
      <section className="dark relative isolate overflow-hidden">
        <Foto
          bild={bilderFuer("treppen")[0] ?? bilderFuer("loft-tueren-trennwaende")[0]}
          label="Treppe oder Geländer, fertig montiert"
          priority
          className="!absolute inset-0 -z-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--hero-overlay)_0%,var(--hero-overlay)_45%,transparent_100%)]" aria-hidden />
        <div className="wrap flex min-h-[520px] flex-col justify-center gap-6 py-16 sm:min-h-[620px]">
          <span className="eyebrow text-accent-light">Metallbau aus Herford</span>
          <h1 className="h1 max-w-[640px] text-white">Metallbau in Herford. Treppen, Balkone und Geländer nach Maß.</h1>
          <p className="lede max-w-[520px] text-on-dark-2">
            Wir planen, fertigen und montieren Konstruktionen aus Stahl, Edelstahl und Glas. Für Bauherren, Architekten und Bauträger in ganz OWL.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/anfrage/" className="btn">Projekt anfragen</Link>
            <Link href="/privat/loft-tueren-trennwaende/#anfrage" className="btn-ghost-light">Lofttür anfragen</Link>
          </div>
        </div>
      </section>

      <section aria-label="Unsere Stärken" className="border-b border-line bg-sheet">
        <ul className="wrap grid sm:grid-cols-2 lg:grid-cols-4">
          {vorteile.map((v, i) => (
            <li key={v.title} className={`flex flex-col gap-1.5 border-line py-7 sm:px-6 ${i ? "border-t sm:border-t-0" : ""} ${i % 2 ? "sm:border-l" : "sm:pl-0"} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}>
              <span aria-hidden className="mb-1 block h-[3px] w-8 bg-accent" />
              <h2 className="font-display text-xl font-bold">{v.title}</h2>
              <p className="text-[15px] text-ink-2">{v.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Kennzahlen" className="rule border-b-[1.5px] border-b-anthracite bg-sheet">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {kennzahlen.map((k, i) => (
            <div key={k.label} className={`flex flex-col-reverse gap-0.5 border-line py-4 sm:py-6 ${i % 2 ? "border-l pl-4 sm:pl-6" : "pr-4"} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}>
              <dt className="text-[13px] text-muted sm:text-[15px]">{k.label}</dt>
              <dd className="font-display text-[26px] leading-none font-bold sm:text-[32px]">{k.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Link href="/objektbau/" className="dark flex flex-col gap-4 p-8 no-underline sm:p-10">
            <span className="eyebrow text-accent-light">Objektbau</span>
            <h2 className="h2-sm">Für Architekten, Planer und Bauträger</h2>
            <ul className="grid gap-1 pl-5 text-on-dark-2 [list-style:square]">
              <li>Balkonanlagen, Treppen und Geländer in Serie</li>
              <li>Sonderkonstruktionen in Stahl, Edelstahl und Glas</li>
              <li>CAD-Details und Ausschreibungstexte für Ihre Planung</li>
              <li>Rückmeldung zu Ihrer Projektanfrage innerhalb eines Werktags</li>
            </ul>
            <span className="mt-2 font-semibold">Zum Objektbau →</span>
          </Link>
          <Link href="/privat/" className="flex flex-col gap-4 border-[1.5px] border-anthracite bg-sheet p-8 text-ink no-underline sm:p-10">
            <span className="eyebrow text-privat">Privat</span>
            <h2 className="h2-sm">Für Bauherren und Hausbesitzer</h2>
            <ul className="grid gap-1 pl-5 text-ink-2 [list-style:square]">
              <li>Lofttüren und Trennwände nach Maß</li>
              <li>Geländer aus Edelstahl, Stahl und Ganzglas</li>
              <li>Spindeltreppen, Innentreppen, Vorstellbalkone</li>
              <li>Kostenfreie Einschätzung mit Ihren Fotos</li>
            </ul>
            <span className="mt-2 font-semibold text-link">Zu den Privatleistungen →</span>
          </Link>
        </div>
      </section>

      <section className="section pt-4 sm:pt-8">
        <div className="wrap grid gap-8">
          <div className="grid gap-3">
            <span className="eyebrow text-accent">Unsere Leistungen</span>
            <h2 className="h2">Stahl, Edelstahl und Glas. Gefertigt für Ihr Gebäude.</h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {leistungen.map((l) => (
              <li key={l.href + l.title}>
                <Link href={l.href} className="group relative block aspect-[4/5] overflow-hidden bg-anthracite text-white no-underline">
                  {bilderFuer(l.bildKey)[0] ? (
                    <Foto bild={bilderFuer(l.bildKey)[0]} label={l.title} className="!absolute inset-0 transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 300px, 50vw" />
                  ) : (
                    // Noch kein Foto: dunkle Kachel mit den Streifen aus dem Logo
                    <span aria-hidden className="absolute inset-0 bg-[repeating-linear-gradient(120deg,transparent_0_28px,var(--stripe)_28px_44px)] transition-transform duration-500 group-hover:scale-105" />
                  )}
                  <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-[linear-gradient(0deg,rgba(0,0,0,.78),transparent)] p-4 pt-16 sm:p-5 sm:pt-20">
                    <span className="font-display text-xl leading-tight font-bold sm:text-2xl">{l.title}</span>
                    <span className="hidden text-sm text-white/85 sm:block">{l.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {referenz && (
        <section className="band section">
          <div className="wrap flex flex-wrap gap-12">
            <Foto label={referenz.title} className="min-h-[300px] min-w-0 flex-[1_1_560px] sm:min-h-[460px]" sizes="(min-width: 1024px) 680px, 100vw" />
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
              <span className="eyebrow text-muted">Referenz · {referenz.ort}</span>
              <h2 className="h2-sm">{referenz.title}</h2>
              <p className="text-ink-2">{referenz.herausforderung}</p>
              <Link href={`/referenzen/${referenz.slug}/`} className="link">Projekt ansehen →</Link>
            </div>
          </div>
        </section>
      )}

      <section className="dark section">
        <div className="wrap flex flex-wrap gap-12">
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
            <span className="eyebrow text-accent-light">Warum W&amp;S Metallbau?</span>
            <h2 className="h2">Erfahrung aus über 750 Projekten. Und der Anspruch, es sauber zu machen.</h2>
            <p className="text-on-dark-2">Wir sind ein Metallbaubetrieb aus Herford. Bei uns sprechen Sie mit den Leuten, die Ihr Projekt planen, schweißen und einbauen.</p>
            <Link href="/anfrage/" className="btn self-start">Projekt anfragen</Link>
          </div>
          <ul className="grid min-w-0 flex-[2_1_520px] gap-x-10 gap-y-8 sm:grid-cols-2">
            {warum.map((w, i) => (
              <li key={w.title} className="flex flex-col gap-2 border-t border-line-dark pt-5">
                <span className="font-mono text-sm text-accent-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{w.title}</h3>
                <p className="text-on-dark-soft">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap flex flex-wrap gap-12">
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4">
            <span className="eyebrow text-muted">Planer-Service</span>
            <h2 className="h2">CAD-Details und Ausschreibungstexte für Planer</h2>
            <p className="max-w-[480px] text-ink-2">Standarddetails als DWG und PDF, Ausschreibungstexte für Treppen, Balkone und Geländer sowie technische Datenblätter, kostenlos für Architekten und Fachplaner. Auf Wunsch beraten wir Sie schon in den Leistungsphasen 3 bis 5 zu Machbarkeit, Details und Kosten.</p>
            <Link href="/planer-service/" className="btn-dark self-start">Zum Planer-Service</Link>
          </div>
          <ul className="rule min-w-0 flex-[1_1_520px]">
            {[
              ["DWG", "Standarddetails Vorstellbalkon"],
              ["PDF", "Ausschreibungstext Stahltreppe"],
              ["PDF", "Ausschreibungstext Glasgeländer"],
              ["PDF", "Datenblatt Ganzglasgeländer"],
            ].map(([typ, name]) => (
              <li key={name} className="flex min-h-11 items-center gap-5 border-b border-line py-4">
                <span className="min-w-11 bg-anthracite px-2 py-1 text-center font-mono text-xs text-on-dark">{typ}</span>
                <span className="flex-1 font-medium">{name}</span>
                <span className="label">in Vorbereitung</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="ablauf" className="dark section scroll-mt-4">
        <div className="wrap grid gap-10">
          <h2 className="h2">So läuft Ihr Projekt</h2>
          <ol className="grid border-t-[1.5px] border-line-strong sm:grid-cols-2 lg:grid-cols-4">
            {schritte.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2.5 pt-6 pr-6 pb-2">
                <span className="font-display text-[40px] leading-none font-bold text-accent-light">{i + 1}</span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-[15px] text-on-dark-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap flex flex-wrap items-center gap-14">
          <Umkreis />
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            <span className="eyebrow text-muted">Einsatzgebiet</span>
            <h2 className="h2">Metallbau in Herford, Bielefeld und 100 km Umkreis</h2>
            <p className="text-ink-2">Wir montieren mit eigenen Teams in ganz Ostwestfalen-Lippe. Objektprojekte übernehmen wir bis Hannover, Münster und Paderborn.</p>
            <div className="grid gap-3.5 text-base">
              <p><strong>Bis 30 km:</strong> {site.serviceArea.kern.join(", ")}</p>
              <p><strong>Bis 70 km:</strong> {site.serviceArea.erweitert.join(", ")}</p>
              <p><strong>Bis 100 km:</strong> {site.serviceArea.rand.join(", ")}, für Objektprojekte</p>
            </div>
            <Link href="/einsatzgebiet/" className="link">Mehr zum Einsatzgebiet →</Link>
          </div>
        </div>
      </section>

      <Faq titel="Häufige Fragen zum Metallbau" items={faq} className="section pt-0" />

      <CtaBand />
    </>
  );
}

function Umkreis() {
  return (
    <div aria-hidden="true" className="relative hidden size-[420px] flex-none md:block">
      <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-line-strong" />
      <div className="absolute inset-[63px] rounded-full border-[1.5px] border-dashed border-line-strong" />
      <div className="absolute inset-[147px] rounded-full border-[1.5px] border-anthracite bg-sheet" />
      <div className="absolute top-[202px] left-[202px] size-4 rounded-full border-2 border-anthracite bg-accent" />
      <span className="absolute top-[196px] left-[226px] text-[15px] font-semibold">Herford</span>
      <span className="absolute top-[152px] left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted">30 km</span>
      <span className="absolute top-[68px] left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted">70 km</span>
      <span className="absolute top-1.5 left-1/2 -translate-x-1/2 font-mono text-[11px] text-muted">100 km</span>
    </div>
  );
}
