#!/usr/bin/env node

/**
 * AgtechDesigne Build Validation Script
 * Validates build output for production readiness
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('🔍 Validating build output...\n');

const validations = [
  {
    name: 'Check dist directory exists',
    validate: () => fs.existsSync(distDir),
    error: 'dist directory not found'
  },
  {
    name: 'Check index.html exists',
    validate: () => fs.existsSync(path.join(distDir, 'index.html')),
    error: 'index.html not found in dist'
  },
  {
    name: 'Check assets directory exists',
    validate: () => fs.existsSync(path.join(distDir, 'assets')),
    error: 'assets directory not found'
  },
  {
    name: 'Check CSS files exist',
    validate: () => {
      const assetsDir = path.join(distDir, 'assets');
      if (!fs.existsSync(assetsDir)) return false;
      const files = fs.readdirSync(assetsDir);
      return files.some(file => file.endsWith('.css'));
    },
    error: 'No CSS files found in assets'
  },
  {
    name: 'Check JS files exist',
    validate: () => {
      const assetsDir = path.join(distDir, 'assets');
      if (!fs.existsSync(assetsDir)) return false;
      const files = fs.readdirSync(assetsDir);
      return files.some(file => file.endsWith('.js'));
    },
    error: 'No JavaScript files found in assets'
  },
  {
    name: 'Check agtech-uploads directory',
    validate: () => fs.existsSync(path.join(distDir, 'agtech-uploads')),
    error: 'agtech-uploads directory not found'
  },
  {
    name: 'Check logo image exists',
    validate: () => fs.existsSync(path.join(distDir, 'agtech-uploads', '05117b04-9b40-4413-bcca-0c6d768d3e0e.png')),
    error: 'Logo image not found'
  },
  {
    name: 'Check CEO image exists',
    validate: () => fs.existsSync(path.join(distDir, 'agtech-uploads', 'CEO2.jpg')),
    error: 'CEO image not found'
  },
  {
    name: 'Validate index.html content',
    validate: () => {
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return false;
      const content = fs.readFileSync(indexPath, 'utf8');
      return content.includes('AgtechDesigne') && content.includes('root');
    },
    error: 'index.html content validation failed'
  },
  {
    name: 'Check build size',
    validate: () => {
      const stats = fs.statSync(distDir);
      const size = getDirSize(distDir);
      return size > 0 && size < 50 * 1024 * 1024; // Less than 50MB
    },
    error: 'Build size validation failed'
  }
];

let allValid = true;

for (const validation of validations) {
  try {
    const isValid = validation.validate();
    if (isValid) {
      console.log(`✅ ${validation.name}`);
    } else {
      console.log(`❌ ${validation.name}: ${validation.error}`);
      allValid = false;
    }
  } catch (error) {
    console.log(`❌ ${validation.name}: ${error.message}`);
    allValid = false;
  }
}

if (allValid) {
  console.log('\n🎉 All validations passed! Build is ready for deployment.');
  
  // Print build statistics
  const buildStats = getBuildStats();
  console.log('\n📊 Build Statistics:');
  console.log(`   Total files: ${buildStats.fileCount}`);
  console.log(`   Total size: ${formatBytes(buildStats.totalSize)}`);
  console.log(`   Largest file: ${buildStats.largestFile.name} (${formatBytes(buildStats.largestFile.size)})`);
  
} else {
  console.log('\n❌ Build validation failed! Please fix the issues above.');
  process.exit(1);
}

function getDirSize(dirPath) {
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
  
  calculateSize(dirPath);
  return totalSize;
}

function getBuildStats() {
  let fileCount = 0;
  let totalSize = 0;
  let largestFile = { name: '', size: 0 };
  
  function analyzeDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    files.forEach(file => {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        analyzeDir(filePath);
      } else {
        fileCount++;
        totalSize += stats.size;
        
        if (stats.size > largestFile.size) {
          largestFile = {
            name: path.relative(distDir, filePath),
            size: stats.size
          };
        }
      }
    });
  }
  
  analyzeDir(distDir);
  
  return { fileCount, totalSize, largestFile };
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
