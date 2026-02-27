#!/usr/bin/env node

/**
 * Verification script to check if the lit-html security fix is properly applied
 * Can be run manually or integrated into CI/CD pipelines
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES module context
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('🔍 Verifying lit-html security fix...');

// Define the path to the lit-html file
const litHtmlPath = path.resolve(projectRoot, 'node_modules/lit/node_modules/lit-html/node/lit-html.js');

// Check if file exists
if (!fs.existsSync(litHtmlPath)) {
  console.error(`❌ lit-html file not found at ${litHtmlPath}`);
  console.error('Dependencies may not be installed. Run yarn install first.');
  process.exit(1);
}

try {
  console.log(`📄 Checking file: ${litHtmlPath}`);
  
  // Read the file content
  const content = fs.readFileSync(litHtmlPath, 'utf8');
  
  // Check for the secure pattern
  const secureRegex = /v=\/--\[!>\]>\/g/;
  const vulnerableRegex = /v=\/-->\/g/;
  
  if (secureRegex.test(content)) {
    console.log('✅ Security fix is properly applied!');
    console.log('✅ Found secure pattern: v=/--[!>]>/g');
    
    // Double-check that vulnerable pattern is not present
    if (vulnerableRegex.test(content)) {
      console.warn('⚠️  Warning: Vulnerable pattern still detected alongside secure pattern');
      process.exit(1);
    }
    
    console.log('✅ Vulnerable pattern not found - security fix is complete');
    process.exit(0);
  } 
  
  if (vulnerableRegex.test(content)) {
    console.error('❌ SECURITY VULNERABILITY DETECTED!');
    console.error('❌ Found vulnerable pattern: v=/-->/g');
    console.error('❌ Security fix has not been applied');
    console.error('');
    console.error('To fix this issue:');
    console.error('1. Run: node scripts/apply-security-fix.js');
    console.error('2. Or reinstall dependencies: yarn install');
    process.exit(1);
  }
  
  console.warn('⚠️  Could not determine security status');
  console.warn('Neither secure nor vulnerable patterns were found');
  console.warn('The lit-html file structure may have changed');
  process.exit(1);
  
} catch (error) {
  console.error('❌ Error reading lit-html file:', error.message);
  process.exit(1);
}