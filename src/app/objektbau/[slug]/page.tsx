import { notFound } from "next/navigation";
import { ObjektbauDetail } from "@/components/ObjektbauDetail";
import { findLeistung, objektbau } from "@/lib/leistungen";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return objektbau.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/objektbau/[slug]">) {
  const leistung = findLeistung(objektbau, (await params).slug);
  if (!leistung) return {};
  return pageMeta({ title: leistung.metaTitle, absolute: leistung.metaTitleAbsolut, description: leistung.description, path: `/objektbau/${leistung.slug}/` });
}

export default async function Page({ params }: PageProps<"/objektbau/[slug]">) {
  const leistung = findLeistung(objektbau, (await params).slug);
  if (!leistung) notFound();
  return <ObjektbauDetail leistung={leistung} />;
}
