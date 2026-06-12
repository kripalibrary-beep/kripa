import fs from 'fs';
import path from 'path';
import ImageKit from 'imagekit';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const assetsDir = path.join(__dirname, 'src', 'assets');

async function uploadFile(filePath, relativePath) {
  const fileData = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  // Folder structure in ImageKit: e.g., /assets/About
  const dirName = path.dirname(relativePath).replace(/\\/g, '/');
  const folder = dirName === '.' ? '/assets' : `/assets/${dirName}`;

  try {
    const response = await imagekit.upload({
      file: fileData,
      fileName: fileName,
      folder: folder,
      useUniqueFileName: false // We want to keep exact names to match our codebase updates
    });
    console.log(`Successfully uploaded: ${relativePath} to ${response.url}`);
  } catch (error) {
    console.error(`Failed to upload ${relativePath}:`, error);
  }
}

async function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await traverseDirectory(fullPath);
    } else {
      // Calculate relative path from src/assets
      const relativePath = path.relative(assetsDir, fullPath);
      await uploadFile(fullPath, relativePath);
    }
  }
}

async function main() {
  console.log('Starting image upload to ImageKit...');
  await traverseDirectory(assetsDir);
  console.log('Upload process completed.');
}

main();
