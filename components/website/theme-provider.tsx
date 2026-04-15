"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
      forcedTheme={undefined}
      enableColorScheme={false}
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
