"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Loader2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ComponentPreview } from "@/components/website/component-preview";
import { CodeBlock } from "@/components/website/code-block";
import type { ComponentMeta } from "@/lib/component-registry";
import { cn } from "@/lib/utils";

// ─── Live previews & code for each component ────────────────────────────────

import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";

// ─── Doc Components ────────────────────────────────────────────────────────

function PropsTable({ props }: { props: { name: string; type: string; default?: string; description: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--border)] mt-4 no-scrollbar">
      <table className="w-full text-left text-sm">
        <thead className="bg-[var(--muted)] text-[var(--foreground)] font-semibold border-b border-[var(--border)]">
          <tr>
            <th className="px-4 py-3">Prop</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Default</th>
            <th className="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {props.map((p) => (
            <tr key={p.name}>
              <td className="px-4 py-3 font-mono text-[var(--accent)]">{p.name}</td>
              <td className="px-4 py-3 text-[var(--muted-foreground)]">{p.type}</td>
              <td className="px-4 py-3 text-[var(--muted-foreground)]">{p.default ?? "-"}</td>
              <td className="px-4 py-3 text-[var(--foreground)]">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CollapsibleCode({ children, className }: { children: React.ReactNode, className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("relative rounded-lg border border-[var(--border)] bg-[var(--code-bg)]", className)}>
      <div 
        className={cn(
          "relative overflow-hidden transition-[max-height] duration-500 ease-in-out",
          !isExpanded && "max-h-[200px]"
        )}
        style={{ maxHeight: isExpanded ? "2000px" : "200px" }}
      >
        {children}
        {!isExpanded && (
          <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center bg-gradient-to-t from-[var(--code-bg)] to-transparent pointer-events-none" />
        )}
      </div>
      
      <div className={cn(
        "flex justify-center p-2 border-t border-[var(--border)]",
        !isExpanded && "absolute inset-x-0 bottom-0 border-t-0"
      )}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 rounded-md bg-[var(--background)] px-4 py-1.5 text-xs font-semibold text-[var(--foreground)] border border-[var(--border)] shadow-sm transition-all hover:bg-[var(--muted)]"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-3.5 w-3.5" />
              See less
            </>
          ) : (
            <>
              <ChevronDown className="h-3.5 w-3.5" />
              See more
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Button Previews ───────────────────────────────────────────────────────

function ButtonVariantsPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

function ButtonIconsPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="outline" size="icon">
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  );
}

function ButtonStatesPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button disabled>Disabled Button</Button>
    </div>
  );
}

// ─── Card Previews ─────────────────────────────────────────────────────────

function CardFullPreview() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
            <p className="text-sm text-[var(--muted-foreground)]">Send notifications to device.</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Mail className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}

// ─── Source strings & Config ───────────────────────────────────────────────

const buttonSource = `import * as React from \"react\";
import { cva, type VariantProps } from \"class-variance-authority\";
import { cn } from \"@/lib/utils\";

const buttonVariants = cva(
  \"inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\",
  {
    variants: {
      variant: {
        default: \"bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200\",
        outline: \"border border-neutral-300 bg-transparent hover:bg-neutral-100\",
        ghost: \"hover:bg-neutral-100\",
        secondary: \"bg-neutral-100 text-neutral-900 hover:bg-neutral-200\",
        danger: \"bg-red-500 text-white hover:bg-red-600\",
      },
      size: {
        sm: \"h-9 rounded-lg px-3\",
        md: \"h-11 px-6\",
        lg: \"h-12 rounded-2xl px-8 text-base\",
        icon: \"h-10 w-10\",
      },
    },
    defaultVariants: {
      variant: \"default\",
      size: \"md\",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = \"Button\";

export { Button, buttonVariants };`;

const cardSource = `import * as React from \"react\";
import { cn } from \"@/lib/utils\";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(\"rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-sm transition-all hover:shadow-md\", className)}
      {...props}
    />
  )
);
Card.displayName = \"Card\";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(\"flex flex-col space-y-1.5 p-6\", className)} {...props} />
  )
);
CardHeader.displayName = \"CardHeader\";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn(\"text-2xl font-semibold leading-none tracking-tight\", className)} {...props} />
  )
);
CardTitle.displayName = \"CardTitle\";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn(\"text-sm text-[var(--muted-foreground)]\", className)} {...props} />
  )
);
CardDescription.displayName = \"CardDescription\";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(\"p-6 pt-0\", className)} {...props} />
  )
);
CardContent.displayName = \"CardContent\";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(\"flex items-center p-6 pt-0\", className)} {...props} />
  )
);
CardFooter.displayName = \"CardFooter\";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`;

const docs = {
  button: {
    import: `import { Button } from \"@/components/ui/button\"`,
    installation: [
      { title: "CLI", code: "npx zen-ui-cli add button" },
      { title: "Manual", code: buttonSource, collapsible: true }
    ],
    props: [
      { name: "variant", type: "\"default\" | \"outline\" | \"ghost\" | \"secondary\" | \"danger\"", default: "\"default\"", description: "The visual style of the button." },
      { name: "size", type: "\"sm\" | \"md\" | \"lg\" | \"icon\"", default: "\"md\"", description: "The size of the button." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the button is interactive." }
    ],
    examples: [
      { title: "Variants", preview: <ButtonVariantsPreview />, code: `<Button variant=\"default\">Default</Button>\n<Button variant=\"secondary\">Secondary</Button>` },
      { title: "With Icons", preview: <ButtonIconsPreview />, code: `<Button>\n  <Mail className=\"mr-2 h-4 w-4\" /> Login with Email\n</Button>` },
      { title: "Active/Disabled states", preview: <ButtonStatesPreview />, code: `<Button disabled>\n  <Loader2 className=\"mr-2 h-4 w-4 animate-spin\" />\n  Please wait\n</Button>` }
    ]
  },
  card: {
    import: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\"`,
    installation: [
      { title: "CLI", code: "npx zen-ui-cli add card" },
      { title: "Manual", code: cardSource, collapsible: true }
    ],
    props: [
      { name: "className", type: "string", description: "Standard React className for styling." },
      { name: "children", type: "ReactNode", description: "Content to be rendered inside the card." }
    ],
    examples: [
      { title: "Full Example", preview: <CardFullPreview />, code: `<Card>\n  <CardHeader>\n    <CardTitle>Notifications</CardTitle>\n    <CardDescription>You have unread messages.</CardDescription>\n  </CardHeader>\n  <CardContent>Content here</CardContent>\n</Card>` }
    ]
  }
};

export function ComponentDoc({ meta }: { meta: ComponentMeta }) {
  const doc = (docs as any)[meta.slug];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-14 pb-16"
    >
      <section className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{meta.name}</h1>
        <p className="text-xl text-[var(--muted-foreground)] leading-relaxed">{meta.description}</p>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">Installation</h2>
        {doc?.installation.map((step: any, i: number) => (
          <div key={i} className="space-y-3">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            {step.collapsible ? (
              <CollapsibleCode>
                <CodeBlock code={step.code} language="tsx" filename={`components/ui/${meta.slug}.tsx`} />
              </CollapsibleCode>
            ) : (
              <CodeBlock code={step.code} language="bash" />
            )}
          </div>
        ))}
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">Usage</h2>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Import</h3>
          <CodeBlock code={doc?.import} language="tsx" />
        </div>
        {doc?.examples.map((example: any, i: number) => (
          <div key={i} className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold">{example.title}</h3>
            <ComponentPreview code={example.code}>{example.preview}</ComponentPreview>
          </div>
        ))}
      </motion.section>

      {doc?.props && (
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold tracking-tight border-b border-[var(--border)] pb-2">API Reference</h2>
          <PropsTable props={doc.props} />
        </motion.section>
      )}

      {!doc && (
        <div className="rounded-xl border border-dashed border-[var(--border)] p-20 text-center">
          <p className="text-[var(--muted-foreground)]">Documentation coming soon for {meta.name}.</p>
        </div>
      )}
    </motion.div>
  );
}
