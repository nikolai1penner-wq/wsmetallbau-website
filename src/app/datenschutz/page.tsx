import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von wsmetall.de.",
  path: "/datenschutz/",
  noindex: true,
});

export default function Page() {
  return (
    <div className="wrap pt-10 pb-20">
      <Breadcrumbs items={[{ name: "Datenschutz", path: "/datenschutz/" }]} />
      <h1 className="h1 mt-6">Datenschutz</h1>
      <p className="mt-5">{/* TODO: Text aus der bestehenden WordPress-Seite übernehmen und um Vercel, Formular-Versand und Tracking ergänzen */}Die Datenschutzerklärung wird vor dem Livegang übernommen und an die neue Technik angepasst.</p>
    </div>
  );
}
