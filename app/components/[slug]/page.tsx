import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/components", `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const Content = (await import(`@/content/components/${params.slug}.mdx`)).default;

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto p-10">
      <Content />
    </div>
  );
}