"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getComponentsByCategory } from "@/lib/component-registry";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const groups = getComponentsByCategory();

  return (
    <aside className="docs-sidebar fixed top-0 left-0 z-30 hidden h-screen w-[220px] shrink-0 border-r border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] pt-16 lg:block overflow-y-auto">
      <div className="px-4 py-6">
        <nav className="space-y-6">
          {/* Getting Started link */}
          <div>
            <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Getting Started
            </h4>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/components"
                  className={cn(
                    "block rounded-md px-2 py-1.5 text-sm transition-colors",
                    pathname === "/components"
                      ? "bg-[var(--muted)] font-medium text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className={cn(
                    "block rounded-md px-2 py-1.5 text-sm transition-colors",
                    "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                  )}
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Component groups */}
          {Object.entries(groups).map(([category, items]) => (
            <div key={category}>
              <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                {category}
              </h4>
              <ul className="space-y-0.5">
                {items.map((comp) => {
                  const href = `/components/${comp.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={comp.slug}>
                      <Link
                        href={href}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-[var(--muted)] font-medium text-[var(--foreground)]"
                            : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {comp.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
