"use client";

import { useState } from "react";

const erfahrung = ["Weniger als 1 Jahr", "1 bis 3 Jahre", "3 bis 10 Jahre", "Mehr als 10 Jahre"];

/** Kurzbewerbung: Stelle wählen, Name und Telefon, Lebenslauf optional */
export function BewerbungForm({ stellen, start = 0 }: { stellen: string[]; start?: number }) {
  const [stelle, setStelle] = useState(start);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/anfrage/", { method: "POST", body: new FormData(e.currentTarget) }).catch(() => null);
    if (res?.ok) return setState("ok");
    setError((await res?.json().catch(() => null))?.error ?? "Senden fehlgeschlagen. Ruf uns gern an oder schreib uns eine E-Mail.");
    setState("error");
  }

  if (state === "ok") {
    return <p role="status" className="text-lg font-semibold">Danke für deine Bewerbung! Wir melden uns innerhalb von zwei Werktagen telefonisch bei dir.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap gap-4" encType="multipart/form-data">
      <input type="hidden" name="art" value="bewerbung" />
      <input type="hidden" name="stelle" value={stellen[stelle]} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <fieldset className="flex flex-[1_1_100%] flex-col gap-2">
        <legend className="mb-2 text-sm font-medium">Ich bewerbe mich als</legend>
        <div className="flex flex-wrap gap-2">
          {stellen.map((s, i) => (
            <button
              key={s}
              type="button"
              aria-pressed={stelle === i}
              onClick={() => setStelle(i)}
              className={`min-h-11 cursor-pointer border-[1.5px] border-anthracite px-4 text-[15px] font-semibold ${stelle === i ? "bg-anthracite text-on-dark" : "bg-white text-ink"}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="flex min-w-0 flex-[1_1_200px] flex-col gap-1 text-sm font-medium">
        <span>Name *</span>
        <input name="name" required autoComplete="name" className="input" />
      </label>
      <label className="flex min-w-0 flex-[1_1_200px] flex-col gap-1 text-sm font-medium">
        <span>Telefon *</span>
        <input name="telefon" type="tel" required autoComplete="tel" className="input" />
      </label>
      <label className="flex min-w-0 flex-[1_1_200px] flex-col gap-1 text-sm font-medium">
        <span>Berufserfahrung</span>
        <select name="erfahrung" className="input" defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          {erfahrung.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label className="flex min-w-0 flex-[1_1_200px] flex-col gap-1 text-sm font-medium">
        <span>Frühester Start</span>
        <input name="start" placeholder="z. B. sofort oder 1. Februar" className="input" />
      </label>
      <label className="flex min-w-0 flex-[1_1_100%] flex-col gap-1 text-sm font-medium">
        <span>Lebenslauf (optional, PDF oder Foto, max. 4 MB)</span>
        <input
          name="dateien"
          type="file"
          accept=".pdf,image/*"
          className="w-full cursor-pointer border-[1.5px] border-dashed border-line-strong bg-white p-4 text-center font-normal text-muted file:mr-3 file:border-0 file:bg-anthracite file:px-3 file:py-2 file:text-on-dark"
        />
      </label>
      <label className="flex flex-[1_1_100%] gap-2 text-sm">
        <input type="checkbox" name="datenschutz" required className="mt-1 size-4 shrink-0" />
        <span>Ich habe die <a href="/datenschutz/" className="link">Datenschutzhinweise</a> gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung der Bewerbung gespeichert werden. *</span>
      </label>
      {state === "error" && <p role="alert" className="flex-[1_1_100%] font-medium text-[#b42318]">{error}</p>}
      <button type="submit" className="btn min-h-12 flex-[1_1_100%]" disabled={state === "sending"}>
        {state === "sending" ? "Wird gesendet …" : `Bewerbung als ${stellen[stelle]} absenden`}
      </button>
    </form>
  );
}
