import Link from "next/link";
import { componentRegistry } from "@/lib/component-registry";

export default function ComponentsIndexPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Introduction</h1>
      <p className="text-base text-[var(--muted-foreground)] mb-10 leading-relaxed">
        ZenUI is a collection of re-usable components that you can copy and paste into your apps.
        Built with <strong>Tailwind CSS</strong> and <strong>React</strong>, it follows the philosophy 
        of giving you full control over the code. No package dependencies, just your code.
      </p>

      <div className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold tracking-tight">Features</h2>
        <ul className="grid gap-3 sm:grid-cols-2 text-sm text-[var(--muted-foreground)]">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Modern design aesthetics
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Fully accessible (WAI-ARIA)
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Tailwind CSS optimized
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Zero-installation overhead
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold tracking-tight mb-4">Browse Components</h2>

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
