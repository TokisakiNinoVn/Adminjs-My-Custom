#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const templatePath = path.join(__dirname, '../templates/javascript');
// const templatePath = path.join(__dirname, '../templates/javascript-mvc');
const currentPath = process.cwd();

const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
  console.error('⚠️  Please provide a project name.');
  process.exit(1);
}

const targetPath = path.join(currentPath, projectName);

// Copy template files
fs.mkdirSync(targetPath, { recursive: true });
fs.cpSync(templatePath, targetPath, { recursive: true });

console.log(`✅ Project ${projectName} has been created at ${targetPath}`);

// Install dependencies
console.log('📦 Installing dependencies...');
// execSync('npm install', { cwd: targetPath, stdio: 'inherit' });

console.log('🌠 All set! Run the following commands:');
console.log(`\t[1] - 🚀 Use \'cd ${projectName}\' to navigate to the project.`);
console.log(`\t[2] - 🚀 Use \'npm install\' to install dependencies in the project.`);
console.log('\t[3] - 🚀 Use \'npm start\' or \'npm run go\ run the project.');
