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

const milestonesDir = path.join(__dirname, 'src', 'assets', 'milistones');
const mapping = {};

async function uploadFile(filePath, imageKitFolder) {
  const fileData = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  
  try {
    const response = await imagekit.upload({
      file: fileData,
      fileName: fileName,
      folder: imageKitFolder,
      useUniqueFileName: false
    });
    return response.url;
  } catch (error) {
    console.error(`Failed to upload ${filePath}:`, error);
    return null;
  }
}

async function processDirectory() {
  const folders = fs.readdirSync(milestonesDir);

  for (const folder of folders) {
    const folderPath = path.join(milestonesDir, folder);
    const stat = fs.statSync(folderPath);

    if (stat.isDirectory()) {
      const files = fs.readdirSync(folderPath).filter(f => !fs.statSync(path.join(folderPath, f)).isDirectory());
      if (files.length === 0) continue;

      const imageKitFolder = `/assets/milistones/${folder.replace(/ /g, '_')}`;
      mapping[folder] = [];

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        console.log(`Uploading ${filePath} to ${imageKitFolder}...`);
        const url = await uploadFile(filePath, imageKitFolder);
        if (url) {
          mapping[folder].push(url);
        }
      }
    }
  }

  fs.writeFileSync('milestones_mapping.json', JSON.stringify(mapping, null, 2));
  console.log('Upload complete. Mapping saved to milestones_mapping.json');
}

processDirectory().catch(console.error);
