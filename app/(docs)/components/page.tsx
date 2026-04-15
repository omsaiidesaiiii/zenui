import Link from "next/link";
import { componentRegistry } from "@/lib/component-registry";

export default function ComponentsIndexPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Components</h1>
      <p className="text-[var(--muted-foreground)] text-base mb-8 leading-relaxed">
        Beautifully designed components built with Tailwind CSS. Copy and paste
        into your apps. Open source.
      </p>

      <div className="border-t border-[var(--border)] pt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {componentRegistry.map((comp) => (
            <Link
              key={comp.slug}
              href={`/components/${comp.slug}`}
              className="group rounded-lg border border-[var(--border)] p-4 transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--muted)]"
            >
              <h3 className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {comp.name}
              </h3>
              <p className="mt-1 text-xs text-[var(--muted-foreground)] leading-relaxed">
                {comp.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
