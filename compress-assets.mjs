// Run with: node compress-assets.mjs
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, 'src', 'assets');

const targets = [
  // [inputPath, outputPath, options]
  // -- key images --
  ['images/ContactPostcards.png',           'images/ContactPostcards.webp',          { width: 1200, quality: 80 }],
  ['images/aboutme.png',                    'images/aboutme.webp',                   { width: 900,  quality: 82 }],
  ['images/headshot.JPEG',                  'images/headshot.webp',                  { width: 600,  quality: 85 }],

  // -- project slides --
  ['project_slides/HairIQ.png',             'project_slides/HairIQ.webp',            { width: 1200, quality: 80 }],
  ['project_slides/HairIQ_Cover.jpg',       'project_slides/HairIQ_Cover.webp',      { width: 800,  quality: 80 }],
  ['project_slides/J&JPoster.png',          'project_slides/J&JPoster.webp',         { width: 1200, quality: 80 }],
  ['project_slides/workwayves.png',         'project_slides/workwayves.webp',        { width: 1200, quality: 80 }],
  ['project_slides/workwayvesCover.png',    'project_slides/workwayvesCover.webp',   { width: 800,  quality: 80 }],
  ['project_slides/VIP.png',               'project_slides/VIP.webp',               { width: 1200, quality: 80 }],
  ['project_slides/vipCover.png',          'project_slides/vipCover.webp',          { width: 800,  quality: 80 }],
  ['project_slides/datamineCover.png',     'project_slides/datamineCover.webp',     { width: 800,  quality: 80 }],

  // -- gallery --
  ...await (async () => {
    const galleryDir = path.join(SRC, 'gallery');
    const files = await readdir(galleryDir);
    return files
      .filter(f => /\.(jpe?g|png)$/i.test(f))
      .map(f => [
        `gallery/${f}`,
        `gallery/${f.replace(/\.(jpe?g|png)$/i, '.webp')}`,
        { width: 800, quality: 75 }
      ]);
  })(),

  // -- experience gallery --
  ...await (async () => {
    const expDir = path.join(SRC, 'experience_gallery');
    const result = [];
    const folders = await readdir(expDir);
    for (const folder of folders) {
      const folderPath = path.join(expDir, folder);
      const s = await stat(folderPath);
      if (!s.isDirectory()) continue;
      const files = await readdir(folderPath);
      for (const f of files) {
        if (/\.(jpe?g|png)$/i.test(f)) {
          result.push([
            `experience_gallery/${folder}/${f}`,
            `experience_gallery/${folder}/${f.replace(/\.(jpe?g|png)$/i, '.webp')}`,
            { width: 900, quality: 78 }
          ]);
        }
      }
    }
    return result;
  })(),
];

let saved = 0;
let count = 0;

for (const [relIn, relOut, { width, quality }] of targets) {
  const inPath  = path.join(SRC, relIn);
  const outPath = path.join(SRC, relOut);

  if (!existsSync(inPath)) {
    console.warn(`  SKIP (not found): ${relIn}`);
    continue;
  }

  const outDir = path.dirname(outPath);
  await mkdir(outDir, { recursive: true });

  const before = (await stat(inPath)).size;

  await sharp(inPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outPath);

  const after = (await stat(outPath)).size;
  const pct = (((before - after) / before) * 100).toFixed(1);
  console.log(`  ✓ ${relOut.padEnd(52)} ${(before/1024).toFixed(0).padStart(6)}KB → ${(after/1024).toFixed(0).padStart(5)}KB  (${pct}% smaller)`);
  saved += before - after;
  count++;
}

console.log(`\nDone! Compressed ${count} images, saved ${(saved / 1024 / 1024).toFixed(1)} MB total.`);
console.log(`\nNext step: update your imports to use the .webp versions.`);
