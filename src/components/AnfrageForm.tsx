"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "number" | "file";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  half?: boolean;
  accept?: string;
};

const name: Field = { name: "name", label: "Name", required: true, half: true };
const email: Field = { name: "email", label: "E-Mail", type: "email", required: true, half: true };
const telefon: Field = { name: "telefon", label: "Telefon (optional)", type: "tel", half: true };
const gewerk: Field = {
  name: "gewerk",
  label: "Leistung",
  type: "select",
  half: true,
  options: ["Balkonanlage", "Treppe", "Geländer", "Sonderkonstruktion", "Loft-Trennwand", "Glas / Überdachung", "Stahlbau Industrie", "Sonstiges"],
};
const leistungsphase: Field = {
  name: "leistungsphase",
  label: "Leistungsphase",
  type: "select",
  half: true,
  options: ["LP 1–2 Grundlagen", "LP 3–5 Planung", "LP 6–7 Ausschreibung", "LP 8 Ausführung", "Sonstiges"],
};
const plaene: Field = { name: "dateien", label: "Pläne oder LV hochladen (PDF, DWG, max. 4 MB)", type: "file", accept: ".pdf,.dwg,.dxf,.zip,image/*" };
const fotos: Field = { name: "dateien", label: "Fotos (max. 4 MB)", type: "file", accept: "image/*" };

const varianten = {
  projekt: [
    { name: "firma", label: "Büro / Firma", required: true, half: true },
    name,
    email,
    telefon,
    { name: "projekt", label: "Projekt und Ort", required: true, placeholder: "z. B. MFH Bielefeld-Schildesche" },
    gewerk,
    leistungsphase,
    { name: "zeitraum", label: "Ausführungszeitraum", half: true },
    plaene,
    { name: "nachricht", label: "Beschreibung", type: "textarea" },
  ],
  "projekt-kurz": [
    { name: "projekt", label: "Projekt und Ort", required: true, placeholder: "z. B. MFH Bielefeld-Schildesche" },
    gewerk,
    leistungsphase,
    plaene,
    name,
    email,
  ],
  privat: [
    name,
    email,
    telefon,
    { name: "ort", label: "Ort", required: true, half: true },
    {
      name: "leistung",
      label: "Was planen Sie?",
      type: "select",
      required: true,
      options: ["Lofttür / Trennwand", "Geländer", "Treppe", "Balkon", "Vordach", "Fenstergitter", "Tor / Zaun", "Carport", "Sonstiges"],
    },
    fotos,
    { name: "nachricht", label: "Maße und Wünsche", type: "textarea" },
  ],
  loft: [
    { name: "breite", label: "Breite der Öffnung (cm)", type: "number", half: true },
    { name: "hoehe", label: "Höhe der Öffnung (cm)", type: "number", half: true },
    { name: "tuerart", label: "Türart", type: "select", half: true, options: ["Drehtür einflügelig", "Drehtür zweiflügelig", "Schiebetür", "Festelement / Trennwand", "Sonstiges"] },
    { name: "farbe", label: "Farbe (RAL oder DB)", placeholder: "z. B. RAL 9005", half: true },
    { name: "dateien", label: "Foto der Öffnung (max. 4 MB)", type: "file", accept: "image/*" },
    name,
    email,
    { name: "ort", label: "Ort", required: true, half: true },
    telefon,
  ],
} satisfies Record<string, Field[]>;

export type AnfrageVariante = keyof typeof varianten;

export function AnfrageForm({ variante, submitLabel = "Anfrage senden" }: { variante: AnfrageVariante; submitLabel?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const art = variante.startsWith("projekt") ? "projekt" : "privat";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/anfrage/", { method: "POST", body: new FormData(e.currentTarget) }).catch(() => null);
    if (res?.ok) return setState("ok");
    setError((await res?.json().catch(() => null))?.error ?? "Senden fehlgeschlagen. Bitte schreiben Sie uns eine E-Mail.");
    setState("error");
  }

  if (state === "ok") {
    return <p role="status" className="text-lg font-semibold">Danke, Ihre Anfrage ist angekommen. Wir melden uns innerhalb eines Werktags.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap gap-4" encType="multipart/form-data">
      <input type="hidden" name="art" value={art} />
      {variante === "loft" && <input type="hidden" name="leistung" value="Lofttür / Trennwand" />}
      {/* Honeypot gegen Spam-Bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {(varianten[variante] as Field[]).map((f) => (
        <label key={f.name} className={`flex min-w-0 flex-col gap-1 text-sm font-medium ${f.half ? "flex-[1_1_200px]" : "flex-[1_1_100%]"}`}>
          <span>{f.label}{f.required && " *"}</span>
          {f.type === "textarea" ? (
            <textarea name={f.name} rows={4} className="input" />
          ) : f.type === "select" ? (
            <select name={f.name} required={f.required} className="input" defaultValue="">
              <option value="" disabled>Bitte wählen</option>
              {f.options?.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : f.type === "file" ? (
            <input
              name={f.name}
              type="file"
              multiple
              accept={f.accept}
              className="w-full cursor-pointer border-[1.5px] border-dashed border-line-strong bg-white p-4 text-center font-normal text-muted file:mr-3 file:border-0 file:bg-anthracite file:px-3 file:py-2 file:text-on-dark"
            />
          ) : (
            <input name={f.name} type={f.type ?? "text"} required={f.required} placeholder={f.placeholder} inputMode={f.type === "number" ? "numeric" : undefined} className="input" />
          )}
        </label>
      ))}
      <label className="flex flex-[1_1_100%] gap-2 text-sm">
        <input type="checkbox" name="datenschutz" required className="mt-1 size-4 shrink-0" />
        <span>Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden (siehe <a href="/datenschutz/" className="link">Datenschutz</a>). *</span>
      </label>
      {state === "error" && <p role="alert" className="flex-[1_1_100%] font-medium text-[#b42318]">{error}</p>}
      <button type="submit" className="btn min-h-12 flex-[1_1_100%]" disabled={state === "sending"}>
        {state === "sending" ? "Wird gesendet …" : submitLabel}
      </button>
    </form>
  );
}
