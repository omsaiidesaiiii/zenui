export interface ComponentMeta {
  slug: string;
  name: string;
  description: string;
  /** Category for grouping in sidebar */
  category: "Components" | "Form" | "Layout" | "Feedback";
}

/**
 * Central registry of all documented components.
 * Add new entries here and they'll automatically appear
 * in the sidebar and be routable via /components/[slug].
 */
export const componentRegistry: ComponentMeta[] = [
  {
    slug: "button",
    name: "Button",
    description:
      "Displays a button or a component that looks like a button.",
    category: "Components",
  },
  {
    slug: "card",
    name: "Card",
    description:
      "Displays a card with header, content, and footer.",
    category: "Components",
  },
];

/** Group components by category for sidebar rendering */
export function getComponentsByCategory() {
  const groups: Record<string, ComponentMeta[]> = {};
  for (const comp of componentRegistry) {
    if (!groups[comp.category]) groups[comp.category] = [];
    groups[comp.category].push(comp);
  }
  return groups;
}

/** Look up a single component by slug */
export function getComponentBySlug(slug: string) {
  return componentRegistry.find((c) => c.slug === slug) ?? null;
}
