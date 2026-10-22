import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-accent py-14 text-accent-ink sm:py-[72px]">
      <div className="wrap flex flex-wrap items-center justify-between gap-8">
        <div className="grid max-w-[640px] gap-2.5">
          <h2 className="h2">Erzählen Sie uns von Ihrem Projekt</h2>
          <p className="text-lg">Pläne, Fotos oder eine Skizze genügen. Wir melden uns innerhalb eines Werktags.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/anfrage/#projekt" className="btn-dark">Projektanfrage mit Plänen</Link>
          <Link href="/anfrage/#privat" className="btn-ghost">Privatanfrage mit Fotos</Link>
        </div>
      </div>
    </section>
  );
}
