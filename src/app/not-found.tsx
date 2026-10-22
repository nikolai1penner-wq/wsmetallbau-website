import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap pt-16 pb-20">
      <h1 className="h1 mt-6">Seite nicht gefunden</h1>
      <p className="lede mt-5 text-ink-2">Die Seite gibt es nicht (mehr). Hier geht es weiter:</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <Link href="/objektbau/" className="btn">Objektbau</Link>
        <Link href="/privat/" className="btn">Privat</Link>
        <Link href="/anfrage/" className="link self-center">Anfrage</Link>
      </div>
    </div>
  );
}
