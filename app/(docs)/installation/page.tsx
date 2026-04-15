import { CodeBlock } from "@/components/website/code-block";

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Installation</h1>
        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
          How to get started with ZenUI in your project.
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Manual Installation</h2>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            ZenUI is designed to be copy-pasted into your project. You own the code.
          </p>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">1. Install dependencies</h3>
            <CodeBlock 
              code="npm install clsx tailwind-merge class-variance-authority lucide-react" 
              language="bash" 
            />
            
            <h3 className="text-sm font-medium">2. Add utility function</h3>
            <p className="text-xs text-[var(--muted-foreground)] mb-2">Create a <code>lib/utils.ts</code> file and add the following code:</p>
            <CodeBlock 
              code={`import { clsx, type ClassValue } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`} 
              language="tsx" 
              filename="lib/utils.ts"
            />
          </div>
        </section>

        <hr className="border-[var(--border)]" />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">CLI Installation</h2>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            The easiest way to get started is by using our CLI tool to initialize your project.
          </p>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[var(--foreground)]">Run the init command</h3>
            <CodeBlock 
              code="npx zen-ui-cli init" 
              language="bash" 
            />
            <p className="text-xs text-[var(--muted-foreground)]">
              This will automatically configure your Tailwind setup, install peer dependencies, and create the necessary folders.
            </p>
          </div>
        </section>

        <hr className="border-[var(--border)]" />

        <section className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Framework Quickstart</h2>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            New to React? Start with one of these templates using npm:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--border)] p-4 space-y-2">
              <h3 className="text-sm font-semibold">Next.js</h3>
              <p className="text-xs text-[var(--muted-foreground)]">Full-stack framework with App Router.</p>
              <CodeBlock code="npx create-next-app@latest" language="bash" />
            </div>
            <div className="rounded-lg border border-[var(--border)] p-4 space-y-2">
              <h3 className="text-sm font-semibold">Vite (React)</h3>
              <p className="text-xs text-[var(--muted-foreground)]">Fast frontend build tool.</p>
              <CodeBlock code="npm create vite@latest" language="bash" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
