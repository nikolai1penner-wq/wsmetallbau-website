import Link from "next/link";
import { AnfrageForm } from "@/components/AnfrageForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { Faq, type FaqItem } from "@/components/Faq";
import { Foto } from "@/components/Foto";
import { LeistungRows } from "@/components/LeistungGrid";
import { objektbau } from "@/lib/leistungen";
import { publishedReferenzen } from "@/lib/referenzen";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Metallbau für Objektbau in OWL | Balkonanlagen & Sonderkonstruktionen",
  absolute: true,
  description:
    "Balkonanlagen, Stahltreppen und Sonderkonstruktionen für Architekten und Bauträger. Werkplanung, eigene Fertigung und Montage in Herford.",
  path: "/objektbau/",
});

const wissen = [
  { tag: "Treppen", title: "Treppen nach DIN 18065: Maße und Steigung" },
  { tag: "Korrosion", title: "Feuerverzinken oder beschichten: was wann sinnvoll ist" },
  { tag: "Geländer", title: "Geländerhöhen nach Landesbauordnung NRW" },
  { tag: "Glas", title: "Absturzsichernde Verglasung nach DIN 18008" },
];

const partner = [
  { title: "Für Architekten und Fachplaner", text: "Wir prüfen Machbarkeit und Details schon in der Entwurfs- und Ausführungsplanung, liefern CAD-Details und Ausschreibungstexte und stimmen Anschlüsse mit Tragwerksplanung und Fassade ab." },
  { title: "Für Bauträger und Generalunternehmer", text: "Balkonanlagen, Treppen und Geländer in Serie, mit festen Ansprechpartnern, verlässlichen Terminen und Montage durch eigene Teams. Wir kalkulieren nach Ihrem Leistungsverzeichnis." },
  { title: "Für Gewerbe und Industrie", text: "Bühnen, Podeste, Fluchttreppen, Überdachungen und Stahl-Glas-Trennwände für Büro, Praxis und Halle, gefertigt in Herford und montiert im laufenden Betrieb." },
];

// TODO: Statik-Aussage, Kapazität und Kalkulationsdauer von W&S bestätigen lassen (im Screendesign Platzhalter)
const faq: FaqItem[] = [
  { q: "Ab wann sollten wir Sie in die Planung einbinden?", a: "Am besten in den Leistungsphasen 3 bis 5. Dann lassen sich Anschlüsse, Spannweiten und Oberflächen früh klären, und die Ausschreibung passt zur Ausführung." },
  { q: "Welche Unterlagen brauchen Sie für ein Angebot?", a: "Pläne oder Skizzen mit Maßen, gewünschte Materialien und Oberflächen sowie den Terminrahmen. Ein Leistungsverzeichnis hilft, ist aber nicht nötig." },
  { q: "Übernehmen Sie auch die Statik?", a: "Wir erstellen die Werkplanung und arbeiten mit Tragwerksplanern zusammen, die die Statik für unsere Bauteile aufstellen." },
  { q: "Können Sie auch größere Stückzahlen liefern?", a: "Ja. Bei Serienleistungen wie Balkonanlagen planen wir Fertigung und Montage abschnittsweise nach Ihrem Bauzeitenplan." },
  { q: "Wie geben wir eine Ausschreibung an Sie?", a: `Laden Sie Pläne und Leistungsverzeichnis im Anfrageformular hoch oder senden Sie beides an ${site.email}. Wir melden uns innerhalb eines Werktags.` },
];

export default function Page() {
  return (
    <>
      <section className="dark pt-10 pb-16 sm:pb-20">
        <div className="wrap grid gap-8">
          <Breadcrumbs onDark items={[{ name: "Objektbau", path: "/objektbau/" }]} />
          <div className="flex flex-wrap items-start gap-14">
            <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
              <h1 className="h1">Metallbau für den Objektbau: Balkonanlagen, Treppen und Sonder&shy;konstruktionen</h1>
              <p className="lede text-on-dark-2">
                W&amp;S Metallbau fertigt Balkonanlagen, Stahltreppen, Geländer und Sonderkonstruktionen für Wohnungsbau, Gewerbe und öffentliche Bauten in OWL. Mit eigener Werkstatt und eigenen Montageteams in Herford.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="chip">Werkplanung inklusive</li>
                <li className="chip">Eigene Werkstatt</li>
                <li className="chip">750+ Projekte</li>
                <li className="chip">Eigene Montage</li>
              </ul>
            </div>
            <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-4 bg-sheet p-6 text-ink sm:p-8">
              <span className="label">Projektanfrage</span>
              <h2 className="font-display text-2xl leading-tight font-bold">Rückmeldung innerhalb eines Werktags</h2>
              <AnfrageForm variante="projekt-kurz" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-8">
          <div className="grid gap-3">
            <span className="eyebrow text-muted">Partner im Objektbau</span>
            <h2 className="h2">Ein Partner von der Werkplanung bis zur Abnahme</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {partner.map((b) => (
              <div key={b.title} className="rule grid content-start gap-2.5 pt-5">
                <h3 className="h3">{b.title}</h3>
                <p className="text-ink-2">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="wrap grid gap-8">
          <h2 className="h2 rule pt-7">Metallbau-Leistungen für Objekt und Gewerbe</h2>
          <LeistungRows items={objektbau} base="/objektbau/" />
        </div>
      </section>

      <section className="band section">
        <div className="wrap flex flex-wrap gap-12">
          <Foto label="Werkstatt Herford" className="min-h-[300px] min-w-0 flex-[1_1_520px] sm:min-h-[420px]" sizes="(min-width: 1024px) 640px, 100vw" />
          <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
            <span className="eyebrow text-muted">Fertigung &amp; Kapazität</span>
            <h2 className="h2-sm">Aus einer Hand, von der Werkplanung bis zur Montage</h2>
            <dl className="grid grid-cols-2 border-t border-anthracite">
              {site.fertigung.map((d) => (
                <div key={d.k} className="flex flex-col gap-0.5 border-b border-line py-3.5 pr-3">
                  <dt className="label text-[11px]">{d.k}</dt>
                  <dd className="text-lg font-semibold">{d.v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/unternehmen/" className="link">Mehr über unseren Betrieb →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-7">
          <h2 className="h2">Referenzen aus dem Objektbau</h2>
          {publishedReferenzen.length === 0 ? (
            <p className="max-w-[640px] text-ink-2">
              Die ersten Fallstudien mit Ort, Material, Umfang und Bauzeit werden gerade aufbereitet.{" "}
              <Link href="/referenzen/" className="link">Zu den Referenzen</Link>
            </p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {publishedReferenzen.slice(0, 3).map((r) => (
                <li key={r.slug}>
                  <Link href={`/referenzen/${r.slug}/`} className="flex h-full flex-col bg-sheet text-ink no-underline">
                    <Foto label={r.title} className="h-[260px]" sizes="400px" />
                    <div className="grid gap-2 px-6 pt-5 pb-6">
                      <span className="label">{r.leistung} · {r.ort}</span>
                      <h3 className="h3">{r.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="dark section">
        <div className="wrap flex flex-wrap gap-14">
          <div className="flex min-w-0 flex-[3_1_560px] flex-col gap-6">
            <span className="eyebrow text-accent-light">Planungswissen</span>
            <h2 className="h2-sm">Antworten für die Planung</h2>
            <ul className="border-t border-line-strong">
              {wissen.map((a) => (
                <li key={a.title} className="flex items-baseline gap-5 border-b border-line-dark py-4">
                  <span className="min-w-[92px] font-mono text-xs text-on-dark-muted uppercase">{a.tag}</span>
                  <span className="text-lg font-medium">{a.title}</span>
                </li>
              ))}
            </ul>
            <Link href="/planer-service/wissen/" className="font-semibold text-on-dark">Zum Fachwissen →</Link>
          </div>
          <div className="flex min-w-0 flex-[2_1_380px] flex-col gap-6">
            <span className="eyebrow text-accent-light">Ihre Ansprechpartner</span>
            {site.owners.map((name) => (
              <div key={name} className="flex items-center gap-5">
                <div className="ph size-24 flex-none" role="img" aria-label={`Platzhalter: Porträt ${name}`} />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xl font-semibold">{name}</span>
                  <span className="text-[15px] text-on-dark-soft">Gesellschafter</span>
                  <a href={`mailto:${site.email}`} className="font-mono text-sm text-on-dark">{site.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq titel="Fragen aus der Planungspraxis" items={faq} />

      <CtaBand />
    </>
  );
}
