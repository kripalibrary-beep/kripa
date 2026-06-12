import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Replace imports
  // Matches: import varName from '../../assets/path/to/img.png';
  const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+['"]([^'"]*?\/assets\/([^'"]+))['"];/g;
  content = content.replace(importRegex, (match, varName, relativePath, assetPath) => {
    changed = true;
    return `const ${varName} = "https://ik.imagekit.io/manish07/assets/${assetPath}";`;
  });

  // 2. Replace literal strings starting with /src/assets/
  // Matches: "/src/assets/Blog/motivation1.png"
  const literalRegex = /['"]\/src\/assets\/([^'"]+)['"]/g;
  content = content.replace(literalRegex, (match, assetPath) => {
    changed = true;
    return `"https://ik.imagekit.io/manish07/assets/${assetPath}"`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Refactored: ${filePath}`);
  }
}

function traverseAndRefactor(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndRefactor(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      refactorFile(fullPath);
    }
  }
}

console.log('Starting refactoring...');
traverseAndRefactor(srcDir);
console.log('Refactoring complete.');
