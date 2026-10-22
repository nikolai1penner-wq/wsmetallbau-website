import { notFound } from "next/navigation";
import { LeistungDetail } from "@/components/LeistungDetail";
import { findLeistung, privat } from "@/lib/leistungen";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return privat.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/privat/[slug]">) {
  const leistung = findLeistung(privat, (await params).slug);
  if (!leistung) return {};
  return pageMeta({ title: leistung.metaTitle, description: leistung.description, path: `/privat/${leistung.slug}/` });
}

export default async function Page({ params }: PageProps<"/privat/[slug]">) {
  const leistung = findLeistung(privat, (await params).slug);
  if (!leistung) notFound();
  return <LeistungDetail leistung={leistung} segment="privat" />;
}
