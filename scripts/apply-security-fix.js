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
  console.error(`❌ lit-html file not found at ${litHtmlPath}`);
  console.error('Make sure dependencies are installed with \'yarn install\'');
  
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
      }
    } catch (e) {
      console.error('Error searching for files:', e.message);
    }
  }
  
  process.exit(1);
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
      console.log('❌ No recognizable vulnerable pattern found');
      process.exit(1);
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
    console.log('❌ Security fix could not be applied - no changes made');
    process.exit(1);
  }
  
  // Write the fixed content
  fs.writeFileSync(litHtmlPath, fixedContent);
  
  console.log('✅ Security fix applied successfully!');
  console.log('✅ HTML comment filtering now handles both --> and --!> properly');
  console.log('✅ RegEx changed from v=/-->/g to v=/--[!>]>/g');
  
} catch (error) {
  console.error('❌ Error applying security fix:', error.message);
  process.exit(1);
}