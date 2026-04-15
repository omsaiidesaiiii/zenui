#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import fetch from 'node-fetch';
import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';

const logger = {
  info: (msg) => console.log(chalk.blue('ℹ ') + msg),
  success: (msg) => console.log(chalk.green('✔ ') + msg),
  warning: (msg) => console.log(chalk.yellow('⚠ ') + msg),
  error: (msg) => console.log(chalk.red('✘ ') + msg),
  break: () => console.log(''),
};

function installDeps(deps) {
  const spinner = ora(`Installing dependencies: ${deps.join(', ')}...`).start();
  try {
    execSync(`npm install ${deps.join(' ')}`, { stdio: 'ignore' });
    spinner.succeed(chalk.green('Dependencies installed successfully.'));
  } catch (e) {
    spinner.fail(chalk.red('Failed to install dependencies.'));
    logger.error('Please run: ' + chalk.cyan(`npm install ${deps.join(' ')}`));
  }
}

async function detectFramework() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  if (!(await fs.pathExists(pkgPath))) {
    throw new Error('No package.json found. Please run this command in your project root.');
  }
  const pkg = await fs.readJson(pkgPath);
  if (pkg.dependencies?.next) return 'next';
  if (pkg.dependencies?.react) return 'react';
  return 'unknown';
}

function detectTypeScript() {
  return fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));
}

async function detectTailwind() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  const pkg = await fs.readJson(pkgPath);
  return !!pkg.dependencies?.tailwindcss || !!pkg.devDependencies?.tailwindcss;
}

async function setupTailwind() {
  const spinner = ora('Setting up Tailwind CSS...').start();
  try {
    execSync('npm install -D tailwindcss postcss autoprefixer', { stdio: 'ignore' });

    const configPath = path.join(process.cwd(), 'tailwind.config.ts');
    if (!fs.existsSync(configPath)) {
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
      await fs.writeFile(configPath, config);
    }

    const postcssPath = path.join(process.cwd(), 'postcss.config.mjs');
    if (!fs.existsSync(postcssPath)) {
      const postCssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;
      await fs.writeFile(postcssPath, postCssConfig);
    }
    spinner.succeed(chalk.green('Tailwind CSS configured.'));
  } catch (error) {
    spinner.fail(chalk.red('Failed to setup Tailwind: ' + error.message));
  }
}

async function setupProject(skipPrompts = false) {
  try {
    const framework = await detectFramework();
    const hasTypeScript = detectTypeScript();
    const hasTailwind = await detectTailwind();

    logger.info(`Detected framework: ${chalk.cyan(framework)}`);
    logger.info(`TypeScript: ${hasTypeScript ? chalk.green('Yes') : chalk.red('No')}`);
    logger.info(`Tailwind CSS: ${hasTailwind ? chalk.green('Yes') : chalk.red('No')}`);
    logger.break();

    let config = {
      style: 'default',
      typescript: hasTypeScript,
      tailwind: hasTailwind
    };

    if (!skipPrompts) {
      const answers = await prompts([
        {
          type: 'select',
          name: 'style',
          message: 'Choose a style',
          choices: [
            { title: 'Default', value: 'default' },
            { title: 'Modern', value: 'modern' }
          ],
          initial: 0
        },
        {
          type: 'confirm',
          name: 'typescript',
          message: 'Use TypeScript?',
          initial: hasTypeScript
        },
        {
          type: 'confirm',
          name: 'tailwind',
          message: 'Use Tailwind CSS?',
          initial: hasTailwind
        }
      ]);
      config = { ...config, ...answers };
    }

    if (config.tailwind && !hasTailwind) {
      await setupTailwind();
    }

    const configSpinner = ora('Initializing configuration...').start();
    const configPath = path.join(process.cwd(), 'components.json');
    if (!(await fs.pathExists(configPath))) {
      await fs.writeJson(configPath, {
        style: config.style,
        typescript: config.typescript,
        tailwind: config.tailwind,
        aliases: { components: '@/components', utils: '@/lib/utils' }
      }, { spaces: 2 });
    }

    const folders = ['components/ui', 'lib'];
    for (const folder of folders) {
      await fs.ensureDir(path.join(process.cwd(), folder));
    }

    const utilsPath = path.join(process.cwd(), 'lib/utils.ts');
    if (!(await fs.pathExists(utilsPath))) {
      await fs.writeFile(utilsPath, `
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
`);
    }
    configSpinner.succeed(chalk.green('Project structure initialized.'));

    const depSpinner = ora('Installing required UI dependencies...').start();
    try {
      execSync('npm install clsx tailwind-merge class-variance-authority lucide-react', { stdio: 'ignore' });
      depSpinner.succeed(chalk.green('UI dependencies installed.'));
    } catch (e) {
      depSpinner.fail(chalk.red('Failed to install UI dependencies.'));
    }

    logger.break();
    logger.success('ZenUI has been initialized successfully!');
  } catch (error) {
    logger.error('Error during setup: ' + error.message);
    process.exit(1);
  }
}

program
  .name('zenui')
  .description('CLI for ZenUI library')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize ZenUI in your project')
  .option('--yes, -y', 'Skip prompts and use defaults')
  .action(async (options) => {
    console.log(chalk.bold.magenta('\n🚀 ZenUI CLI v1.0.0\n'));
    await setupProject(options.yes);
  });

program
  .command('add')
  .description('Add a component to your project')
  .argument('<component>', 'The component to add')
  .action(async (component) => {
    const spinner = ora(`Fetching ${chalk.cyan(component)}...`).start();
    try {
      const res = await fetch(`http://localhost:3001/components/${component}`);
      if (!res.ok) {
        spinner.fail(chalk.red(`Component "${component}" not found.`));
        return;
      }

      const data = await res.json();
      spinner.text = `Installing ${chalk.cyan(component)}...`;

      for (const file of data.files) {
        const targetPath = path.join(process.cwd(), file.path);
        await fs.ensureDir(path.dirname(targetPath));
        await fs.writeFile(targetPath, file.content);
      }

      spinner.succeed(chalk.green(`${chalk.bold(component)} installed successfully.`));

      if (data.dependencies?.length) {
        logger.break();
        installDeps(data.dependencies);
      }
    } catch (error) {
      spinner.fail(chalk.red('Error fetching component: ' + error.message));
      logger.info('Make sure the ZenUI registry is running at http://localhost:3001');
    }
  });

program
  .command('list')
  .description('List all available components')
  .action(async () => {
    const spinner = ora('Fetching available components...').start();
    try {
      const res = await fetch('http://localhost:3001/components');
      if (!res.ok) {
        spinner.fail(chalk.red('Failed to fetch components.'));
        return;
      }

      const data = await res.json();
      spinner.stop();

      if (data.components?.length > 0) {
        console.log(chalk.bold.magenta('\n✨ Available Components:\n'));
        data.components.forEach((comp) => {
          console.log(`  ${chalk.green('•')} ${chalk.bold(comp.name.padEnd(15))} ${chalk.dim(comp.description || 'No description')}`);
        });
        console.log('');
      } else {
        logger.info('No components found in the registry.');
      }
    } catch (error) {
      spinner.fail(chalk.red('Error: ' + error.message));
      logger.info('Registry unavailable at http://localhost:3001');
    }
  });

program.parse();
