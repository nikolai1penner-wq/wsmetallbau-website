"use client";

import { useState } from "react";

type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "textarea" | "select"; required?: boolean; options?: string[] };

const fields: Record<"projekt" | "privat", Field[]> = {
  projekt: [
    { name: "firma", label: "Büro / Firma", required: true },
    { name: "name", label: "Ansprechpartner", required: true },
    { name: "email", label: "E-Mail", type: "email", required: true },
    { name: "telefon", label: "Telefon", type: "tel" },
    { name: "projekt", label: "Projektname und Ort", required: true },
    { name: "leistungsphase", label: "Leistungsphase", type: "select", options: ["LP 1–2", "LP 3–5", "LP 6–7 (Ausschreibung/Vergabe)", "LP 8 (Ausführung)", "Sonstiges"] },
    { name: "gewerk", label: "Gewerk / Leistung", type: "select", options: ["Sonderkonstruktion", "Treppen", "Balkonanlagen", "Geländer", "Fassade / Überdachung", "Stahlbau Industrie", "Sonstiges"] },
    { name: "zeitraum", label: "Ausführungszeitraum" },
    { name: "nachricht", label: "Beschreibung", type: "textarea" },
  ],
  privat: [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "E-Mail", type: "email", required: true },
    { name: "telefon", label: "Telefon", type: "tel" },
    { name: "leistung", label: "Was planen Sie?", type: "select", required: true, options: ["Geländer", "Balkon", "Treppe", "Loft-Tür / Trennwand", "Vordach", "Tor / Zaun", "Carport", "Sonstiges"] },
    { name: "ort", label: "Ort", required: true },
    { name: "nachricht", label: "Maße und Wünsche", type: "textarea" },
  ],
};

export function AnfrageForm({ art }: { art: "projekt" | "privat" }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/anfrage/", { method: "POST", body: new FormData(e.currentTarget) }).catch(() => null);
    if (res?.ok) return setState("ok");
    setError((await res?.json().catch(() => null))?.error ?? "Senden fehlgeschlagen. Bitte schreiben Sie uns eine E-Mail.");
    setState("error");
  }

  if (state === "ok") {
    return <p className="panel" role="status">Danke, Ihre Anfrage ist angekommen. Wir melden uns in Kürze.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" encType="multipart/form-data">
      <input type="hidden" name="art" value={art} />
      {/* Honeypot gegen Spam-Bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        {fields[art].map((f) => (
          <label key={f.name} className={`grid gap-1 ${f.type === "textarea" ? "sm:col-span-2" : ""}`}>
            <span className="text-sm font-medium">{f.label}{f.required && " *"}</span>
            {f.type === "textarea" ? (
              <textarea name={f.name} rows={5} className="input" />
            ) : f.type === "select" ? (
              <select name={f.name} required={f.required} className="input" defaultValue="">
                <option value="" disabled>Bitte wählen</option>
                {f.options?.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input name={f.name} type={f.type ?? "text"} required={f.required} className="input" />
            )}
          </label>
        ))}
        <label className="grid gap-1 sm:col-span-2">
          <span className="text-sm font-medium">{art === "projekt" ? "Pläne oder LV (PDF, DWG, max. 4 MB)" : "Fotos (max. 4 MB)"}</span>
          <input name="dateien" type="file" multiple accept={art === "projekt" ? ".pdf,.dwg,.dxf,.zip,image/*" : "image/*"} className="input" />
        </label>
      </div>
      <label className="flex gap-2 text-sm">
        <input type="checkbox" name="datenschutz" required className="mt-1" />
        <span>Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden (siehe <a href="/datenschutz/" className="link">Datenschutz</a>). *</span>
      </label>
      {state === "error" && <p role="alert" className="text-red-700">{error}</p>}
      <button type="submit" className="btn w-fit" disabled={state === "sending"}>
        {state === "sending" ? "Wird gesendet …" : art === "projekt" ? "Projektanfrage senden" : "Anfrage senden"}
      </button>
    </form>
  );
}
