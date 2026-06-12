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

const filesToUpload = [
  { file: 'Screenshot 2026-06-11 162659.png', rename: 'motivation1_new.png' }, // Growth Mindset -> Why Today Matters
  { file: 'Screenshot 2026-06-11 164502.png', rename: 'motivation2_new.png' }, // One more quiet hour
  { file: 'Screenshot 2026-06-11 164511.png', rename: 'motivation3_new.png' }, // Consistency
  { file: 'Screenshot 2026-06-11 164520.png', rename: 'motivation4_new.png' }, // Winners don't quit
  { file: 'Screenshot 2026-06-11 164553.png', rename: 'motivation5_new.png' }  // Small steps
];

async function uploadMotivationImages() {
  for (const item of filesToUpload) {
    const filePath = path.join(__dirname, 'src', 'assets', 'Blog', item.file);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }
    
    try {
      const response = await imagekit.upload({
        file: fs.readFileSync(filePath),
        fileName: item.rename,
        folder: '/assets/Blog',
        useUniqueFileName: false
      });
      console.log(`Successfully uploaded: ${item.file} as ${item.rename} to ${response.url}`);
    } catch (error) {
      console.error(`Failed to upload ${item.file}:`, error);
    }
  }
}

uploadMotivationImages();
