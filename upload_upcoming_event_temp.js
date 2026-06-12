import fs from 'fs';
import path from 'path';
import ImageKit from 'imagekit';
import 'dotenv/config';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const localFolderPath = path.join('src', 'assets', 'upcoming-event');
const imageKitFolder = '/assets/upcoming-event';

async function uploadFile(filePath) {
  const fileData = fs.readFileSync(filePath);
  const fileName = path.basename(filePath);
  
  console.log(`Uploading ${fileName} to ImageKit folder ${imageKitFolder}...`);
  try {
    const response = await imagekit.upload({
      file: fileData,
      fileName: fileName,
      folder: imageKitFolder,
      useUniqueFileName: false
    });
    return response.url;
  } catch (error) {
    console.error(`Failed to upload ${fileName}:`, error);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(localFolderPath)) {
    console.error(`Local folder not found at ${localFolderPath}`);
    process.exit(1);
  }

  const files = fs.readdirSync(localFolderPath).filter(f => {
    const fullPath = path.join(localFolderPath, f);
    return !fs.statSync(fullPath).isDirectory() && !f.startsWith('.');
  });

  console.log(`Found ${files.length} images to upload in ${localFolderPath}`);
  const uploadedUrls = {};

  for (const file of files) {
    const filePath = path.join(localFolderPath, file);
    const url = await uploadFile(filePath);
    if (url) {
      console.log(`Uploaded: ${file} -> ${url}`);
      uploadedUrls[file] = url;
    }
  }

  console.log('\n--- UPLOADED URLS MAP ---');
  console.log(JSON.stringify(uploadedUrls, null, 2));
}

main().catch(console.error);
