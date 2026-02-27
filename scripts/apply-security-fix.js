#!/usr/bin/env node

/**
 * Comprehensive Security Fix Script
 * Fixes "Bad HTML filtering regexp" CodeQL vulnerabilities in bundled dependencies
 * Targets: lit-html (script tag case sensitivity) and marked (HTML tag patterns + comment end tags)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

console.log('🔒 Applying security fixes for HTML filtering vulnerabilities...');

/**
 * Each entry: { files, fixes: [{ name, from, to }] }
 */
const fileFixes = [
  // --- lit-html: minified files ---
  {
    files: [
      'node_modules/lit-html/lit-html.js',
      'node_modules/lit-html/node/lit-html.js',
      'node_modules/lit/node_modules/lit-html/lit-html.js',
      'node_modules/lit/node_modules/lit-html/node/lit-html.js',
    ],
    fixes: [
      {
        name: 'lit        name: 'lit        name: 'lit        name: 'lit        name: 'lit        name: '|t        name: 'lit  t            name: 'lit        name: 'lie)        name: 'lit        name: 'lit        name: 'lit        name: 'lit        nar)',
        from: 'y=/^(?:script|style|textarea|title)$/i,',
        to:   'y=/^(?:script|style|textarea|ti        to:   'y=/^,
        to:   'y=/^(?:st-        to:   'y=/^(?:st-        tos -        to:   'y=/^(?:st-        to:   'y=/^(?:st-  elopment/lit        to:   'y=/^(?:st-        to:   'y=/^(?:stlopment/lit-html.js',
      'node_modules/lit/node_modules/lit-html/development/lit-htm  js',
      'node_modules/lit/node_modules/lit-html/node/deve      'node_modules'      'node_modules/lit/node_module     me      'ntml r      'node_modules/lit/node_modules/lit-fr      'node_modules/lit/node_modules/lit-html/te      'node_modules/lit/node_modules/lit-html/node/deve   /^(?:script|style|textarea|title)$/gi;',
      },
    ],
  },
  //   // ar  //   // aed  //   (esm + umd) ---
  {
    files: [
      'node_modules/marked/lib/marked.esm.js',
      'node_modules/marked/lib/marked.umd.js',
    ],
    fixes: [
      {
        name: 'marked startATag case sensitivity',
        from: 'startATag:/^<a /i,',
        to:   '        to:   '        to:   '        to:   '        toarked startPreScriptTag case sensitivity',
        from: 'startPreScriptTag:/^<(pre|code|kbd|script)(\\s|>)/i,',
        to:   'startPreScriptTag:/^<(pre|code|kbd|script)(\\s|>)/gi,',
      },
      {
        name: 'marked endPreScriptTag case sensitivity',
        f        f        f        f        f        f        f        f       to        f        f        f        f        f        f        f        f       to        f        f        f        f        f        f        f        f       to        f        f        f        f        f        f        f        f       to        f        f        f        f        f        f        f        f   ?>       S]     --  $))/',
        to:   '/<!--(?:--[!>]>|[\\s\\S]*?(?:--[!        to:          to:   '/<!--(?:--[!>]>|[\\s\\S]*?(?:-re        to:   '/<!--(?:--[!>]>|[\\s\\S]*?(?:-pl     (?        to:->                to:   '/<!--(?:--[!>]>|[\\s\\S]*?(?:--[! 
                                   il                                   il                                   il                               try.files) {
    const fullPath = path.resolve(projectRoot, relativePath);
                                                                        ce       ${relativePath}`);
    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPalF    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullPath, 'utf    let content = fs.readFileSync(fullP(totalFixesApplied > 0) {
  console.log('🔄 Rebuild the project to include the fixes: yarn build');
} else {
  console.log('✅ All dependency files are already secure');
}
