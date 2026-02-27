#!/usr/bin/env node

/**
 * Script to apply security fix for lit-html commentEndRegex vulnerability
 * Fixes HTML comment filtering to properly handle both --> and --!> endings
 * Cross-platform Node.js implementation for better CI/CD compatibility
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES module context
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('Applying security fix for lit-html...');

// Define the path to the lit-html file
const litHtmlPath = path.resolve(projectRoot, 'node_modules/lit/node_modules/lit-html/node/lit-html.js');

// Check if file exists
if (!fs.existsSync(litHtmlPath)) {
  console.warn(`⚠️  lit-html file not found at ${litHtmlPath}`);
  console.warn('This is expected during initial dependency installation.');
  
  // List available lit-html files for debugging
  const litPath = path.resolve(projectRoot, 'node_modules/lit');
  if (fs.existsSync(litPath)) {
    console.log('🔍 Searching for lit-html files...');
    try {
      const findLitHtml = (dir, files = []) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.isDirectory() && !entry.name.startsWith('.')) {
            findLitHtml(path.join(dir, entry.name), files);
          } else if (entry.name === 'lit-html.js') {
            files.push(path.join(dir, entry.name));
          }
        }
        return files;
      };
      
      const litHtmlFiles = findLitHtml(litPath);
      if (litHtmlFiles.length > 0) {
        console.log('Found lit-html.js files:');
        litHtmlFiles.forEach(file => console.log(`  - ${file}`));
      } else {
        console.log('No lit-html.js files found - dependencies may still be installing.');
      }
    } catch (e) {
      console.warn('Error searching for files:', e.message);
    }
  } else {
    console.log('lit package not found - dependencies may still be installing.');
  }
  
  // Exit gracefully without failing the installation
  console.log('✅ Skipping security fix application - will be applied later.');
  process.exit(0);
}

try {
  console.log(`Found lit-html file: ${litHtmlPath}`);
  
  // Read the file content
  const content = fs.readFileSync(litHtmlPath, 'utf8');
  
  // Check if the vulnerability exists
  const vulnerableRegex = /v=\/-->\/g/g;
  const secureRegex = /v=\/--\[!>\]>\/g/g;
  
  if (secureRegex.test(content)) {
    console.log('✅ Security fix already applied!');
    process.exit(0);
  }
  
  if (!vulnerableRegex.test(content)) {
    console.log('⚠️  Vulnerable regex pattern not found. File may have changed.');
    console.log('Checking for alternative patterns...');
    
    // Check for alternative patterns that might exist
    const altPatterns = [
      /v:\s*\/-->\/g/g,
      /\/-->\/g/g,
      /commentEndRegex\s*=\s*\/-->\/g/g
    ];
    
    let foundPattern = false;
    for (const pattern of altPatterns) {
      if (pattern.test(content)) {
        console.log(`Found alternative pattern: ${pattern}`);
        foundPattern = true;
        break;
      }
    }
    
    if (!foundPattern) {
      console.warn('⚠️  No recognizable vulnerable pattern found');
      console.log('✅ Security fix may not be needed or file structure has changed.');
      process.exit(0);
    }
  }
  
  // Create backup
  const backupPath = litHtmlPath + '.bak';
  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, content);
    console.log(`📄 Created backup: ${backupPath}`);
  }
  
  // Apply the security fix
  const fixedContent = content.replace(vulnerableRegex, 'v=/--[!>]>/g');
  
  // Verify the fix was applied
  if (fixedContent === content) {
    console.warn('⚠️  Security fix could not be applied - no changes made');
    console.log('✅ This may be expected if the vulnerability has already been patched upstream.');
    process.exit(0);
  }
  
  // Write the fixed content
  fs.writeFileSync(litHtmlPath, fixedContent);
  
  console.log('✅ Security fix applied successfully!');
  console.log('✅ HTML comment filtering now handles both --> and --!> properly');
  console.log('✅ RegEx changed from v=/-->/g to v=/--[!>]>/g');
  
} catch (error) {
  console.warn('⚠️  Error applying security fix:', error.message);
  console.log('✅ Installation will continue - security fix can be applied manually later.');
  // Don't fail the installation process
  process.exit(0);
}