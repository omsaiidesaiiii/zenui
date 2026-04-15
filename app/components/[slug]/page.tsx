"use client";

import { ReactNode, useEffect, useState } from "react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const [Content, setContent] = useState<(() => ReactNode) | null>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { slug: resolvedSlug } = await params;
      setSlug(resolvedSlug);

      try {
        const module = await import(`@/content/components/${resolvedSlug}.mdx`);
        setContent(() => module.default);
      } catch (error) {
        notFound();
      }
    })();
  }, [params]);

  if (!Content) return null;

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto p-10">
      <Content />
    </div>
  );
}