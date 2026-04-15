import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white dark:bg-neutral-900 p-6 shadow-md hover:shadow-lg transition",
        className
      )}
      {...props}
    />
  );
}
