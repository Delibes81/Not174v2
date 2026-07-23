const sharp = require('sharp');
const path = require('path');

async function processLogo() {
  const input = path.join(__dirname, 'public/logo.jpeg');
  
  const { width, height } = await sharp(input).metadata();
  
  const alpha = await sharp(input)
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

  // 3. Favicon
  await sharp(path.join(__dirname, 'public/logo-transparent.png'))
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(__dirname, 'public/favicon.png'));

  await sharp(path.join(__dirname, 'public/logo-transparent.png'))
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFormat('png')
    .toFile(path.join(__dirname, 'public/icon.png'));

  console.log("Logo processing completed successfully!");
}

processLogo().catch(console.error);
