#!/usr/bin/env node

/**
 * AgtechDesigne Build Script
 * Professional build process with optimization and validation
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 AgtechDesigne Build Process Started...\n');

// Build steps
const buildSteps = [
  {
    name: 'Clean previous build',
    command: 'rm -rf dist',
    description: 'Removing previous build artifacts'
  },
  {
    name: 'Install dependencies',
    command: 'npm install --legacy-peer-deps',
    description: 'Installing project dependencies'
  },
  {
    name: 'Type checking',
    command: 'npx tsc --noEmit',
    description: 'Running TypeScript type checking'
  },
  {
    name: 'Linting',
    command: 'npx eslint src --ext .ts,.tsx --max-warnings 0',
    description: 'Running ESLint code quality checks'
  },
  {
    name: 'Build application',
    command: 'npm run build',
    description: 'Building optimized production bundle'
  },
  {
    name: 'Validate build',
    command: 'node scripts/validate-build.js',
    description: 'Validating build output'
  }
];

// Execute build steps
for (const step of buildSteps) {
  console.log(`📦 ${step.name}...`);
  console.log(`   ${step.description}`);
  
  try {
    execSync(step.command, { 
      cwd: rootDir, 
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' }
    });
    console.log(`✅ ${step.name} completed\n`);
  } catch (error) {
    console.error(`❌ ${step.name} failed:`);
    console.error(error.message);
    process.exit(1);
  }
}

// Build summary
const distPath = path.join(rootDir, 'dist');
const buildSize = getBuildSize(distPath);

console.log('🎉 Build completed successfully!\n');
console.log('📊 Build Summary:');
console.log(`   Output directory: ${distPath}`);
console.log(`   Total size: ${buildSize}`);
console.log(`   Ready for deployment to Vercel\n`);

function getBuildSize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(currentPath) {
    const stats = fs.statSync(currentPath);
    
    if (stats.isDirectory()) {
      const files = fs.readdirSync(currentPath);
      files.forEach(file => {
        calculateSize(path.join(currentPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  if (fs.existsSync(dirPath)) {
    calculateSize(dirPath);
  }
  
  return formatBytes(totalSize);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
