export type Leistung = {
  slug: string;
  title: string;
  /** Kurzname für Navigation und Fußzeile */
  short: string;
  /** Title-Tag ohne Markenzusatz */
  metaTitle: string;
  description: string;
  /** Ein Satz für Übersichtskarten und Leistungszeilen */
  teaser: string;
  intro: string;
  points: string[];
  /** Technische Kurzangaben in Mono-Schrift (Objektbau) */
  spec?: string;
  /** Pendant im jeweils anderen Hub, damit beide Seiten aufeinander verlinken */
  counterpart?: string;
  /** Ab-Preis inkl. Montage, erscheint nur wenn gesetzt */
  preisAb?: string;
  varianten?: { label: string; hint: string; text: string }[];
  faq?: { q: string; a: string }[];
  /** Optionale SEO-Texte aus dem Screendesign */
  eyebrow?: string;
  h1?: string;
  /** Title komplett vorgegeben, ohne Markenzusatz aus dem Template */
  metaTitleAbsolut?: boolean;
  ratgeber?: { eyebrow: string; titel: string; bloecke: { title: string; text: string }[] };
  galerieTitel?: string;
  faqTitel?: string;
};

export const objektbau: Leistung[] = [
  {
    slug: "balkonanlagen",
    title: "Balkonanlagen für den Wohnungsbau",
    short: "Balkonanlagen",
    metaTitle: "Balkonanlagen & Vorstellbalkone für Wohnungsbau",
    description:
      "Vorstellbalkone und Balkonanlagen aus Stahl für Neubau und Sanierung im Geschosswohnungsbau. Serienfertigung, Termintreue und Montage im Raum Herford, Bielefeld und OWL.",
    teaser: "Vorstellbalkone in Serie für Neubau und Bestand, selbsttragend auf Stützen, ohne Eingriff in die Dämmung.",
    intro:
      "Für Bauträger und Wohnungsunternehmen liefern wir Balkonanlagen in Serie: als Vorstellbalkon im Neubau oder als Nachrüstung im Bestand. Selbsttragend auf Stützen, damit Dämmung und Fassade unberührt bleiben.",
    points: ["Vorstellbalkone aus Stahl, verzinkt oder beschichtet", "Serienfertigung für Mehrfamilienhäuser", "Balkonsanierung und Nachrüstung", "Geländer und Sichtschutz passend dazu"],
    spec: "STAHL · FEUERVERZINKT · SERIE",
    counterpart: "/privat/balkone/",
  },
  {
    slug: "treppen",
    title: "Stahltreppen für den Objektbau",
    short: "Treppen",
    metaTitle: "Stahltreppen für Objektbau: Wendel-, Außen- & Fluchttreppen",
    description:
      "Stahl-, Wendel-, Außen- und Fluchttreppen für Wohnungsbau, Gewerbe und öffentliche Bauten. Planung nach DIN 18065, Fertigung und Montage aus OWL.",
    teaser: "Spindel-, Innen-, Außen- und Fluchttreppen nach DIN 18065, inklusive Geländer und Podeste.",
    intro:
      "Wir fertigen Treppen für Mehrfamilienhäuser, Gewerbe- und Industriebauten: als Haupt-, Außen- oder Fluchttreppe, feuerverzinkt oder beschichtet.",
    points: ["Wendel- und Spindeltreppen", "Außen- und Fluchttreppen, feuerverzinkt", "Podeste und Laubengänge", "Planung nach DIN 18065"],
    spec: "DIN 18065 · VERZINKT / PULVER",
    counterpart: "/privat/treppen/",
  },
  {
    slug: "gelaender-absturzsicherung",
    title: "Geländer und Absturzsicherung",
    short: "Geländer & Absturzsicherung",
    metaTitle: "Geländer & Absturzsicherung für Objektbau",
    description:
      "Glas-, Edelstahl- und Stahlgeländer sowie französische Balkone für Wohn- und Gewerbebauten. Absturzsichernde Verglasung nach DIN 18008.",
    teaser: "Edelstahl-, Stahl- und Ganzglasgeländer für Treppenhäuser, Balkone und französische Fenster.",
    intro:
      "Geländer und Absturzsicherungen für Treppenhäuser, Balkone, Galerien und Dachflächen, in Serie oder als Einzelanfertigung.",
    points: ["Glasgeländer und absturzsichernde Verglasung", "Edelstahl- und Stahlgeländer", "Französische Balkone", "Geländerhöhen nach Landesbauordnung"],
    spec: "DIN 18008 · BAUO NRW",
    counterpart: "/privat/gelaender/",
  },
  {
    slug: "sonderkonstruktionen",
    title: "Sonderkonstruktionen aus Stahl",
    short: "Sonderkonstruktionen",
    metaTitle: "Sonderkonstruktionen Stahl & Metallbau in OWL",
    description:
      "Individuelle Stahl- und Stahl-Glas-Konstruktionen für Architekten und Bauträger: von der Skizze über Werkplanung und Fertigung bis zur Montage im Raum Herford und OWL.",
    teaser: "Konstruktionen in Stahl, Edelstahl und Glas, die es nicht von der Stange gibt. Werkplanung mit Statik-Partnern.",
    intro:
      "Wenn es kein Standardprodukt gibt, fängt unsere Arbeit an. Wir entwickeln mit Planern Konstruktionen mit besonderer Geometrie, Spannweite oder Materialkombination und übernehmen Werkplanung, Fertigung und Montage aus einer Hand.",
    points: [
      "Stahl-, Edelstahl- und Stahl-Glas-Konstruktionen nach Entwurf",
      "Werkplanung und Abstimmung mit Tragwerksplanung",
      "Fertigung im eigenen Betrieb in Herford",
      "Montage mit eigenen Teams",
    ],
    spec: "STAHL · EDELSTAHL · GLAS",
  },
  {
    slug: "loft-trennwaende-buero",
    title: "Loft-Trennwände für Büro und Gewerbe",
    short: "Loft-Trennwände",
    metaTitle: "Stahl-Glas-Trennwände & Lofttüren für Büros",
    description: "Stahl-Glas-Trennwände und Lofttüren nach Maß für Büros, Praxen und Gewerbeflächen in Herford, Bielefeld und OWL.",
    teaser: "Stahl-Glas-Trennwände und Lofttüren für Büros, Praxen und Gewerbe, nach Maß gefertigt.",
    intro: "Licht teilen, Raum trennen: Stahl-Glas-Trennwände und Lofttüren für Büros, Praxen, Showrooms und Gastronomie, passgenau gefertigt und montiert.",
    points: ["Trennwände über die ganze Raumbreite", "Dreh- und Schiebetüren", "Pulverbeschichtung nach RAL oder DB", "Klarglas, satiniert oder foliert"],
    spec: "RAL / DB · DREH- & SCHIEBETÜR",
    counterpart: "/privat/loft-tueren-trennwaende/",
  },
  {
    slug: "fassade-glas-ueberdachung",
    title: "Fassade, Glas und Überdachung",
    short: "Glas & Überdachung",
    metaTitle: "Stahl-Glas-Fassaden & Glasvordächer",
    description: "Stahl-Glas-Konstruktionen, Glasvordächer und Überdachungen für Objekt- und Gewerbebauten in Ostwestfalen-Lippe.",
    teaser: "Glasvordächer, Überdachungen und Stahl-Glas-Elemente für Eingänge, Höfe und Fassaden.",
    intro: "Vordächer, Überdachungen und Stahl-Glas-Elemente für Eingänge, Höfe und Fassaden.",
    points: ["Glasvordächer für Eingänge", "Überdachungen in Stahlkonstruktion", "Stahl-Glas-Elemente"],
    spec: "STAHL · GLAS · VSG",
    counterpart: "/privat/vordaecher/",
  },
  {
    slug: "stahlbau-industrie",
    title: "Stahlbau für Industrie und Gewerbe",
    short: "Stahlbau & Industrie",
    metaTitle: "Stahlbühnen, Podeste & Stahlbau für Gewerbe",
    description: "Stahlbühnen, Arbeitsbühnen, Podeste und kleinere Stahlbauten für Industrie und Gewerbe im Raum Herford und OWL.",
    teaser: "Bühnen, Podeste, Überdachungen und Stahlkonstruktionen für Gewerbe und Industrie.",
    intro: "Bühnen, Podeste, Laufstege und Unterkonstruktionen für Produktion, Lager und Technik.",
    points: ["Stahl- und Arbeitsbühnen", "Podeste und Laufstege", "Fluchttreppen und Steigleitern", "Unterkonstruktionen für Anlagen"],
    spec: "STAHLBAU · BÜHNEN · PODESTE",
  },
  {
    slug: "planungsservice",
    title: "Planungsservice für Architekten",
    short: "Planungsservice",
    metaTitle: "Planungsservice Metallbau für Architekten",
    description:
      "Frühe Einbindung in Leistungsphase 3 bis 5: Machbarkeit, Detaillösungen und Kostenrahmen für Metallbau- und Stahlbauleistungen.",
    teaser: "Frühe Einbindung in LP 3 bis 5: Machbarkeit, Details und belastbarer Kostenrahmen.",
    intro:
      "Je früher wir eingebunden sind, desto weniger Überraschungen gibt es in der Ausführung. Wir prüfen Machbarkeit, schlagen Details vor und geben einen belastbaren Kostenrahmen.",
    points: ["Machbarkeit und Detailvorschläge", "Kostenrahmen für Ausschreibung", "Abstimmung mit Statik-Partnern", "Ausschreibungstexte und Standarddetails"],
    spec: "LP 3–5 · DETAILS · KOSTEN",
  },
];

export const privat: Leistung[] = [
  {
    slug: "loft-tueren-trennwaende",
    title: "Lofttüren und Trennwände aus Stahl und Glas",
    short: "Lofttüren",
    eyebrow: "Lofttüren · Stahl-Glas-Türen · Trennwände",
    h1: "Lofttüren nach Maß aus Herford",
    metaTitle: "Lofttür nach Maß aus Herford | Stahl-Glas-Türen | W&S Metallbau",
    metaTitleAbsolut: true,
    // TODO: Preisrahmen „ab … €“ ergänzen, sobald bestätigt (Screendesign: „Preisrahmen ab [PREIS] €“)
    description: "Handgefertigte Lofttüren und Trennwände aus Stahl und Glas, montiert in Herford, Bielefeld und OWL. Jetzt kostenloses Angebot anfragen.",
    teaser: "Lofttüren und Stahl-Glas-Trennwände nach Maß, als Dreh- oder Schiebetür, für Wohnung, Büro und Praxis.",
    intro:
      "Lofttüren verbinden industriellen Charme mit klassischem Flair. Wir fertigen jede Tür von Hand in Herford, als Drehtür, Schiebetür, Trennwand oder Festelement, pulverbeschichtet in Ihrer Wunschfarbe und montiert in Herford, Bielefeld und ganz OWL.",
    points: ["Dreh- und Schiebetüren, ein- oder zweiflügelig", "Festelemente und Trennwände", "Klarglas, satiniert oder Folie", "Pulverbeschichtung nach RAL oder DB"],
    counterpart: "/objektbau/loft-trennwaende-buero/",
    ratgeber: {
      eyebrow: "Ratgeber Lofttür",
      titel: "Lofttür aus Stahl und Glas: was Sie wissen sollten",
      bloecke: [
        { title: "Material und Verarbeitung", text: "Rahmen und Sprossen bestehen aus schlanken Stahlprofilen, die wir zuschneiden, verschweißen und schleifen. Danach wird die Tür pulverbeschichtet. So entsteht die typische Optik einer Industrietür, stabil und langlebig." },
        { title: "Glas und Farben", text: "Klarglas lässt Licht in Flur und Küche, satiniertes Glas oder Folie sorgt für Sichtschutz in Bad und Schlafzimmer. Beliebte Farben sind Tiefschwarz RAL 9005, Anthrazit RAL 7016 und Eisenglimmer DB 703." },
        { title: "Aufmaß und Montage", text: "Wir messen die Öffnung bei Ihnen vor Ort, fertigen die Lofttür passgenau und bauen sie ein. Eine Lofttür passt in die meisten bestehenden Türöffnungen, auch ohne Umbau." },
      ],
    },
    galerieTitel: "Unsere Lofttüren in Herford, Bielefeld und OWL",
    faqTitel: "Häufige Fragen zu Lofttüren",
    varianten: [
      { label: "Drehtür einflügelig", hint: "Der Klassiker für Küche, Flur und Wohnzimmer", text: "Einflügelige Drehtür mit schmalen Stahlprofilen und Sprossen nach Wunsch. Passt in die meisten Standardöffnungen." },
      { label: "Drehtür zweiflügelig", hint: "Für breite Durchgänge ab etwa 140 cm", text: "Zweiflügelige Tür für breite Öffnungen, beide Flügel oder nur einer zu öffnen." },
      { label: "Schiebetür", hint: "Spart Platz, läuft vor der Wand", text: "Schiebetür auf sichtbarer Laufschiene, ideal, wenn kein Platz zum Aufschwenken bleibt." },
      { label: "Trennwand und Festelement", hint: "Licht teilen, Raum trennen", text: "Feste Glaswand oder Kombination aus Tür und Seitenteilen, auch über die ganze Raumbreite." },
    ],
    faq: [
      // TODO: konkreten Ab-Preis und Lieferzeit in Wochen eintragen, sobald bestätigt
      { q: "Was kostet eine Lofttür?", a: "Der Preis hängt von Größe, Türart, Glas und Farbe ab. Schicken Sie uns Maße und ein Foto der Öffnung, dann nennen wir Ihnen einen Preisrahmen. Das verbindliche Angebot erhalten Sie nach dem Aufmaß." },
      { q: "Wie lange dauert es bis zum Einbau?", a: "Das hängt von Ausführung und Auslastung ab. Nach dem Aufmaß nennen wir Ihnen einen festen Termin für Fertigung und Montage." },
      { q: "Passt eine Lofttür in meine bestehende Türöffnung?", a: "In den meisten Fällen ja. Wir fertigen nach Maß und prüfen die Öffnung beim Aufmaß." },
      { q: "Welches Glas eignet sich für eine Lofttür?", a: "Für Innentüren verwenden wir Sicherheitsglas (ESG oder VSG). Klarglas für viel Licht, satiniertes Glas oder Folie für Sichtschutz." },
      { q: "In welchem Gebiet montieren Sie?", a: "In Herford, Bielefeld und ganz OWL, im Umkreis von etwa 100 km." },
    ],
  },
  {
    slug: "gelaender",
    title: "Geländer nach Maß",
    short: "Geländer",
    metaTitle: "Geländer nach Maß in Herford: Edelstahl, Glas & Stahl",
    description: "Edelstahl-, Ganzglas- und Stahlgeländer für Treppe, Balkon und Terrasse. Aufmaß, Fertigung und Montage in Herford und Umgebung.",
    teaser: "Edelstahl-, Stahl- und Ganzglasgeländer für Balkon, Treppe, Terrasse und Eingang.",
    intro:
      "Für Balkon, Treppe, Terrasse und Eingang, innen wie außen: Edelstahlgeländer verbinden eine elegante Optik mit Sicherheit. Ganzglasgeländer wirken besonders leicht und lassen den Blick frei. Jedes Geländer fertigen wir nach Maß, vom Aufmaß bis zur Montage.",
    points: ["Edelstahlgeländer mit Glas oder Stäben", "Ganzglasgeländer", "Innengeländer aus Stahl", "Pulverbeschichtete Stahlgeländer und Loft-Geländer", "Französische Balkone"],
    counterpart: "/objektbau/gelaender-absturzsicherung/",
  },
  {
    slug: "treppen",
    title: "Treppen für Ihr Haus",
    short: "Treppen",
    metaTitle: "Stahltreppen & Spindeltreppen nach Maß",
    description: "Spindel-, Innen- und Außentreppen aus Stahl für Ihr Haus. Individuell geplant und montiert im Raum Herford und Bielefeld.",
    teaser: "Spindeltreppen, Innen- und Außentreppen aus Stahl, verzinkt oder pulverbeschichtet.",
    intro:
      "Spindeltreppen sparen Platz, Innentreppen aus Stahl werden zum Blickfang. Bei notwendigen Treppen gelten strengere Vorgaben der Bauordnung, bei nicht notwendigen Treppen sind Stufen, Geländer und Form freier gestaltbar. Wir beraten, was bei Ihnen gilt.",
    points: ["Spindeltreppen aus Stahl", "Innentreppen mit Stufen und Geländer nach Wunsch", "Außentreppen, feuerverzinkt"],
    counterpart: "/objektbau/treppen/",
  },
  {
    slug: "balkone",
    title: "Balkon anbauen",
    short: "Vorstellbalkone",
    metaTitle: "Balkon anbauen & Vorstellbalkon in Herford",
    description: "Vorstellbalkone aus Stahl für Ihr Haus: nachträglich anbauen, ohne Eingriff in die Fassadenstatik. Beratung, Fertigung und Montage in OWL.",
    teaser: "Vorstellbalkone, selbsttragend und ohne Eingriff in die Dämmung, auch zum Nachrüsten.",
    intro:
      "Ein Vorstellbalkon steht selbsttragend auf mindestens vier Stützen vor dem Haus. Weil er nicht in die Bausubstanz eingebunden wird, bleibt die Dämmung weitgehend unberührt und Wärmebrücken werden vermieden. So lässt er sich auch nachträglich an fast jedes Haus anbauen.",
    points: ["Vorstellbalkone aus Stahl", "Balkon nachrüsten", "Geländer aus Edelstahl oder Glas", "Balkonbeläge und Markisen"],
    counterpart: "/objektbau/balkonanlagen/",
  },
  {
    slug: "vordaecher",
    title: "Vordächer",
    short: "Vordächer",
    metaTitle: "Vordach für die Haustür: Edelstahl & Glas",
    description: "Vordächer aus Edelstahl, Stahl und Glas für Haustür und Eingang. Nach Maß gefertigt und montiert in Herford und Umgebung.",
    teaser: "Vordächer aus Edelstahl und Glas, passend zu Fassade und Haustür.",
    intro: "Schutz für den Eingang, passend zur Fassade.",
    points: ["Edelstahl-Vordächer mit Glas", "Stahl-Vordächer", "Kombination mit Briefkasten und Beleuchtung"],
    counterpart: "/objektbau/fassade-glas-ueberdachung/",
  },
  {
    slug: "fenstergitter",
    title: "Fenstergitter",
    short: "Fenstergitter",
    metaTitle: "Fenstergitter aus Stahl nach Maß",
    description: "Fenstergitter aus Stahl als Einbruchschutz für Keller- und Erdgeschossfenster, nach Maß gefertigt in Herford.",
    teaser: "Einbruchschutz für Keller- und Erdgeschossfenster, schlicht oder gestaltet.",
    intro: "Fenstergitter schützen Keller- und Erdgeschossfenster und können zugleich ein gestalterisches Element der Fassade sein.",
    points: ["Fenstergitter nach Maß", "Verzinkt oder pulverbeschichtet", "Passend zu Geländern und Toren"],
  },
  {
    slug: "tore-zaeune",
    title: "Tore und Zäune",
    short: "Tore & Zäune",
    metaTitle: "Tore & Zäune aus Metall nach Maß",
    description: "Schiebetore, Flügeltore und moderne Metallzäune nach Maß für Grundstücke im Raum Herford und Bielefeld.",
    teaser: "Schiebe- und Flügeltore, Zäune und Pforten nach Maß.",
    intro: "Einfahrt und Grundstück sicher und passend gestaltet.",
    points: ["Schiebe- und Flügeltore", "Moderne Metallzäune", "Pforten und Briefkastenanlagen"],
  },
  {
    slug: "carports",
    title: "Carports aus Stahl",
    short: "Carports",
    metaTitle: "Carport aus Stahl nach Maß",
    description: "Carports aus Stahl, feuerverzinkt oder beschichtet, individuell geplant für Ihr Grundstück in OWL.",
    teaser: "Schlanke Stahl-Carports, feuerverzinkt oder beschichtet.",
    intro: "Langlebig, schlank und genau auf Ihr Grundstück zugeschnitten.",
    points: ["Einzel- und Doppelcarports", "Feuerverzinkt oder beschichtet", "Mit Geräteraum oder Solardach"],
  },
];

export const findLeistung = (list: Leistung[], slug: string) => list.find((l) => l.slug === slug);
