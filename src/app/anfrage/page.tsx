import { AnfrageForm } from "@/components/AnfrageForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { site, telHref } from "@/lib/site";

export const metadata = pageMeta({
  title: "Anfrage: Projekt oder Privatauftrag",
  description: "Projektanfrage mit Plan-Upload für Architekten und Bauträger oder kurze Anfrage für Privatkunden. Antwort an Werktagen innerhalb von 24 Stunden.",
  path: "/anfrage/",
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Anfrage", path: "/anfrage/" }]} />
      <h1 className="h1">Anfrage</h1>
      <p className="lede mt-5">
        Wählen Sie den passenden Weg. Wir melden uns an Werktagen innerhalb von 24 Stunden
        {site.phone && <>, oder rufen Sie direkt an: <a href={telHref(site.phone)} className="link">{site.phone}</a></>}.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <section id="projekt" className="panel scroll-mt-6 border-t-4 border-t-steel p-6">
          <span className="tag objektbau w-fit">Objektbau</span>
          <h2 className="h2">Projektanfrage</h2>
          <p className="mb-4 text-muted">Für Architekten, Planer, Bauträger und Gewerbe.</p>
          <AnfrageForm art="projekt" />
        </section>
        <section id="privat" className="panel scroll-mt-6 border-t-4 border-t-[var(--b2c)] p-6">
          <span className="tag privat w-fit">Privat</span>
          <h2 className="h2">Privatanfrage</h2>
          <p className="mb-4 text-muted">Für Ihr Haus, Ihre Wohnung oder Ihr Grundstück.</p>
          <AnfrageForm art="privat" />
        </section>
      </div>
    </div>
  );
}
