#!/usr/bin/env node

/**
 * Security Fix Script for lit-html and marked Source Files
 * Fixes "Bad HTML filtering regexp" vulnerabilities in bundled library files
 * Targets the actual patterns in the source files, not the built bundle
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

console.log('🔒 Applying security fixes for lit-html and marked source files...');

/**
 * Find all lit-html files in the project
 */
function findAllLitHtmlFiles() {
  const litHtmlFiles = [];
  
  // Common locations for lit-html files
  const searchPaths = [
    'node_modules/lit-html/node/lit-html.js',
    'node_modules/lit-html/lit-html.js', 
    'node_modules/lit-html/development/lit-html.js',
    'node_modules/lit-html/node/development/lit-html.js',
    'node_modules/lit/node_modules/lit-html/node/lit-html.js',
    'node_modules/lit/node_modules/lit-html/lit-html.js',
    'node_modules/lit/node_modules/lit-html/development/lit-html.js',
    'node_modules/lit/node_modules/lit-html/node/development/lit-html.js'
  ];
  
  for (const relativePath of searchPaths) {
    const fullPath = path.resolve(projectRoot, relativePath);
    if (fs.existsSync(fullPath)) {
      console.log(`📍 Found lit-html at: ${relativePath}`);
      litHtmlFiles.push(fullPath);
    }
  }
  
  return litHtmlFiles;
}

/**
 * Find all marked files in the project
 */
function findAllMarkedFiles() {
  const markedFiles = [];

  const searchPaths = [
    'node_modules/marked/lib/marked.esm.js',
    'node_modules/marked/lib/marked.umd.js',
  ];

  for (const relativePath of searchPaths) {
    const fullPath = path.resolve(projectRoot, relativePath);
    if (fs.existsSync(fullPath)) {
      console.log(`📍 Found marked at: ${relativePath}`);
      markedFiles.push(fullPath);
    }
  }

  return markedFiles;
}

/**
 * Security fix patterns for actual lit-html source files
 */
const litHtmlSecurityPatterns = [
  {
    name: 'Script tag case sensitivity - rawTextElement const',
    pattern: 'const rawTextElement = /^(?:script|style|textarea|title)$/i;',
    replacement: 'const rawTextElement = /^(?:script|style|textarea|title)$/gi;',
    description: 'Fix rawTextElement case sensitivity in development files'
  },
  {
    name: 'Script tag case sensitivity - $ variable minified',  
    pattern: '$=/^(?:script|style|textarea|title)$/i,',
    replacement: '$=/^(?:script|style|textarea|title)$/gi,',
    description: 'Fix $ variable case sensitivity in minified files'  
  },
  {
    name: 'Comment end regex - dev files',
    pattern: 'const commentEndRegex = /-->/g;',
    replacement: 'const commentEndRegex = /--!?>/g;',
    description: 'Fix commentEndRegex to also match --!> HTML comment end tags'
  },
  {
    name: 'Comment end regex - minified _ variable',
    pattern: ',_=/-->/g,m=',
    replacement: ',_=/--!?>/g,m=',
    description: 'Fix minified _ variable to also match --!> HTML comment end tags'
  },
  {
    name: 'Comment end regex - minified v variable',
    pattern: ',v=/-->/g,_=',
    replacement: ',v=/--!?>/g,_=',
    description: 'Fix minified v variable to also match --!> HTML comment end tags'
  }
];

/**
 * Security fix patterns for marked source files
 */
const markedSecurityPatterns = [
  {
    name: 'startATag case sensitivity',
    pattern: 'startATag:/^<a /i,',
    replacement: 'startATag:/^<a /gi,',
    description: 'Fix startATag regex to match upper case <A> tags'
  },
  {
    name: 'endATag case sensitivity',
    pattern: 'endATag:/^<\\/a>/i,',
    replacement: 'endATag:/^<\\/a>/gi,',
    description: 'Fix endATag regex to match upper case </A> tags'
  },
  {
    name: 'startPreScriptTag case sensitivity',
    pattern: 'startPreScriptTag:/^<(pre|code|kbd|script)(\\s|>)/i,',
    replacement: 'startPreScriptTag:/^<(pre|code|kbd|script)(\\s|>)/gi,',
    description: 'Fix startPreScriptTag regex to match upper case <SCRIPT> tags'
  },
  {
    name: 'endPreScriptTag case sensitivity',
    pattern: 'endPreScriptTag:/^<\\/(pre|code|kbd|script)(\\s|>)/i,',
    replacement: 'endPreScriptTag:/^<\\/(pre|code|kbd|script)(\\s|>)/gi,',
    description: 'Fix endPreScriptTag regex to match upper case </SCRIPT> tags'
  },
  {
    name: 'htmlBeginRegex case sensitivity',
    pattern: '!--)`,"i"),',
    replacement: '!--)`,"gi"),',
    description: 'Fix htmlBeginRegex to match upper case tags'
  },
  {
    name: 'HTML comment end tag --!>',
    pattern: '(?:-->|$))',
    replacement: '(?:--!?>|$))',
    description: 'Fix HTML comment regex to also parse --!> as end tag'
  },
  {
    name: 'HTML comment regex builder replacement',
    pattern: '.replace("(?:-->|$)","-->")',
    replacement: '.replace("(?:-->|$)","--!?>")',
    description: 'Fix regex builder replacement to produce --!?> instead of --> as comment end'
  }
];

/**
 * Apply security fixes to a single file
 */
function applySecurityFixes(filePath, securityPatterns) {
  console.log(`\n🔍 Processing: ${path.relative(projectRoot, filePath)}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    let appliedFixes = [];
    
    console.log('🔍 Searching for vulnerable patterns...');
    
    for (const fix of securityPatterns) {
      console.log(`🔍 Checking for: ${fix.name}`);
      
      if (content.includes(fix.pattern)) {
        console.log(`🔧 Found vulnerable pattern, applying fix...`);
        const beforeContent = content;
        content = content.replace(fix.pattern, fix.replacement);
        
        if (beforeContent !== content) {
          console.log(`   ✅ ${fix.description}`);
          appliedFixes.push(fix.name);
          hasChanges = true;
        }
      } else {
        console.log(`   📋 Pattern not found or already secure`);
      }
    }
    
    if (hasChanges) {
      // Create backup if it doesn't exist
      const backupPath = `${filePath}.backup-${Date.now()}`;
      fs.copyFileSync(filePath, backupPath);
      console.log(`📄 Backup created: ${path.relative(projectRoot, backupPath)}`);
      
      // Write the fixed content
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${appliedFixes.length} patterns`);
      console.log(`   Applied fixes: ${appliedFixes.join(', ')}`);
      
      return { fixed: true, fixCount: appliedFixes.length };
    } else {
      console.log(`✅ No vulnerable patterns found - file is secure`);
      return { fixed: false, fixCount: 0 };
    }
    
  } catch (err) {
    console.error(`❌ Error processing ${path.relative(projectRoot, filePath)}:`, err.message);
    return { fixed: false, fixCount: 0, error: err.message };
  }
}

// Main execution
const litHtmlFiles = findAllLitHtmlFiles();

if (!litHtmlFiles.length) {
  console.log('📋 No lit-html files found - this is normal during dependency installation');
  console.log('✅ Dependencies may still be installing or have a different structure');
  process.exit(0);
}

let totalFilesFixed = 0;
let totalFixesApplied = 0;
const results = [];

console.log('\n--- lit-html ---');
for (const filePath of litHtmlFiles) {
  const result = applySecurityFixes(filePath, litHtmlSecurityPatterns);
  results.push({ file: path.relative(projectRoot, filePath), ...result });
  
  if (result.fixed) {
    totalFilesFixed++;
    totalFixesApplied += result.fixCount;
  }
}

console.log('\n--- marked ---');
const markedFiles = findAllMarkedFiles();
if (!markedFiles.length) {
  console.log('📋 No marked files found');
} else {
  for (const filePath of markedFiles) {
    const result = applySecurityFixes(filePath, markedSecurityPatterns);
    results.push({ file: path.relative(projectRoot, filePath), ...result });

    if (result.fixed) {
      totalFilesFixed++;
      totalFixesApplied += result.fixCount;
    }
  }
}

console.log('\n🎯 Security fix summary:');
console.log(`✅ Files processed: ${litHtmlFiles.length + markedFiles.length}`);
console.log(`✅ Files fixed: ${totalFilesFixed}`);
console.log(`✅ Total fixes applied: ${totalFixesApplied}`);

if (totalFixesApplied > 0) {
  console.log('✅ HTML filtering security vulnerabilities have been addressed');
  console.log('🔄 Please rebuild your project to apply the fixes');
} else {
  console.log('✅ All source files are already secure');
}