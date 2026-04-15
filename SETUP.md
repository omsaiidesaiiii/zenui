# 🛠 ZenUI Setup & Developer Guide

This guide covers how to use ZenUI in your project and how to contribute to the library.

## 🚀 Usage Guide (For Users)

### 1. Initialize ZenUI
Run the following in your React or Next.js project root:

```bash
npx zen-ui-cli init
```

*This will walk you through setting up Tailwind CSS, TypeScript, and path aliases.*

### 2. Discover Components
Check what's available in the registry:

```bash
npx zen-ui-cli list
```

### 3. Add Components
Install any component directly into your codebase:

```bash
npx zen-ui-cli add button
```

---

## 👨‍💻 Developer Guide (For Contributors)

If you want to modify the CLI or the Registry API, follow these steps:

### Prerequisites
- Node.js (v18+)
- Local registry server running on port 3001

### 1. Repository Structure
- `/cli`: The command-line interface (published to npm as `zen-ui-cli`).
- `/ui-registry-api`: The backend server that stores and serves component code.
- `/app`: The internal documentation/website for ZenUI.

### 2. Setting Up the CLI Locally
```bash
cd cli
npm install
npm link
```
*Using `npm link` allows you to run the `zenui` command globally using your local files instead of the published npm package.*

### 3. Running the Registry API
The CLI fetches components from this API. You must keep it running during development:
```bash
cd ui-registry-api
npm install
node index.js
```

### 4. Adding New Components to Registry
1. Add the component code in the `ui-registry-api/components` folder.
2. Update the `index.js` (or `data.json` if used) in the registry to include the new component metadata.

---

## 🔧 Registry API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/components` | Returns a list of all component metadata |
| GET | `/components/:id` | Returns the source code and dependencies for a component |

---

## 📝 Troubleshooting

### Registry Connexion Error
If the CLI says `Registry unavailable at http://localhost:3001`, ensure you have started the `ui-registry-api` server.

### Tailwind CSS Conflicts
ZenUI works best with a standard Tailwind CSS setup. If your `tailwind.config` is highly custom, you may need to manually add the ZenUI component paths to the `content` array.

---

## 📜 License
MIT
