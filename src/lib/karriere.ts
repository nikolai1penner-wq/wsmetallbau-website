// Stellen und Konditionen nach Screendesign (Board „Karriere“), Branchenstandard auf Nikolais Wunsch.
// TODO: Lohnspanne, Urlaub und Zusatzleistungen von W&S bestätigen lassen.
export type Stelle = {
  slug: string;
  title: string;
  short: string;
  tag: string;
  text: string;
  meta: string;
  lohn?: { min: number; max: number };
  aufgaben: string[];
  profil: string[];
};

const aufgabenWerkstatt = [
  "Fertigung von Treppen, Balkonen, Geländern, Lofttüren und Sonderkonstruktionen in unserer Werkstatt in Herford",
  "Schweißen mit MAG und WIG, dazu Zuschnitt, Bohren, Schleifen und Vormontage",
  "Montage bei Privatkunden und auf Objektbaustellen in OWL",
  "Arbeiten nach Werkstattzeichnung, Aufmaß vor Ort nach Einarbeitung",
];

export const stellen: Stelle[] = [
  {
    slug: "metallbauer",
    title: "Metallbauer / Konstruktionsmechaniker (m/w/d)",
    short: "Metallbauer",
    tag: "Vollzeit · Werkstatt und Montage",
    text: "Du fertigst Treppen, Balkone, Geländer und Lofttüren und baust sie beim Kunden ein.",
    meta: "Herford · ab sofort · 18 bis 23 € / Std.",
    lohn: { min: 18, max: 23 },
    aufgaben: aufgabenWerkstatt,
    profil: [
      "Ausbildung als Metallbauer, Konstruktionsmechaniker oder vergleichbar",
      "Erfahrung im Schweißen, ein Schweißschein ist von Vorteil",
      "Führerschein Klasse B, BE ist von Vorteil",
      "Sorgfalt, Spaß an sauberer Arbeit und am Arbeiten im Team",
      "Quereinsteiger mit handwerklicher Erfahrung sind willkommen",
    ],
  },
  {
    slug: "monteur-metallbau",
    title: "Monteur Metallbau (m/w/d)",
    short: "Monteur",
    tag: "Vollzeit · Montage",
    text: "Du montierst unsere Konstruktionen bei Privatkunden und auf Objektbaustellen in OWL.",
    meta: "Herford + 100 km · Führerschein B · 18 bis 22 € / Std.",
    lohn: { min: 18, max: 22 },
    aufgaben: [
      "Montage von Treppen, Balkonen, Geländern, Vordächern und Lofttüren beim Kunden",
      "Anpassen, Schweißen und Verschrauben vor Ort",
      "Einbau auf Objektbaustellen in Abstimmung mit der Bauleitung",
      "Aufmaß und Übergabe an den Kunden nach Einarbeitung",
    ],
    profil: [
      "Ausbildung im Metallbau oder Erfahrung in der Montage",
      "Führerschein Klasse B, BE ist von Vorteil",
      "Sicherer Umgang mit Werkzeug, Schweißgerät und Hebezeug",
      "Zuverlässigkeit und freundliches Auftreten beim Kunden",
      "Quereinsteiger mit handwerklicher Erfahrung sind willkommen",
    ],
  },
];

export const initiativ = {
  short: "Initiativ",
  tag: "Initiativ",
  title: "Nichts Passendes dabei?",
  text: "Schweißer, Helfer oder Quereinsteiger mit handwerklicher Erfahrung: Melde dich einfach.",
  meta: "Wir melden uns, wenn es passt.",
};

export const vorteile = [
  { k: "18 bis 23 € / Std.", v: "Je nach Erfahrung, pünktlich zum Monatsende, dazu Urlaubs- und Weihnachtsgeld" },
  { k: "Unbefristet", v: "Fester Arbeitsvertrag direkt bei uns, keine Zeitarbeit" },
  { k: "30 Tage", v: "Urlaub im Jahr, Überstunden werden bezahlt oder ausgeglichen" },
  { k: "Mo bis Fr", v: "Feste Arbeitszeiten, Baustellen im Umkreis von 100 km, abends zuhause" },
  { k: "Ausstattung", v: "Arbeitskleidung, Werkzeug und Firmenfahrzeug für die Montage" },
  { k: "Weiterbildung", v: "Schweißscheine und Lehrgänge bezahlen wir" },
];

export const bewerbungSchritte = [
  { title: "Kurzbewerbung", text: "Name und Telefonnummer eintragen. Dauert zwei Minuten, ohne Anschreiben." },
  { title: "Wir rufen an", text: "Innerhalb von zwei Werktagen melden wir uns für ein kurzes Gespräch." },
  { title: "Kennenlernen", text: "Du schaust dir die Werkstatt an, auf Wunsch mit Probearbeitstag." },
];

export const karriereFaq = [
  { q: "Brauche ich ein Anschreiben?", a: "Nein. Name und Telefonnummer reichen. Einen Lebenslauf kannst du anhängen, musst du aber nicht." },
  { q: "Was verdient ein Metallbauer bei W&S?", a: "Je nach Erfahrung zwischen 18 und 23 € pro Stunde, dazu Urlaubs- und Weihnachtsgeld. Die genaue Höhe besprechen wir im Gespräch." },
  { q: "Wo liegen die Baustellen?", a: "In Herford, Bielefeld und ganz OWL, im Umkreis von etwa 100 km um unsere Werkstatt." },
  { q: "Kann ich als Quereinsteiger anfangen?", a: "Ja, wenn du handwerkliche Erfahrung mitbringst, zum Beispiel aus Schlosserei, Landmaschinen oder Stahlbau." },
  { q: "Muss ich auf Montage übernachten?", a: "In der Regel nicht. Unsere Baustellen liegen im Umkreis von etwa 100 km um Herford, abends bist du zuhause." },
  { q: "Gibt es einen Probearbeitstag?", a: "Gern. So lernst du das Team und die Werkstatt kennen, bevor du dich entscheidest." },
];

/** Datum der Veröffentlichung für das JobPosting-Markup */
export const stellenDatum = "2026-10-22";
