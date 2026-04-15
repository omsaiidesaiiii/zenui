import { Header } from "@/components/website/header";
import { Hero } from "@/components/website/hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="p-10">
        <h2 className="text-3xl font-bold mb-6">Components</h2>

        <div className="grid grid-cols-2 gap-6">
          <Card>
            <h3 className="mb-4 font-semibold">Button</h3>
            <div className="flex gap-2">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 font-semibold">Card</h3>
            <p>This is a reusable card component.</p>
          </Card>
        </div>
      </section>
    </main>
  );
}