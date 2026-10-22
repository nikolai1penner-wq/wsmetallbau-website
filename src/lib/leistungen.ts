export type Leistung = {
  slug: string;
  title: string;
  /** Title-Tag ohne Markenzusatz */
  metaTitle: string;
  description: string;
  intro: string;
  points: string[];
  /** Pendant im jeweils anderen Hub, damit beide Seiten aufeinander verlinken */
  counterpart?: string;
};

export const objektbau: Leistung[] = [
  {
    slug: "sonderkonstruktionen",
    title: "Sonderkonstruktionen aus Stahl",
    metaTitle: "Sonderkonstruktionen Stahl & Metallbau in OWL",
    description:
      "Individuelle Stahl- und Stahl-Glas-Konstruktionen für Architekten und Bauträger: von der Skizze über Werkplanung und Fertigung bis zur Montage im Raum Herford und OWL.",
    intro:
      "Wenn es kein Standardprodukt gibt, fängt unsere Arbeit an. Wir entwickeln mit Planern Konstruktionen mit besonderer Geometrie, Spannweite oder Materialkombination und übernehmen Werkplanung, Fertigung und Montage aus einer Hand.",
    points: [
      "Stahl-, Edelstahl- und Stahl-Glas-Konstruktionen nach Entwurf",
      "Werkplanung und Abstimmung mit Tragwerksplanung",
      "Fertigung im eigenen Betrieb in Herford",
      "Montage mit eigenen Teams",
    ],
  },
  {
    slug: "treppen",
    title: "Stahltreppen für den Objektbau",
    metaTitle: "Stahltreppen für Objektbau: Wendel-, Außen- & Fluchttreppen",
    description:
      "Stahl-, Wendel-, Außen- und Fluchttreppen für Wohnungsbau, Gewerbe und öffentliche Bauten. Planung nach DIN 18065, Fertigung und Montage aus OWL.",
    intro:
      "Wir fertigen Treppen für Mehrfamilienhäuser, Gewerbe- und Industriebauten: als Haupt-, Außen- oder Fluchttreppe, feuerverzinkt oder beschichtet.",
    points: ["Wendel- und Spindeltreppen", "Außen- und Fluchttreppen, feuerverzinkt", "Podeste und Laubengänge", "Planung nach DIN 18065"],
    counterpart: "/privat/treppen/",
  },
  {
    slug: "balkonanlagen",
    title: "Balkonanlagen für den Wohnungsbau",
    metaTitle: "Balkonanlagen & Vorstellbalkone für Wohnungsbau",
    description:
      "Vorstellbalkone und Balkonanlagen aus Stahl für Neubau und Sanierung im Geschosswohnungsbau. Serienfertigung, Termintreue und Montage im Raum Herford, Bielefeld und OWL.",
    intro:
      "Für Bauträger und Wohnungsunternehmen liefern wir Balkonanlagen in Serie: als Vorstellbalkon im Neubau oder als Nachrüstung im Bestand.",
    points: ["Vorstellbalkone aus Stahl, verzinkt oder beschichtet", "Serienfertigung für Mehrfamilienhäuser", "Balkonsanierung und Nachrüstung", "Geländer und Sichtschutz passend dazu"],
    counterpart: "/privat/balkone/",
  },
  {
    slug: "gelaender-absturzsicherung",
    title: "Geländer und Absturzsicherung",
    metaTitle: "Geländer & Absturzsicherung für Objektbau",
    description:
      "Glas-, Edelstahl- und Stahlgeländer sowie französische Balkone für Wohn- und Gewerbebauten. Absturzsichernde Verglasung nach DIN 18008.",
    intro:
      "Geländer und Absturzsicherungen für Treppenhäuser, Balkone, Galerien und Dachflächen, in Serie oder als Einzelanfertigung.",
    points: ["Glasgeländer und absturzsichernde Verglasung", "Edelstahl- und Stahlgeländer", "Französische Balkone", "Geländerhöhen nach Landesbauordnung"],
    counterpart: "/privat/gelaender/",
  },
  {
    slug: "fassade-glas-ueberdachung",
    title: "Fassade, Glas und Überdachung",
    metaTitle: "Stahl-Glas-Fassaden & Glasvordächer",
    description: "Stahl-Glas-Konstruktionen, Glasvordächer und Überdachungen für Objekt- und Gewerbebauten in Ostwestfalen-Lippe.",
    intro: "Vordächer, Überdachungen und Stahl-Glas-Elemente für Eingänge, Höfe und Fassaden.",
    points: ["Glasvordächer für Eingänge", "Überdachungen in Stahlkonstruktion", "Stahl-Glas-Elemente"],
    counterpart: "/privat/vordaecher/",
  },
  {
    slug: "stahlbau-industrie",
    title: "Stahlbau für Industrie und Gewerbe",
    metaTitle: "Stahlbühnen, Podeste & Stahlbau für Gewerbe",
    description: "Stahlbühnen, Arbeitsbühnen, Podeste und kleinere Stahlbauten für Industrie und Gewerbe im Raum Herford und OWL.",
    intro: "Bühnen, Podeste, Laufstege und Unterkonstruktionen für Produktion, Lager und Technik.",
    points: ["Stahl- und Arbeitsbühnen", "Podeste und Laufstege", "Fluchttreppen und Steigleitern", "Unterkonstruktionen für Anlagen"],
  },
  {
    slug: "planungsservice",
    title: "Planungsservice für Architekten",
    metaTitle: "Planungsservice Metallbau für Architekten",
    description:
      "Frühe Einbindung in Leistungsphase 3 bis 5: Machbarkeit, Detaillösungen und Kostenrahmen für Metallbau- und Stahlbauleistungen.",
    intro:
      "Je früher wir eingebunden sind, desto weniger Überraschungen gibt es in der Ausführung. Wir prüfen Machbarkeit, schlagen Details vor und geben einen belastbaren Kostenrahmen.",
    points: ["Machbarkeit und Detailvorschläge", "Kostenrahmen für Ausschreibung", "Abstimmung mit Statik-Partnern", "Ausschreibungstexte und Standarddetails"],
  },
];

export const privat: Leistung[] = [
  {
    slug: "gelaender",
    title: "Geländer nach Maß",
    metaTitle: "Geländer nach Maß in Herford: Edelstahl, Glas & Stahl",
    description: "Edelstahl-, Glas- und Stahlgeländer für Treppe, Balkon und Terrasse. Aufmaß, Fertigung und Montage in Herford und Umgebung.",
    intro:
      "Für Balkon, Treppe, Terrasse und Eingang, innen wie außen: Edelstahlgeländer verbinden eine elegante Optik mit Sicherheit. Ganzglasgeländer wirken besonders leicht und lassen den Blick frei. Jedes Geländer fertigen wir nach Maß, vom Aufmaß bis zur Montage.",
    points: ["Edelstahlgeländer mit Glas oder Stäben", "Ganzglasgeländer", "Innengeländer aus Stahl", "Pulverbeschichtete Stahlgeländer und Loft-Geländer", "Französische Balkone"],
    counterpart: "/objektbau/gelaender-absturzsicherung/",
  },
  {
    slug: "balkone",
    title: "Balkon anbauen",
    metaTitle: "Balkon anbauen & Vorstellbalkon in Herford",
    description: "Vorstellbalkone aus Stahl für Ihr Haus: nachträglich anbauen, ohne Eingriff in die Fassadenstatik. Beratung, Fertigung und Montage in OWL.",
    intro:
      "Ein Vorstellbalkon steht selbsttragend auf mindestens vier Stützen vor dem Haus. Weil er nicht in die Bausubstanz eingebunden wird, bleibt die Dämmung weitgehend unberührt und Wärmebrücken werden vermieden. So lässt er sich auch nachträglich an fast jedes Haus anbauen.",
    points: ["Vorstellbalkone aus Stahl", "Balkon nachrüsten", "Geländer aus Edelstahl oder Glas", "Balkonbeläge und Markisen"],
    counterpart: "/objektbau/balkonanlagen/",
  },
  {
    slug: "treppen",
    title: "Treppen für Ihr Haus",
    metaTitle: "Stahltreppen & Spindeltreppen nach Maß",
    description: "Spindel-, Innen- und Außentreppen aus Stahl für Ihr Haus. Individuell geplant und montiert im Raum Herford und Bielefeld.",
    intro:
      "Spindeltreppen sparen Platz, Innentreppen aus Stahl werden zum Blickfang. Bei notwendigen Treppen gelten strengere Vorgaben der Bauordnung, bei nicht notwendigen Treppen sind Stufen, Geländer und Form freier gestaltbar. Wir beraten, was bei Ihnen gilt.",
    points: ["Spindeltreppen aus Stahl", "Innentreppen mit Stufen und Geländer nach Wunsch", "Außentreppen, feuerverzinkt"],
    counterpart: "/objektbau/treppen/",
  },
  {
    slug: "loft-tueren-trennwaende",
    title: "Loft-Türen und Trennwände",
    metaTitle: "Loft-Türen & Stahl-Glas-Trennwände nach Maß",
    description: "Loft-Türen, Industrietüren und Stahl-Glas-Trennwände nach Maß für Wohnung, Büro und Gewerbe in OWL.",
    intro:
      "Loft-Türen verbinden Industrie-Look mit klassischem Charme. Jedes Element ist Handarbeit und wird genau auf Ihre Öffnung angepasst: als Tür, Trennwand oder Fenster, mit Folierung nach Wunsch und Pulverbeschichtung in jeder RAL- oder DB-Farbe.",
    points: ["Dreh- und Schiebetüren, ein- oder zweiflügelig", "Festelemente und Trennwände", "Klarglas oder satinierte Folie", "Pulverbeschichtung nach RAL oder DB", "Für Wohnung, Büro und Gewerbe"],
  },
  {
    slug: "vordaecher",
    title: "Vordächer",
    metaTitle: "Vordach für die Haustür: Edelstahl & Glas",
    description: "Vordächer aus Edelstahl, Stahl und Glas für Haustür und Eingang. Nach Maß gefertigt und montiert in Herford und Umgebung.",
    intro: "Schutz für den Eingang, passend zur Fassade.",
    points: ["Edelstahl-Vordächer mit Glas", "Stahl-Vordächer", "Kombination mit Briefkasten und Beleuchtung"],
    counterpart: "/objektbau/fassade-glas-ueberdachung/",
  },
  {
    slug: "tore-zaeune",
    title: "Tore und Zäune",
    metaTitle: "Tore & Zäune aus Metall nach Maß",
    description: "Schiebetore, Flügeltore und moderne Metallzäune nach Maß für Grundstücke im Raum Herford und Bielefeld.",
    intro: "Einfahrt und Grundstück sicher und passend gestaltet.",
    points: ["Schiebe- und Flügeltore", "Moderne Metallzäune", "Pforten und Briefkastenanlagen"],
  },
  {
    slug: "carports",
    title: "Carports aus Stahl",
    metaTitle: "Carport aus Stahl nach Maß",
    description: "Carports aus Stahl, feuerverzinkt oder beschichtet, individuell geplant für Ihr Grundstück in OWL.",
    intro: "Langlebig, schlank und genau auf Ihr Grundstück zugeschnitten.",
    points: ["Einzel- und Doppelcarports", "Feuerverzinkt oder beschichtet", "Mit Geräteraum oder Solardach"],
  },
];

export const findLeistung = (list: Leistung[], slug: string) => list.find((l) => l.slug === slug);
