#!/usr/bin/env node

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const blogImagesDir = path.join(__dirname, "../public/img/blog");

// Ensure directory exists
if (!fs.existsSync(blogImagesDir)) {
  console.error(`Directory does not exist: ${blogImagesDir}`);
  process.exit(1);
}

// Get all PNG files
const files = fs
  .readdirSync(blogImagesDir)
  .filter((file) => file.endsWith(".png"));

console.log(`Found ${files.length} PNG files to optimize...`);

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath);
  try {
    // Resize to 1200x630 (standard OG image size) and compress
    await sharp(filePath)
      .resize(1200, 630, {
        fit: "cover",
        position: "center",
      })
      .png({ quality: 80, progressive: true })
      .toFile(`${filePath}.optimized`);

    // Get file sizes
    const originalSize = fs.statSync(filePath).size;
    const optimizedSize = fs.statSync(`${filePath}.optimized`).size;
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(2);

    // Replace original with optimized
    fs.renameSync(`${filePath}.optimized`, filePath);

    console.log(
      `✓ ${fileName}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`,
    );
  } catch (error) {
    console.error(`✗ Error optimizing ${fileName}:`, error.message);
  }
}

async function main() {
  for (const file of files) {
    const filePath = path.join(blogImagesDir, file);
    await optimizeImage(filePath);
  }
  console.log("\nImage optimization complete!");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
