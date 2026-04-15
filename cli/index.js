#!/usr/bin/env node

import {program} from 'commander';
import fs from 'fs-extra';
import path from 'path';
import {execSync} from 'child_process';
import fetch from 'node-fetch';
import prompts from 'prompts';

function installDeps (deps) {
  try {
    execSync (`npm install ${deps.join (' ')}`, {stdio: 'inherit'});
  } catch (e) {
    console.log ('Failed to install dependencies');
  }
}

async function detectFramework () {
  const pkgPath = path.join (process.cwd (), 'package.json');

  if (!(await fs.pathExists (pkgPath))) {
    throw new Error ('No package.json found');
  }

  const pkg = await fs.readJson (pkgPath);

  if (pkg.dependencies?.next) return 'next';
  if (pkg.dependencies?.react) return 'react';

  return 'unknown';
}

function detectTypeScript () {
  return fs.existsSync (path.join (process.cwd (), 'tsconfig.json'));
}

async function detectTailwind () {
  const pkgPath = path.join (process.cwd (), 'package.json');
  const pkg = await fs.readJson (pkgPath);
  return !!pkg.dependencies?.tailwindcss || !!pkg.devDependencies?.tailwindcss;
}

async function setupTailwind () {
  console.log ('📦 Setting up Tailwind CSS...');

  try {
    execSync ('npm install -D tailwindcss postcss autoprefixer', { stdio: 'inherit' });

    // Check if tailwind.config.ts exists
    const configPath = path.join (process.cwd (), 'tailwind.config.ts');
    if (!fs.existsSync (configPath)) {
      const config = `import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
`;
      await fs.writeFile (configPath, config);
      console.log ('✅ tailwind.config.ts created');
    }

    // Check if postcss.config.mjs exists
    const postcssPath = path.join (process.cwd (), 'postcss.config.mjs');
    if (!fs.existsSync (postcssPath)) {
      const postCssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;
      await fs.writeFile (postcssPath, postCssConfig);
      console.log ('✅ postcss.config.mjs created');
    }
  } catch (error) {
    console.log ('⚠️ Failed to setup Tailwind:', error.message);
  }
}

async function createConfig () {
  const configPath = path.join (process.cwd (), 'components.json');

  if (await fs.pathExists (configPath)) {
    console.log ('⚠️ components.json already exists');
    return;
  }

  const config = {
    style: 'default',
    typescript: true,
    tailwind: true,
    aliases: {
      components: '@/components',
      utils: '@/lib/utils'
    }
  };

  await fs.writeJson (configPath, config, { spaces: 2 });

  console.log ('✅ components.json created');
}

async function createFolders () {
  const folders = ['components/ui', 'lib'];

  for (const folder of folders) {
    await fs.ensureDir (path.join (process.cwd (), folder));
  }

  console.log ('📁 Folders created');
}

async function createUtils () {
  const filePath = path.join (process.cwd (), 'lib/utils.ts');

  if (await fs.pathExists (filePath)) return;

  const content = `
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
`;

  await fs.writeFile (filePath, content);

  console.log ('✅ utils.ts created');
}

function installRequiredDeps () {
  console.log ('📦 Installing dependencies...');

  execSync (
    'npm install clsx tailwind-merge class-variance-authority lucide-react',
    { stdio: 'inherit' }
  );
}

async function setupProject (skipPrompts = false) {
  try {
    const framework = await detectFramework ();
    const hasTypeScript = detectTypeScript ();
    const hasTailwind = await detectTailwind ();

    console.log ('🔍 Detected framework:', framework);
    console.log ('🔍 TypeScript:', hasTypeScript ? '✅' : '❌');
    console.log ('🔍 Tailwind:', hasTailwind ? '✅' : '❌');

    let config = {
      style: 'default',
      typescript: hasTypeScript,
      tailwind: hasTailwind
    };

    // Ask for preferences unless --yes flag is used
    if (!skipPrompts) {
      const answers = await prompts ([
        {
          type: 'select',
          name: 'style',
          message: '✔ Choose style',
          choices: [
            { title: 'default', value: 'default' },
            { title: 'modern', value: 'modern' }
          ],
          initial: 0
        },
        {
          type: 'confirm',
          name: 'typescript',
          message: '✔ Use TypeScript?',
          initial: hasTypeScript
        },
        {
          type: 'confirm',
          name: 'tailwind',
          message: '✔ Use Tailwind CSS?',
          initial: hasTailwind
        }
      ]);

      config = { ...config, ...answers };
    }

    // Setup Tailwind if needed
    if (config.tailwind && !hasTailwind) {
      await setupTailwind ();
    }

    await createConfig ();
    await createFolders ();
    await createUtils ();
    installRequiredDeps ();

    console.log ('✨ Project setup initialized');
    console.log ('📝 Configuration:', config);
  } catch (error) {
    console.log ('❌ Error during setup:', error.message);
    throw error;
  }
}

function findConfigFile (startPath = process.cwd ()) {
  let currentPath = startPath;
  const root = path.parse (currentPath).root;

  while (currentPath !== root) {
    const configPath = path.join (currentPath, 'components.json');
    if (fs.existsSync (configPath)) {
      return configPath;
    }
    currentPath = path.dirname (currentPath);
  }

  return null;
}

program
  .name ('zenui')
  .description ('CLI for ZenUI library')
  .version ('1.0.0');

program
  .command ('init')
  .description ('Initialize ZenUI library')
  .option ('--yes, -y', 'Skip prompts and use defaults')
  .action (async (options) => {
    console.log ('🚀 Initializing ZenUI...');

    await setupProject (options.yes);

    console.log ('✅ Setup complete!');
  });

program.command ('add').argument ('<component>').action (async component => {
  try {
    const res = await fetch (`http://localhost:3001/components/${component}`);

    if (!res.ok) {
      console.log ('❌ Component not found');
      return;
    }

    const data = await res.json ();

    for (const file of data.files) {
      const targetPath = path.join (process.cwd (), file.path);

      await fs.ensureDir (path.dirname (targetPath));
      await fs.writeFile (targetPath, file.content);
    }

    console.log (`✅ ${component} installed`);

    // Install dependencies
    if (data.dependencies?.length) {
      console.log ('Installing dependencies...');
      installDeps (data.dependencies);
    }
  } catch (error) {
    console.log ('❌ Error fetching component:', error.message);
    console.log ('Make sure the backend is running on http://localhost:3001');
  }
});

program
  .command ('list')
  .description ('List all available components')
  .action (async () => {
    try {
      console.log ('📦 Fetching available components...');
      const res = await fetch ('http://localhost:3001/components');

      if (!res.ok) {
        console.log ('❌ Failed to fetch components (Status: ' + res.status + ')');
        console.log ('Make sure the backend is running on http://localhost:3001');
        return;
      }

      const data = await res.json ();

      if (data.components && data.components.length > 0) {
        console.log ('\n✨ Available Components:\n');
        data.components.forEach ((comp) => {
          console.log (`  • ${comp.name} - ${comp.description || 'No description'}`);
        });
        console.log ('');
      } else {
        console.log ('No components available');
      }
    } catch (error) {
      console.log ('❌ Error fetching components:', error.message);
      console.log ('Make sure the backend is running on http://localhost:3001');
    }
  });

program.parse ();
