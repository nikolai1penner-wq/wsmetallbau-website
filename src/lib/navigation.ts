// Inhalte des Mega-Menüs nach Screendesign (Board „Mega-Menü“)
export type MenuLink = { href: string; title: string; text: string };
export type MegaMenu = {
  label: string;
  href: string;
  eyebrow: string;
  alle: string;
  leistungen: MenuLink[];
  infoTitel: string;
  info: MenuLink[];
  teaser: { bildKey: string; label: string; eyebrow: string; text: string; cta: string; href: string };
};

export const megaMenus: MegaMenu[] = [
  {
    label: "Objektbau",
    href: "/objektbau/",
    eyebrow: "Für Architekten, Planer und Bauträger",
    alle: "Alles zum Objektbau",
    leistungen: [
      { href: "/objektbau/balkonanlagen/", title: "Balkonanlagen", text: "Vorstellbalkone in Serie für Wohnungsbau und Sanierung" },
      { href: "/objektbau/treppen/", title: "Stahltreppen", text: "Treppenhaus-, Außen- und Fluchttreppen nach DIN 18065" },
      { href: "/objektbau/gelaender-absturzsicherung/", title: "Geländer und Glas", text: "Edelstahl-, Stahl- und Ganzglasgeländer im Objekt" },
      { href: "/objektbau/sonderkonstruktionen/", title: "Sonderkonstruktionen", text: "Einzelanfertigungen aus Stahl, Edelstahl und Glas nach Plan" },
      { href: "/objektbau/stahlbau-industrie/", title: "Stahlbau und Industrie", text: "Bühnen, Podeste, Überdachungen und Tragwerke" },
      { href: "/objektbau/loft-trennwaende-buero/", title: "Loft-Trennwände Gewerbe", text: "Stahl-Glas-Wände für Büro, Praxis und Gastronomie" },
    ],
    infoTitel: "Für Planer",
    info: [
      { href: "/planer-service/", title: "Planer-Service und Downloads", text: "CAD-Details, Ausschreibungstexte" },
      { href: "/#ablauf", title: "Zusammenarbeit und Ablauf", text: "Von der Werkplanung bis zur Montage" },
      { href: "/referenzen/", title: "Referenzen Objektbau", text: "Fallstudien mit Umfang und Bauzeit" },
    ],
    teaser: {
      bildKey: "balkone",
      label: "Balkonanlage",
      eyebrow: "Objektbau",
      text: "Balkonanlagen, Treppen und Geländer in Serie, mit Werkplanung und eigener Montage",
      cta: "Projekt mit Plänen anfragen",
      href: "/anfrage/#projekt",
    },
  },
  {
    label: "Privat",
    href: "/privat/",
    eyebrow: "Für Bauherren und Eigentümer",
    alle: "Alles für Privatkunden",
    leistungen: [
      { href: "/privat/loft-tueren-trennwaende/", title: "Lofttüren und Trennwände", text: "Stahl-Glas-Türen nach Maß, als Dreh- oder Schiebetür" },
      { href: "/privat/treppen/", title: "Treppen", text: "Spindeltreppen, Innen- und Außentreppen aus Stahl" },
      { href: "/privat/balkone/", title: "Vorstellbalkone", text: "Nachrüsten ohne Eingriff in Fassade und Dämmung" },
      { href: "/privat/gelaender/", title: "Geländer", text: "Edelstahl, Glas und französische Balkone" },
      { href: "/privat/vordaecher/", title: "Vordächer und Überdachungen", text: "Für Haustür, Terrasse und Carport" },
      { href: "/privat/fenstergitter/", title: "Fenstergitter und Sonderwünsche", text: "Einzelstücke aus Stahl und Edelstahl" },
    ],
    infoTitel: "Gut zu wissen",
    info: [
      // TODO: „Preise und Kosten“ ergänzen, sobald Preisrahmen bestätigt sind
      { href: "/privat/ratgeber/", title: "Ratgeber", text: "Tipps zu Lofttür, Geländer und Treppe" },
      { href: "/#ablauf", title: "So läuft Ihr Projekt", text: "Beratung, Aufmaß, Fertigung, Montage" },
      { href: "/referenzen/", title: "Referenzen Privat", text: "Projekte aus Herford, Bielefeld und OWL" },
    ],
    teaser: {
      bildKey: "loft-tueren-trennwaende",
      label: "Lofttür",
      eyebrow: "Beliebt",
      text: "Lofttür nach Maß, inklusive Aufmaß und Montage",
      cta: "Angebot anfragen",
      href: "/privat/loft-tueren-trennwaende/#anfrage",
    },
  },
];

export const mainNav = [
  { href: "/referenzen/", label: "Referenzen" },
  { href: "/planer-service/", label: "Planer-Service" },
  { href: "/unternehmen/", label: "Unternehmen" },
  { href: "/karriere/", label: "Karriere" },
];
