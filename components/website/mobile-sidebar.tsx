"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { getComponentsByCategory } from "@/lib/component-registry";
import { cn } from "@/lib/utils";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const groups = getComponentsByCategory();

  return (
    <>
      {/* Hamburger button — visible only below lg */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] shadow-lg lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay + drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="docs-sidebar fixed inset-y-0 left-0 z-50 w-[260px] border-r border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] overflow-y-auto lg:hidden">
            <div className="flex items-center justify-between border-b border-[var(--sidebar-border)] px-4 py-4">
              <Link
                href="/"
                className="text-lg font-black tracking-tighter"
                onClick={() => setOpen(false)}
              >
                Zen<span className="text-[var(--accent)]">UI</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="rounded-md p-1 hover:bg-[var(--muted)] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-6 px-4 py-6">
              <div>
                <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  Getting Started
                </h4>
                <ul className="space-y-0.5">
                  <li>
                    <Link
                      href="/components"
                      onClick={() => setOpen(false)}
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
                      href="/installation"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        pathname === "/installation"
                          ? "bg-[var(--muted)] font-medium text-[var(--foreground)]"
                          : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
                      )}
                    >
                      Installation
                    </Link>
                  </li>
                </ul>
              </div>

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
                            onClick={() => setOpen(false)}
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
          </aside>
        </>
      )}
    </>
  );
}
