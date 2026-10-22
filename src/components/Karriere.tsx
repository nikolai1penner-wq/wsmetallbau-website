import { bewerbungSchritte, initiativ, stellen, vorteile } from "@/lib/karriere";
import { site, telHref } from "@/lib/site";
import { BewerbungForm } from "./BewerbungForm";

export function Vorteile() {
  return (
    <section className="band section">
      <div className="wrap grid gap-8">
        <div className="grid gap-3">
          <span className="eyebrow text-muted">Was wir bieten</span>
          <h2 className="h2">Gute Arbeit, fair bezahlt</h2>
        </div>
        <dl className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {vorteile.map((b) => (
            <div key={b.k} className="flex flex-col gap-1 border-t-[1.5px] border-anthracite py-5">
              <dt className="font-display text-2xl leading-tight font-bold">{b.k}</dt>
              <dd className="text-ink-2">{b.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function AufgabenProfil({ aufgaben, profil }: { aufgaben: string[]; profil: string[] }) {
  return (
    <section className="section">
      <div className="wrap grid gap-12 md:grid-cols-2">
        {[
          { eyebrow: "Deine Aufgaben", titel: "Was du bei uns baust", liste: aufgaben },
          { eyebrow: "Dein Profil", titel: "Was du mitbringst", liste: profil },
        ].map((b) => (
          <div key={b.titel} className="grid content-start gap-4">
            <span className="eyebrow text-muted">{b.eyebrow}</span>
            <h2 className="h2-sm">{b.titel}</h2>
            <ul className="grid gap-2 pl-5 text-ink-2 [list-style:square]">
              {b.liste.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Bewerbung({ start = 0 }: { start?: number }) {
  return (
    <>
      <section className="dark section">
        <div className="wrap grid gap-10">
          <h2 className="h2">In drei Schritten zum neuen Job</h2>
          <ol className="grid border-t-[1.5px] border-line-strong sm:grid-cols-3">
            {bewerbungSchritte.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2.5 pt-6 pr-6 pb-2">
                <span className="font-display text-[40px] leading-none font-bold text-accent-light">{i + 1}</span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-[15px] text-on-dark-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="bewerbung" className="section scroll-mt-4">
        <div className="wrap flex flex-wrap gap-14">
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
            <h2 className="h2">Jetzt in zwei Minuten bewerben</h2>
            <p className="text-ink-2">Kein Anschreiben, kein Zeugnisstapel. Name und Telefonnummer reichen, den Rest klären wir im Gespräch.</p>
            {site.phone && (
              <p>
                Lieber anrufen?{" "}
                <a href={telHref(site.phone)} className="link font-mono">{site.phone}</a>
              </p>
            )}
            <p>Oder per E-Mail: <a href={`mailto:${site.email}`} className="link">{site.email}</a></p>
          </div>
          <div className="min-w-0 flex-[1_1_520px] bg-sheet p-6 sm:p-8">
            <BewerbungForm stellen={[...stellen.map((s) => s.short), initiativ.short]} start={start} />
          </div>
        </div>
      </section>
    </>
  );
}
