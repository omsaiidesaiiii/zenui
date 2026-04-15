import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">
        Build Beautiful UI Faster
      </h1>
      <p className="text-gray-500 mb-6">
        A modern UI component library built with Next.js & Tailwind
      </p>
      <Button>Get Started</Button>
    </section>
  );
}