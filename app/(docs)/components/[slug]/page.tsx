import { notFound } from "next/navigation";
import { getComponentBySlug, componentRegistry } from "@/lib/component-registry";
import { ComponentDoc } from "./component-doc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Generate static paths for all registered components */
export async function generateStaticParams() {
  return componentRegistry.map((c) => ({ slug: c.slug }));
}

export default async function ComponentPage({ params }: PageProps) {
  const { slug } = await params;
  const meta = getComponentBySlug(slug);

  if (!meta) notFound();

  return <ComponentDoc meta={meta} />;
}
