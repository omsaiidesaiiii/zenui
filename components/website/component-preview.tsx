"use client";

import { useState } from "react";
import { Code, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

/**
 * A shadcn-style preview / code toggle panel.
 * "Preview" renders the live component, "Code" shows the source.
 */
export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-[var(--border)] overflow-hidden">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)] px-4">
        <div className="flex">
          <button
            onClick={() => setTab("preview")}
            className={cn(
              "flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors",
              tab === "preview"
                ? "border-[var(--foreground)] text-[var(--foreground)]"
                : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            )}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={cn(
              "flex items-center gap-1.5 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors",
              tab === "code"
                ? "border-[var(--foreground)] text-[var(--foreground)]"
                : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            )}
          >
            <Code className="h-3.5 w-3.5" />
            Code
          </button>
        </div>

        {tab === "code" && (
          <button
            onClick={handleCopy}
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div className="relative flex min-h-[200px] items-center justify-center p-10 bg-[var(--preview-bg)]">
          {/* Dot grid background for visual flair */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--preview-dot) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-[var(--code-bg)] p-4">
          <pre className="text-sm leading-relaxed">
            <code className="font-mono text-[var(--code-foreground)]">
              {code}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
