import fs from 'fs';
import path from 'path';
import ImageKit from 'imagekit';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const filePath = 'C:\\Users\\Acer\\Desktop\\CODING\\kripa lib vs\\kripa\\src\\assets\\Student-achivement\\WhatsApp Image 2026-06-15 at 6.54.46 PM.jpeg';
const fileData = fs.readFileSync(filePath);
const fileName = path.basename(filePath);

async function upload() {
  try {
    const response = await imagekit.upload({
      file: fileData,
      fileName: fileName,
      folder: '/assets/Student-achivement',
      useUniqueFileName: true
    });
    console.log(`Successfully uploaded to ${response.url}`);
  } catch (error) {
    console.error(`Failed to upload:`, error);
  }
}

upload();
