import { JsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

/** Aufklappbare Fragen plus FAQPage-Markup für Google */
export function Faq({ titel, items, className = "section" }: { titel: string; items: FaqItem[]; className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto grid max-w-[880px] gap-5 px-4 sm:px-8">
        <h2 className="h2-sm">{titel}</h2>
        <div className="rule">
          {items.map((f) => (
            <details key={f.q} className="border-b border-line py-4">
              <summary className="min-h-7 cursor-pointer text-lg font-semibold">{f.q}</summary>
              <p className="mt-2.5 text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}
