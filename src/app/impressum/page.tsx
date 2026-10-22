import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Impressum",
  description: `Impressum der ${site.legalName}, Herford.`,
  path: "/impressum/",
  noindex: true,
});

export default function Page() {
  return (
    <div className="wrap pt-8">
      <Breadcrumbs items={[{ name: "Impressum", path: "/impressum/" }]} />
      <h1 className="h1">Impressum</h1>
      <div className="mt-6 grid max-w-[60ch] gap-4">
        <p>
          {site.legalName}
          <br />
          {site.address.street}
          <br />
          {site.address.zip} {site.address.city}
        </p>
        <p>Vertreten durch die Gesellschafter: {site.owners.join(", ")}</p>
        <p>
          Berufsbezeichnung: {site.berufsbezeichnung}
          <br />
          Zuständige Kammer: {site.kammer}, Mitgliedsnummer {site.kammerNr}
          <br />
          Berufsrechtliche Regelung: Handwerksordnung
          <br />
          Umsatzsteuer-ID: {site.ustId}
        </p>
        <p>Wir nehmen nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.</p>
        <p>
          E-Mail: <a href={`mailto:${site.email}`} className="link">{site.email}</a>
          {site.phone && <><br />Telefon: {site.phone}</>}
        </p>
      </div>
    </div>
  );
}
