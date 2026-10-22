import { AnfrageForm } from "@/components/AnfrageForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export const metadata = pageMeta({
  title: "Anfrage: Projekt oder Privatauftrag",
  description: "Projektanfrage mit Plan-Upload für Architekten und Bauträger oder kurze Anfrage mit Fotos für Privatkunden. Antwort innerhalb eines Werktags.",
  path: "/anfrage/",
});

export default function Page() {
  return (
    <>
      <section className="dark pt-10 pb-14">
        <div className="wrap grid gap-6">
          <Breadcrumbs onDark items={[{ name: "Anfrage", path: "/anfrage/" }]} />
          <h1 className="h1">Erzählen Sie uns von Ihrem Projekt</h1>
          <p className="lede text-on-dark-2">
            Pläne, Fotos oder eine Skizze genügen. Wir melden uns innerhalb eines Werktags
            {site.phone && <>, oder rufen Sie direkt an: <a href={telHref(site.phone)} className="text-accent-light">{site.phone}</a></>}.
          </p>
        </div>
      </section>
      <div className="wrap grid gap-8 py-14 lg:grid-cols-2">
        <section id="projekt" className="flex scroll-mt-4 flex-col gap-4 border-t-4 border-anthracite bg-sheet p-6 sm:p-8">
          <span className="eyebrow text-muted">Objektbau</span>
          <h2 className="h2-sm">Projektanfrage</h2>
          <p className="text-ink-2">Für Architekten, Planer, Bauträger und Gewerbe. Gern mit Plänen oder Leistungsverzeichnis.</p>
          <AnfrageForm variante="projekt" submitLabel="Projektanfrage senden" />
        </section>
        <section id="privat" className="flex scroll-mt-4 flex-col gap-4 border-t-4 border-accent bg-sheet p-6 sm:p-8">
          <span className="eyebrow text-privat">Privat</span>
          <h2 className="h2-sm">Privatanfrage</h2>
          <p className="text-ink-2">Für Ihr Haus, Ihre Wohnung oder Ihr Grundstück. Fotos und ungefähre Maße genügen.</p>
          <AnfrageForm variante="privat" />
        </section>
      </div>
    </>
  );
}
