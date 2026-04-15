import { Sidebar } from "@/components/website/sidebar";
import { MobileSidebar } from "@/components/website/mobile-sidebar";
import { DocsHeader } from "@/components/website/docs-header";

/**
 * Layout for all pages under /components.
 * Fixed sidebar on the left (desktop) + centered main content.
 * Uses the (docs) route group so it doesn't affect the landing page layout.
 */
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <DocsHeader />
      <Sidebar />
      <MobileSidebar />

      {/* Main content — offset to the right of the sidebar on desktop */}
      <main className="pt-14 lg:pl-[220px]">
        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
