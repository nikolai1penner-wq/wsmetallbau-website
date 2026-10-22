"use client";

import { useState } from "react";
import type { Bild } from "@/lib/bilder";
import type { Leistung } from "@/lib/leistungen";
import { Foto } from "./Foto";

export function Varianten({ varianten, bilder }: { varianten: NonNullable<Leistung["varianten"]>; bilder: Bild[] }) {
  const [aktiv, setAktiv] = useState(0);
  const v = varianten[aktiv];
  return (
    <div className="flex flex-wrap gap-10">
      <div role="group" aria-label="Variante wählen" className="flex min-w-0 flex-[1_1_320px] flex-col gap-2.5">
        {varianten.map((x, i) => (
          <button
            key={x.label}
            type="button"
            aria-pressed={i === aktiv}
            onClick={() => setAktiv(i)}
            className={`flex min-h-16 flex-col gap-0.5 border-[1.5px] border-anthracite px-[18px] py-4 text-left ${i === aktiv ? "bg-anthracite text-on-dark" : "bg-white text-ink hover:bg-sheet"}`}
          >
            <span className="text-lg font-semibold">{x.label}</span>
            <span className="text-sm opacity-85">{x.hint}</span>
          </button>
        ))}
      </div>
      <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-4">
        <Foto bild={bilder[aktiv + 1]} label={v.label} className="h-[260px] sm:h-[340px]" sizes="(min-width: 1024px) 760px, 100vw" />
        <p>{v.text}</p>
      </div>
    </div>
  );
}
