// Versand per Resend (https://resend.com), sobald RESEND_API_KEY und ANFRAGE_EMPFAENGER gesetzt sind.
// Größere Plan-Uploads später über Vercel Blob, da Funktionen auf ~4,5 MB Request-Größe begrenzt sind.
const MAX_BYTES = 4 * 1024 * 1024;

export async function POST(request: Request) {
  const form = await request.formData();
  if (form.get("website")) return Response.json({ ok: true }); // Honeypot

  const art = form.get("art") === "projekt" ? "Projektanfrage" : "Privatanfrage";
  const email = String(form.get("email") ?? "");
  if (!email.includes("@") || !form.get("name") || !form.get("datenschutz")) {
    return Response.json({ error: "Bitte Name, E-Mail und Einwilligung angeben." }, { status: 400 });
  }

  const files = form.getAll("dateien").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.reduce((sum, f) => sum + f.size, 0) > MAX_BYTES) {
    return Response.json({ error: "Dateien sind zu groß (max. 4 MB). Bitte per E-Mail nachreichen." }, { status: 413 });
  }

  const skip = new Set(["art", "website", "datenschutz", "dateien"]);
  const lines = [...form.entries()]
    .filter(([k, v]) => !skip.has(k) && typeof v === "string" && v.trim())
    .map(([k, v]) => `${k}: ${v}`);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ANFRAGE_EMPFAENGER;
  if (!apiKey || !to) {
    console.error("Anfrage nicht versendet: RESEND_API_KEY oder ANFRAGE_EMPFAENGER fehlt", { art, lines });
    return Response.json({ error: "Das Formular ist noch nicht freigeschaltet. Bitte schreiben Sie uns eine E-Mail." }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ANFRAGE_ABSENDER ?? "Website <anfrage@wsmetall.de>",
      to: to.split(","),
      reply_to: email,
      subject: `${art}: ${form.get("projekt") ?? form.get("leistung") ?? form.get("name")}`,
      text: lines.join("\n"),
      attachments: await Promise.all(
        files.map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()).toString("base64") })),
      ),
    }),
  });
  if (!res.ok) {
    console.error("Resend-Fehler", res.status, await res.text());
    return Response.json({ error: "Senden fehlgeschlagen. Bitte schreiben Sie uns eine E-Mail." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
