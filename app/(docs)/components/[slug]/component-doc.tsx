"use client";

import { ComponentPreview } from "@/components/website/component-preview";
import { CodeBlock } from "@/components/website/code-block";
import type { ComponentMeta } from "@/lib/component-registry";

// ─── Live previews & code for each component ────────────────────────────────

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// ─── Button previews ────────────────────────────────────────────────────────

function ButtonDefaultPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default" size="md">
        Default
      </Button>
      <Button variant="outline" size="md">
        Outline
      </Button>
      <Button variant="ghost" size="md">
        Ghost
      </Button>
    </div>
  );
}

function ButtonSizesPreview() {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <Button variant="default" size="sm">
        Small
      </Button>
      <Button variant="default" size="md">
        Medium
      </Button>
      <Button variant="default" size="lg">
        Large
      </Button>
    </div>
  );
}

// ─── Card preview ───────────────────────────────────────────────────────────

function CardDefaultPreview() {
  return (
    <Card className="max-w-sm">
      <h3 className="text-lg font-semibold mb-1">Card Title</h3>
      <p className="text-sm text-[var(--muted-foreground)]">
        This is a basic card component with a clean, minimal design.
      </p>
    </Card>
  );
}

// ─── Source code strings ────────────────────────────────────────────────────

const buttonInstallCode = `import { Button } from "@/components/ui/button"`;

const buttonSourceCode = `import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-gray-800",
        outline: "border border-gray-300 hover:bg-gray-100",
        ghost: "hover:bg-gray-100",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}`;

const buttonUsageCode = `<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`;

const buttonSizesCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const cardSourceCode = `import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white dark:bg-neutral-900 p-6 shadow-md hover:shadow-lg transition",
        className
      )}
      {...props}
    />
  );
}`;

const cardUsageCode = `import { Card } from "@/components/ui/card"

<Card>
  <h3 className="text-lg font-semibold mb-1">Card Title</h3>
  <p className="text-sm text-muted-foreground">
    Card description goes here.
  </p>
</Card>`;

// ─── Component documentation map ───────────────────────────────────────────

interface DocSection {
  title: string;
  preview?: React.ReactNode;
  code: string;
  /** If true, show only a code block (no preview panel) */
  codeOnly?: boolean;
  filename?: string;
}

interface DocConfig {
  installCode: string;
  sections: DocSection[];
}

const docs: Record<string, DocConfig> = {
  button: {
    installCode: buttonInstallCode,
    sections: [
      {
        title: "Default",
        preview: <ButtonDefaultPreview />,
        code: buttonUsageCode,
      },
      {
        title: "Sizes",
        preview: <ButtonSizesPreview />,
        code: buttonSizesCode,
      },
      {
        title: "Source Code",
        code: buttonSourceCode,
        codeOnly: true,
        filename: "components/ui/button.tsx",
      },
    ],
  },
  card: {
    installCode: `import { Card } from "@/components/ui/card"`,
    sections: [
      {
        title: "Default",
        preview: <CardDefaultPreview />,
        code: cardUsageCode,
      },
      {
        title: "Source Code",
        code: cardSourceCode,
        codeOnly: true,
        filename: "components/ui/card.tsx",
      },
    ],
  },
};

// ─── Main component ────────────────────────────────────────────────────────

export function ComponentDoc({ meta }: { meta: ComponentMeta }) {
  const doc = docs[meta.slug];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{meta.name}</h1>
        <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
          {meta.description}
        </p>
      </div>

      {/* Install / Import */}
      {doc && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold tracking-tight">Import</h2>
          <CodeBlock code={doc.installCode} language="tsx" />
        </div>
      )}

      {/* Separator */}
      <hr className="border-[var(--border)]" />

      {/* Sections */}
      {doc?.sections.map((section, i) => (
        <div key={i} className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">
            {section.title}
          </h2>

          {section.codeOnly ? (
            <CodeBlock
              code={section.code}
              language="tsx"
              filename={section.filename}
            />
          ) : (
            <ComponentPreview code={section.code}>
              {section.preview}
            </ComponentPreview>
          )}
        </div>
      ))}

      {/* Fallback if no docs are registered yet */}
      {!doc && (
        <div className="rounded-lg border border-dashed border-[var(--border)] p-12 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            Documentation for <strong>{meta.name}</strong> is coming soon.
          </p>
        </div>
      )}
    </div>
  );
}
