# 🚀 ZenUI

**ZenUI** is a premium, developer-first UI library built for React and Next.js. It's designed to help you build stunning, high-performance user interfaces with zero friction.

Unlike heavy component libraries, ZenUI uses a **CLI-first approach** (similar to shadcn), giving you full ownership of the code.

---

## ✨ Features

- 💎 **Beautiful Design:** Modern, sleek components out of the box.
- 🛠 **CLI-Driven:** Add components directly to your project using `npx`.
- 🎨 **Minimal & Typed:** Fully TypeScript-ready and built with Tailwind CSS.
- 📦 **Control:** The code lives in your `components/ui` folder—no node_modules bloat.

---

## 🚀 Quick Start

Initialize ZenUI in your Next.js/React project:

```bash
npx zen-ui-cli init
```

### Add your first component:

```bash
npx zen-ui-cli add button
```

---

## 🛠 Commands

| Command | Description |
|---------|-------------|
| `npx zen-ui-cli init` | Setup your project (components.json, utils, etc) |
| `npx zen-ui-cli list` | See all available components in the registry |
| `npx zen-ui-cli add <name>` | Copy a component into your project |

---

## 🏗 Project Structure

After running `init`, ZenUI sets up the following in your project:

```text
├── components/
│   └── ui/             # Your ZenUI components
├── lib/
│   └── utils.ts        # The 'cn' utility helper
└── components.json     # Configuration file
```

---

## 📜 License
Licensed under the [MIT License](LICENSE).
