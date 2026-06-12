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

const oldDir = path.join(__dirname, 'src', 'assets', 'milistones', 'Independence Day Celebration 2024');
const newDir = path.join(__dirname, 'src', 'assets', 'milistones', 'Independence Day Celebration 2026');

async function uploadFile(filePath, fileName) {
  const fileData = fs.readFileSync(filePath);
  const response = await imagekit.upload({
    file: fileData,
    fileName: fileName,
    folder: '/assets/milistones/Independence_Day_Celebration_2026',
    useUniqueFileName: false
  });
  return response.url;
}

async function main() {
  try {
    // 1. Rename directory locally if old one exists
    if (fs.existsSync(oldDir)) {
      console.log(`Renaming local directory to: ${newDir}`);
      fs.renameSync(oldDir, newDir);
    } else {
      console.log('Local directory already renamed or not found.');
    }

    // 2. Upload files from the renamed directory
    if (fs.existsSync(newDir)) {
      const files = fs.readdirSync(newDir);
      console.log('Uploading files to ImageKit folder /assets/milistones/Independence_Day_Celebration_2026...');
      for (const file of files) {
        // Skip hidden files or files that shouldn't be uploaded
        if (file.startsWith('.')) continue;
        const filePath = path.join(newDir, file);
        const url = await uploadFile(filePath, file);
        console.log(`Uploaded: ${file} -> ${url}`);
      }
    } else {
      console.error('New directory does not exist!');
    }
  } catch (error) {
    console.error('Error during rename and upload:', error);
  }
}

main();
