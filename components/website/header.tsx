import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-xl font-bold">UI-Library</h1>
      <ThemeToggle />
    </header>
  );
}