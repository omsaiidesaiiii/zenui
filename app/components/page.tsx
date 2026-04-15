import Link from "next/link";

const components = ["button"];

export default function ComponentsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Components</h1>

      <ul className="space-y-4">
        {components.map((comp) => (
          <li key={comp}>
            <Link href={`/components/${comp}`} className="text-blue-500">
              {comp}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}