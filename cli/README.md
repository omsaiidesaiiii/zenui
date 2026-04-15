# ZenUI CLI

The official CLI for ZenUI. Quickly initialize your project and add beautiful, accessible components.

## 🚀 Quick Start

You can run ZenUI directly without installation using `npx`:

```bash
npx zen-ui-cli init
```

## 🛠 Commands

### `init`
Initializes your project by creating a `components.json` file and setting up necessary folders and utils.

```bash
npx zen-ui-cli init
```

### `add <component>`
Adds a specific component to your project.

```bash
npx zen-ui-cli add button
```

### `list`
Lists all available components in the ZenUI registry.

```bash
npx zen-ui-cli list
```

## 📝 Configuration

The CLI uses a `components.json` file to manage aliases and preferences:

```json
{
  "style": "default",
  "typescript": true,
  "tailwind": true,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## License
MIT
