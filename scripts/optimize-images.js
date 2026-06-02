import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = path.resolve(process.cwd(), 'src', 'assets');
const WIDTHS = [320, 640, 1024, 1600];

async function optimize() {
  const files = await fs.readdir(ASSETS_DIR);
  const manifest = {};

  for (const file of files) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const name = path.parse(file).name;
    const ext = path.parse(file).ext;
    const fullPath = path.join(ASSETS_DIR, file);

    manifest[file] = { webp: [], avif: [], originals: file };

    // Create full-size webp/avif
    try {
      const img = sharp(fullPath);
      await img.toFile(path.join(ASSETS_DIR, `${name}.webp`));
      await img.toFile(path.join(ASSETS_DIR, `${name}.avif`));
      manifest[file].webp.push(`${name}.webp`);
      manifest[file].avif.push(`${name}.avif`);
    } catch (err) {
      console.error('Error converting full size for', file, err);
    }

    // Create resized versions for srcset
    for (const w of WIDTHS) {
      try {
        const outWebp = `${name}-w${w}.webp`;
        const outAvif = `${name}-w${w}.avif`;
        await sharp(fullPath).resize({ width: w, withoutEnlargement: true }).toFile(path.join(ASSETS_DIR, outWebp));
        await sharp(fullPath).resize({ width: w, withoutEnlargement: true }).toFile(path.join(ASSETS_DIR, outAvif));
        manifest[file].webp.push(outWebp);
        manifest[file].avif.push(outAvif);
      } catch (err) {
        console.error('Error creating resized', file, 'width', w, err);
      }
    }
  }

  await fs.writeFile(path.join(ASSETS_DIR, 'optimized-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Image optimization finished. Manifest written to src/assets/optimized-manifest.json');
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
