// Referenzen als Fallstudien (SEO-Konzept, Abschnitt 06). Später aus dem Headless-CMS.
export type Referenz = {
  slug: string;
  title: string;
  ort: string;
  jahr: number;
  leistung: string;
  auftraggeber?: string;
  architekt?: string;
  material?: string;
  oberflaeche?: string;
  umfang?: string;
  bauzeit?: string;
  herausforderung: string;
  loesung: string;
  segment: "objektbau" | "privat";
  /** Platzhalter werden nicht indexiert und nicht in die Sitemap aufgenommen */
  draft?: boolean;
};

export const referenzen: Referenz[] = [
  {
    slug: "beispielprojekt",
    title: "Beispielprojekt (Platzhalter)",
    ort: "Herford",
    jahr: 2026,
    leistung: "Treppen und Geländer",
    material: "Stahl",
    oberflaeche: "feuerverzinkt",
    herausforderung: "Platzhalter: Hier steht später die besondere Anforderung des Projekts.",
    loesung: "Platzhalter: Hier steht später, wie wir sie gelöst haben, mit Zahlen zu Umfang und Bauzeit.",
    segment: "objektbau",
    draft: true,
  },
];

export const publishedReferenzen = referenzen.filter((r) => !r.draft);
