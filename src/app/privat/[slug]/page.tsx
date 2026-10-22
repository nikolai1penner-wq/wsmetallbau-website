import { notFound } from "next/navigation";
import { PrivatDetail } from "@/components/PrivatDetail";
import { findLeistung, privat } from "@/lib/leistungen";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return privat.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/privat/[slug]">) {
  const leistung = findLeistung(privat, (await params).slug);
  if (!leistung) return {};
  return pageMeta({ title: leistung.metaTitle, absolute: leistung.metaTitleAbsolut, description: leistung.description, path: `/privat/${leistung.slug}/` });
}

export default async function Page({ params }: PageProps<"/privat/[slug]">) {
  const leistung = findLeistung(privat, (await params).slug);
  if (!leistung) notFound();
  return <PrivatDetail leistung={leistung} />;
}
