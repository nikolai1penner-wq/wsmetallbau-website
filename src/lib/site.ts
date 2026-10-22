// Zentrale Firmendaten. Name und Telefon sind noch offen
// (siehe SEO-Konzept, Abschnitt 12) und überall nur hier zu pflegen.
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wsmetall.de",
  // TODO: einheitlichen Firmennamen festlegen (Website, Impressum und Verzeichnisse weichen ab)
  name: "WS Metallbau und Bauelemente",
  legalName: "W&S Edelstahlbau und Bauelemente GbR",
  shortName: "W&S Metallbau",
  // TODO: feste Telefonnummer eintragen, dann erscheint sie in Kopf, Fuß und JSON-LD
  phone: "",
  email: "info@wsmetall.de",
  address: {
    street: "Salzburgerstr. 17",
    zip: "32049",
    city: "Herford",
    region: "Nordrhein-Westfalen",
    country: "DE",
  },
  owners: ["Andrej Scheiermann", "Jakob Warkentin"],
  // Aus dem Impressum von ws-edelstahlbau.de übernommen
  kammer: "Handwerkskammer Dortmund",
  kammerNr: "71293017",
  berufsbezeichnung: "Metallbau",
  ustId: "DE355524979",
  facts: [
    { value: "750+", label: "umgesetzte Projekte" },
    { value: "20+", label: "Jahre Erfahrung" },
    { value: "100 km", label: "Einsatzgebiet ab Herford" },
  ],
  // TODO: Kennzahlen der Fertigung ergänzen (Werkstattfläche, Montageteams), erscheinen dann auf /objektbau/
  fertigung: [
    { k: "Erfahrung", v: "20+ Jahre, 750+ Projekte" },
    { k: "Materialien", v: "Stahl, Edelstahl, Glas" },
    { k: "Fertigung", v: "eigene Werkstatt in Herford" },
    { k: "Montage", v: "eigene Teams" },
    { k: "Einsatzgebiet", v: "100 km um Herford" },
  ] as { k: string; v: string }[],
  serviceArea: {
    kern: ["Herford", "Bielefeld", "Bad Salzuflen", "Bünde", "Löhne", "Enger", "Spenge", "Vlotho", "Bad Oeynhausen", "Lemgo"],
    erweitert: ["Gütersloh", "Minden", "Detmold", "Lübbecke", "Osnabrück", "Rheda-Wiedenbrück", "Hameln"],
    rand: ["Paderborn", "Hannover", "Münster", "Höxter"],
  },
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
