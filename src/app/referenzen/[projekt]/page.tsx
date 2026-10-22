import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { referenzen } from "@/lib/referenzen";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return referenzen.map((r) => ({ projekt: r.slug }));
}

const find = (slug: string) => referenzen.find((r) => r.slug === slug);

export async function generateMetadata({ params }: PageProps<"/referenzen/[projekt]">) {
  const r = find((await params).projekt);
  if (!r) return {};
  return pageMeta({
    title: `${r.title} in ${r.ort}`,
    description: `${r.leistung} in ${r.ort} (${r.jahr}). ${r.herausforderung}`.slice(0, 160),
    path: `/referenzen/${r.slug}/`,
    noindex: r.draft,
  });
}

export default async function Page({ params }: PageProps<"/referenzen/[projekt]">) {
  const r = find((await params).projekt);
  if (!r) notFound();
  const facts = [
    ["Ort", r.ort],
    ["Jahr", String(r.jahr)],
    ["Leistung", r.leistung],
    ["Auftraggeber", r.auftraggeber],
    ["Architektur", r.architekt],
    ["Material", r.material],
    ["Oberfläche", r.oberflaeche],
    ["Umfang", r.umfang],
    ["Bauzeit", r.bauzeit],
  ].filter((f): f is [string, string] => Boolean(f[1]));
  return (
    <article className="wrap pt-10 pb-20">
      <Breadcrumbs items={[{ name: "Referenzen", path: "/referenzen/" }, { name: r.title, path: `/referenzen/${r.slug}/` }]} />
      <h1 className="h1 mt-6">{r.title}</h1>
      <dl className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
        {facts.map(([k, v]) => (
          <div key={k} className="bg-sheet p-4">
            <dt className="label">{k}</dt>
            <dd className="font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div><h2 className="h3">Herausforderung</h2><p className="mt-2">{r.herausforderung}</p></div>
        <div><h2 className="h3">Lösung</h2><p className="mt-2">{r.loesung}</p></div>
      </section>
      <CtaBand />
    </article>
  );
}
