import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { AufgabenProfil, Bewerbung, Vorteile } from "@/components/Karriere";
import { karriereFaq, stellen, stellenDatum } from "@/lib/karriere";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return stellen.map((s) => ({ stelle: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/karriere/[stelle]">) {
  const { stelle: slug } = await params;
  const stelle = stellen.find((s) => s.slug === slug);
  if (!stelle) return {};
  return pageMeta({
    title: `${stelle.title} in Herford`,
    description: `${stelle.text} Unbefristet, ${stelle.lohn ? `${stelle.lohn.min} bis ${stelle.lohn.max} €/Std., ` : ""}30 Tage Urlaub. Bewerbung in 2 Minuten ohne Anschreiben.`,
    path: `/karriere/${stelle.slug}/`,
  });
}

export default async function Page({ params }: PageProps<"/karriere/[stelle]">) {
  const { stelle: slug } = await params;
  const index = stellen.findIndex((s) => s.slug === slug);
  if (index < 0) notFound();
  const stelle = stellen[index];
  const path = `/karriere/${stelle.slug}/`;
  return (
    <>
      <section className="dark pt-10 pb-16 sm:pb-20">
        <div className="wrap grid gap-6">
          <Breadcrumbs onDark items={[{ name: "Karriere", path: "/karriere/" }, { name: stelle.short, path }]} />
          <span className="eyebrow text-on-dark-muted">{stelle.tag}</span>
          <h1 className="h1 max-w-[880px]">{stelle.title} in Herford</h1>
          <p className="lede text-on-dark-2">{stelle.text} Feste Arbeitszeiten, unbefristeter Vertrag und ein Team, das zusammenhält.</p>
          <ul className="flex flex-wrap gap-2">
            {["Vollzeit", "Unbefristet", stelle.meta.split(" · ")[0], stelle.lohn && `${stelle.lohn.min} bis ${stelle.lohn.max} € / Std.`]
              .filter(Boolean)
              .map((c) => <li key={c} className="chip">{c}</li>)}
          </ul>
          <a href="#bewerbung" className="btn self-start">In 2 Minuten bewerben</a>
        </div>
      </section>
      <AufgabenProfil aufgaben={stelle.aufgaben} profil={stelle.profil} />
      <Vorteile />
      <Bewerbung start={index} />
      <Faq titel="Häufige Fragen zur Bewerbung" items={karriereFaq} className="section pt-0" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: stelle.title,
          description: `<p>${stelle.text}</p><h3>Deine Aufgaben</h3><ul>${stelle.aufgaben.map((a) => `<li>${a}</li>`).join("")}</ul><h3>Dein Profil</h3><ul>${stelle.profil.map((a) => `<li>${a}</li>`).join("")}</ul>`,
          datePosted: stellenDatum,
          employmentType: "FULL_TIME",
          directApply: true,
          hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url, logo: `${site.url}/logo-ws.jpg` },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              postalCode: site.address.zip,
              addressLocality: site.address.city,
              addressRegion: site.address.region,
              addressCountry: site.address.country,
            },
          },
          ...(stelle.lohn
            ? { baseSalary: { "@type": "MonetaryAmount", currency: "EUR", value: { "@type": "QuantitativeValue", minValue: stelle.lohn.min, maxValue: stelle.lohn.max, unitText: "HOUR" } } }
            : {}),
        }}
      />
    </>
  );
}
