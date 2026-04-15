"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Minimal top navbar for the docs section.
 * Sticks to the top and sits above the sidebar.
 */
export function DocsHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 border-b border-[var(--sidebar-border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-black tracking-tighter text-[var(--foreground)]"
          >
            Zen<span className="text-[var(--accent)]">UI</span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <Link
              href="/components"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname.startsWith("/components")
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              )}
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Components
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </Link>
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-md border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </header>
  );
}
