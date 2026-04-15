#!/usr/bin/env node

import {program} from 'commander';
import fs from 'fs-extra';
import path from 'path';
import {execSync} from 'child_process';

function installDeps (deps) {
  try {
    execSync (`npm install ${deps.join (' ')}`, {stdio: 'inherit'});
  } catch (e) {
    console.log ('Failed to install dependencies');
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
  .name ('your-ui')
  .description ('CLI for your UI library')
  .version ('1.0.0');

program.command ('add').argument ('<component>').action (async component => {
  const configPath = findConfigFile ();

  if (!configPath) {
    console.log ('❌ components.json not found');
    return;
  }

  const projectRoot = path.dirname (configPath);
  const config = await fs.readJson (configPath);
  console.log ('Using config:', config.style);

  const source = path.join (projectRoot, 'registry', 'components', component);
  const target = path.join (projectRoot, 'components/ui', component);

  if (!await fs.pathExists (source)) {
    console.log ('Component not found');
    return;
  }

  await fs.copy (source, target);

  console.log (`✅ ${component} added successfully`);

  // Install required dependencies
  installDeps (['clsx', 'tailwind-merge']);
});

program.parse ();
