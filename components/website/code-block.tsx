"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = "tsx", 
  filename,
  className 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function highlight() {
      try {
        const html = await codeToHtml(code, {
          lang: language === "bash" ? "sh" : language,
          theme: "rose-pine-moon", // A premium dark theme
        });
        if (isMounted) {
          setHighlightedHtml(html);
        }
      } catch (err) {
        console.error("Failed to highlight code:", err);
      }
    }

    highlight();
    return () => { isMounted = false; };
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "relative group rounded-xl border border-[var(--border)] bg-[var(--code-bg)] overflow-hidden shadow-sm",
      className
    )}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5 bg-[var(--muted)]/50">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs font-medium text-[var(--muted-foreground)] px-2 py-0.5 rounded bg-[var(--border)]/50">
              {filename}
            </span>
          )}
          <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--muted-foreground)]/70">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-[var(--muted-foreground)] transition-all hover:bg-[var(--background)] hover:text-[var(--foreground)] border border-transparent hover:border-[var(--border)]"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span className="text-[var(--accent)]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto no-scrollbar max-h-[600px] overflow-y-auto">
        {highlightedHtml ? (
          <div 
            className="text-sm leading-relaxed shiki-container"
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          />
        ) : (
          <pre className="text-sm leading-relaxed">
            <code className="font-mono text-[var(--code-foreground)]">{code}</code>
          </pre>
        )}
      </div>

      {/* Decorative dots for a premium feel */}
      <div className="absolute right-4 bottom-4 flex gap-1 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
        <div className="h-1 w-1 rounded-full bg-white" />
        <div className="h-1 w-1 rounded-full bg-white" />
        <div className="h-1 w-1 rounded-full bg-white" />
      </div>

      <style jsx global>{`
        .shiki-container pre {
          background-color: transparent !important;
          margin: 0;
          padding: 0;
        }
        .shiki-container code {
          font-family: var(--font-mono);
          counter-reset: line;
        }
      `}</style>
    </div>
  );
}
