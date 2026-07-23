const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  const input = path.join(__dirname, 'public/logo.jpeg');
  
  // The original image is 650x789.
  // The circle and feather are in the top part, the "Notaria" cursive is at the bottom.
  // Let's crop it to 650x600 from the top.
  const croppedBuffer = await sharp(input)
    .extract({ left: 0, top: 0, width: 650, height: 600 })
    .toBuffer();
  
  const { width, height } = await sharp(croppedBuffer).metadata();
  
  const alpha = await sharp(croppedBuffer)
    .grayscale()
    .negate()
    .normalize() 
    .toBuffer();
  
  // 1. Transparent version (Primary color #4D2323)
  await sharp({
    create: { width, height, channels: 3, background: { r: 77, g: 35, b: 35 } }
  })
  .joinChannel(alpha)
  .png()
  .toFile(path.join(__dirname, 'public/logo-transparent.png'));

  // 2. Light version (Tertiary color #CCC3AB)
  await sharp({
    create: { width, height, channels: 3, background: { r: 204, g: 195, b: 171 } }
  })
  .joinChannel(alpha)
  .png()
  .toFile(path.join(__dirname, 'public/logo-light.png'));

  console.log("Logo cropped and processed successfully!");
}

processLogo().catch(console.error);
