import fs from 'fs/promises';
import path from 'path';

const ASSETS_DIR = path.resolve(process.cwd(), 'src', 'assets');

async function generate() {
  const files = await fs.readdir(ASSETS_DIR);
  const manifest = {};

  // Group files by base name (before -w/extension)
  for (const file of files) {
    const match = file.match(/^(.*?)(?:-w(\d+))?\.(webp|avif|jpe?g|png)$/i);
    if (!match) continue;
    const base = match[1];
    const width = match[2] ? Number(match[2]) : null;
    const ext = match[3].toLowerCase();

    if (!manifest[base]) {
      manifest[base] = { originals: [], webp: [], avif: [], resized: {} };
    }

    const p = file;
    if (ext === 'webp') manifest[base].webp.push(p);
    else if (ext === 'avif') manifest[base].avif.push(p);
    else manifest[base].originals.push(p);

    if (width) {
      manifest[base].resized[width] = manifest[base].resized[width] || [];
      manifest[base].resized[width].push(p);
    }
  }

  await fs.writeFile(path.join(ASSETS_DIR, 'optimized-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Wrote optimized-manifest.json with', Object.keys(manifest).length, 'entries');
}

generate().catch((e) => {
  console.error(e);
  process.exit(1);
});
