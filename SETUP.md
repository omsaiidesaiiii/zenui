# ZenUI Setup Guide

## Prerequisites

- Node.js and npm installed
- Windows, macOS, or Linux

## Installation

### 1. Install CLI Dependencies

```bash
cd cli
npm install
```

### 2. Install Backend API Dependencies

```bash
cd ui-registry-api
npm install
```

### 3. Create a symlink for the CLI (optional but recommended)

```bash
cd cli
npm link
```

This allows you to use `zen-ui` command globally.

## Running the Backend

Start the UI Registry API server in a terminal:

```bash
cd ui-registry-api
node index.js
```

You should see:
```
Server running on port 3001
```

**Keep this terminal open while using the CLI.**

## Using the CLI

### Initialize a new project

```bash
# Interactive mode (prompts for style, TypeScript, Tailwind)
zen-ui init

# Quick mode (skip all prompts, use defaults)
zen-ui init --yes
zen-ui init -y
```

This will:
- ✅ Detect your project framework (Next.js or React)
- ✅ Create `components.json` configuration
- 📁 Create folder structure (`components/ui`, `lib`)
- ✅ Create utility functions (`lib/utils.ts`)
- 📦 Install required dependencies

### List available components

```bash
zen-ui list
```

Shows all available components from the registry.

### Add a component

```bash
zen-ui add button
```

Installs the specified component and its dependencies.

## Available Commands

| Command | Description |
|---------|-------------|
| `zen-ui init [--yes]` | Initialize UI library in your project |
| `zen-ui list` | List all available components |
| `zen-ui add <component>` | Install a component from the registry |

## Troubleshooting

### "Failed to fetch components" or "Failed to fetch component"

**Solution:** Make sure the backend API is running:
```bash
cd ui-registry-api
node index.js
```

The API must be running on `http://localhost:3001` for the CLI to work.

### Module not found errors

**Solution:** Install dependencies:
```bash
npm install
```

## Project Structure

After running `zen-ui init`, your project will have:

```
components/
  ui/          # UI components go here
lib/
  utils.ts     # Utility functions (cn helper)
components.json # Configuration file
```

## Configuration File (components.json)

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

- `style`: Component style preset (default or modern)
- `typescript`: Whether to use TypeScript
- `tailwind`: Whether to use Tailwind CSS
- `aliases`: Path aliases for imports
