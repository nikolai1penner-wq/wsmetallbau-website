import Link from "next/link";

export function CtaBand({ segment }: { segment: "objektbau" | "privat" }) {
  const b2b = segment === "objektbau";
  return (
    <section className="mt-16 border-[1.5px] border-ink bg-sheet p-6 sm:p-8">
      <h2 className="h2">{b2b ? "Projekt besprechen" : "Unverbindlich anfragen"}</h2>
      <p className="mt-3 max-w-[60ch] text-muted">
        {b2b
          ? "Schicken Sie uns Pläne oder Leistungsverzeichnis. Die Projektleitung meldet sich an Werktagen innerhalb von 24 Stunden."
          : "Kurz beschreiben, Fotos und ungefähre Maße mitschicken. Wir melden uns mit einer ersten Einschätzung."}
      </p>
      <Link href={b2b ? "/anfrage/#projekt" : "/anfrage/#privat"} className="btn mt-6">
        {b2b ? "Projektanfrage stellen" : "Privatanfrage stellen"}
      </Link>
    </section>
  );
}
