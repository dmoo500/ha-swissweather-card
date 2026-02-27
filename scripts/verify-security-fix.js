#!/usr/bin/env node

/**
 * Security Verification Script for lit-html
 * Verifies that all "Bad HTML filtering regexp" vulnerabilities are fixed
 * Checks for presence of secure patterns and absence of vulnerable patterns
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('🔒 Verifying security fixes for lit-html vulnerabilities...');

/**
 * Find the built file to verify
 */
function findBuiltFile() {
  const builtFilePath = path.resolve(projectRoot, 'swissweather-card.js');
  if (fs.existsSync(builtFilePath)) {
    console.log(`📍 Found built file: swissweather-card.js`);
    return builtFilePath;
  }
  
  console.warn('⚠️  Built file swissweather-card.js not found - run "yarn build" first');
  return null;
}

/**
 * Vulnerability patterns that should NOT exist in the built file
 */
const vulnerablePatterns = [
  {
    name: 'Comment end vulnerability - Ei variable',
    pattern: /Ei = \/-->/g,
    description: 'Ei = /-->/g pattern should be fixed to /--[!>]>/g'
  },
  {
    name: 'Comment end vulnerability - Wi variable', 
    pattern: /Wi = \/-->/g,
    description: 'Wi = /-->/g pattern should be fixed to /--[!>]>/g'
  },
  {
    name: 'Script tag case sensitivity - basic pattern',
    pattern: /\/\^(?:\?\:)?\(script\|style\|textarea\|title\)\$\/i(?!g)/,
    description: 'Case-sensitive script detection should use /gi flag'
  },
  {
    name: 'Script tag case sensitivity - or variable',
    pattern: /or = \/\^(?:\?\:)?\(script\|style\|textarea\|title\)\$\/i(?!g)/,
    description: 'or variable should use case-insensitive flag'
  },
  {
    name: 'Script tag case sensitivity - _r variable',
    pattern: /_r = \/\^(?:\?\:)?\(script\|style\|textarea\|title\)\$\/i(?!g)/,
    description: '_r variable should use case-insensitive flag'
  }
];

/**
 * Secure patterns that SHOULD exist in the built file
 */
const securePatterns = [
  {
    name: 'Secure script tag detection',
    pattern: /script\|style\|textarea\|title.*\/gi/,
    description: 'Case-insensitive script detection with /gi flag'
  }
];

/**
 * Verify security in the built file
 */
function verifyBuiltFile(filePath) {
  console.log(`\n🔍 Verifying security in: ${path.relative(projectRoot, filePath)}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let vulnerabilityCount = 0;
    let securityScore = 0;
    
    console.log('\n🚨 Checking for vulnerable patterns...');
    
    // Check for vulnerable patterns
    for (const vuln of vulnerablePatterns) {
      const matches = content.match(vuln.pattern);
      if (matches) {
        console.log(`❌ VULNERABILITY FOUND: ${vuln.name}`);
        console.log(`   Pattern: ${vuln.pattern}`);
        console.log(`   Description: ${vuln.description}`);
        console.log(`   Matches: ${matches.length}`);
        vulnerabilityCount += matches.length;
      } else {
        console.log(`✅ Safe: ${vuln.name}`);
      }
    }
    
    console.log('\n🔒 Checking for secure patterns...');
    
    // Check for secure patterns
    for (const secure of securePatterns) {
      const matches = content.match(secure.pattern);
      if (matches) {
        console.log(`✅ SECURE PATTERN FOUND: ${secure.name}`);
        console.log(`   Matches: ${matches.length}`);
        securityScore += matches.length;
      } else {
        console.log(`❌ Missing: ${secure.name}`);
        console.log(`   Description: ${secure.description}`);
      }
    }
    
    console.log('\n🎯 Security Verification Summary:');
    console.log(`📊 Vulnerabilities found: ${vulnerabilityCount}`);
    console.log(`🔒 Secure patterns found: ${securityScore}`);
    
    if (vulnerabilityCount === 0 && securityScore > 0) {
      console.log('✅ SECURITY VERIFICATION PASSED');
      console.log('🎉 All lit-html vulnerabilities have been successfully addressed!');
      return true;
    } else if (vulnerabilityCount > 0) {
      console.log('❌ SECURITY VERIFICATION FAILED');
      console.log(`🚨 Found ${vulnerabilityCount} security vulnerabilities that need to be fixed`);
      console.log('💡 Run "yarn postinstall" to apply security fixes');
      return false;
    } else {
      console.log('⚠️  SECURITY VERIFICATION INCOMPLETE');
      console.log('🔧 No vulnerabilities found but secure patterns are missing');
      console.log('💡 Try rebuilding the project with "yarn build"');
      return false;
    }
    
  } catch (err) {
    console.error(`❌ Error reading file: ${err.message}`);
    return false;
  }
}

// Main execution
const builtFile = findBuiltFile();

if (!builtFile) {
  console.log('❌ Cannot verify security without built file');
  console.log('💡 Run "yarn build" first, then try again');
  process.exit(1);
}

const isSecure = verifyBuiltFile(builtFile);

if (isSecure) {
  console.log('\n🎯 Security verification completed successfully!');
  process.exit(0);
} else {
  console.log('\n🚨 Security verification failed!');
  process.exit(1);
}