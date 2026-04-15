"use client";

import { useState, useId } from "react";
import { Code, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const uniqueId = useId();

  return (
    <div className="rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--background)] shadow-sm group">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--muted)]/50 px-4">
        <div className="flex relative items-center gap-1 mt-1">
          <button
            onClick={() => setTab("preview")}
            className={cn(
              "relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors z-10",
              tab === "preview" ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            )}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
            {tab === "preview" && (
              <motion.div
                layoutId={`active-tab-${uniqueId}`}
                className="absolute inset-x-0 -bottom-1 h-0.5 bg-[var(--accent)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setTab("code")}
            className={cn(
              "relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors z-10",
              tab === "code" ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            )}
          >
            <Code className="h-3.5 w-3.5" />
            Code
            {tab === "code" && (
              <motion.div
                layoutId={`active-tab-${uniqueId}`}
                className="absolute inset-x-0 -bottom-1 h-0.5 bg-[var(--accent)]"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="relative"
        >
          {tab === "preview" ? (
            <div className="relative flex min-h-[350px] items-center justify-center p-8 bg-[var(--preview-bg)] overflow-hidden">
              {/* Animated Dot grid background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle, var(--preview-dot) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <motion.div 
                className="relative z-10"
              >
                {children}
              </motion.div>
            </div>
          ) : (
            <div className="bg-[var(--code-bg)]">
              <CodeBlock 
                code={code} 
                language="tsx" 
                className="border-0 rounded-none shadow-none" 
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
