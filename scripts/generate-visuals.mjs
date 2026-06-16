#!/usr/bin/env node
/**
 * Generates a small, curated set of on-brand visuals via fal.ai (GPT Image 2)
 * and writes them to public/images/generated/.
 *
 * Run once: `npm run gen:visuals`
 * Requires FAL_API_KEY in .env.local (or the environment).
 *
 * Brand: terminal ">_" motif, electric blue (#0084ff -> #00a6ff) on
 * near-black (#050505). Abstract, premium, no people, no slop.
 */

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'public/images/generated');
const FAL_ENDPOINT = 'https://fal.run/openai/gpt-image-2';

async function loadApiKey() {
  if (process.env.FAL_API_KEY) return process.env.FAL_API_KEY;
  const envPath = resolve(ROOT, '.env.local');
  if (existsSync(envPath)) {
    const raw = await readFile(envPath, 'utf8');
    const match = raw.match(/^FAL_API_KEY\s*=\s*(.+)\s*$/m);
    if (match) return match[1].trim();
  }
  throw new Error('FAL_API_KEY not found in environment or .env.local');
}

const BRAND =
  'Deep near-black canvas (#050505). Electric blue (#0084ff) fading to cyan (#00a6ff). ' +
  'Minimal, premium, cinematic, editorial, generous negative space, soft volumetric glow, subtle film grain. ' +
  'Abstract. No people, no faces, no logos, no watermark.';

const VISUALS = [
  {
    file: 'hero-aurora.jpg',
    output_format: 'jpeg',
    image_size: { width: 1920, height: 1080 },
    prompt:
      `Ultra-minimal abstract technology background for a software studio hero section. ${BRAND} ` +
      'A single soft glow of electric blue light blooms from the upper center, ' +
      'overlaid with very faint thin-line network mesh and subtle topographic contour lines, extremely low contrast. ' +
      'No text. 16:9.',
  },
  {
    file: 'cyber-shield.png',
    output_format: 'png',
    image_size: { width: 1024, height: 1024 },
    prompt:
      `Abstract cybersecurity emblem in precise thin vector line-art. ${BRAND} ` +
      'A shield silhouette formed from interconnected network nodes and circuit traces, glowing electric blue to cyan, ' +
      'centered composition, geometric, lots of negative space. No text.',
  },
  {
    file: 'cta-banner.jpg',
    output_format: 'jpeg',
    image_size: { width: 1920, height: 768 },
    prompt:
      `Wide minimal abstract banner for a call-to-action section. ${BRAND} ` +
      'A smooth horizontal gradient mesh of blue and cyan light blooms concentrated on the right side, ' +
      'faint flowing data streams, generous empty negative space on the left for text overlay. No text. Aspect 2.5:1.',
  },
  {
    file: 'og-cover.png',
    output_format: 'png',
    image_size: { width: 1216, height: 640 },
    prompt:
      'Sleek dark social-share cover for a developer brand. ' +
      `${BRAND} ` +
      "Centered crisp modern typographic lockup: a terminal command-prompt glyph '>_' immediately followed by the word " +
      "'InitDev' in clean white geometric sans-serif. Below it a thin small tagline in muted gray reading " +
      "'Custom software, AI & secure infrastructure'. Faint blueprint grid lines. High contrast, premium. No people.",
  },
  {
    file: 'aurora-soft.jpg',
    output_format: 'jpeg',
    image_size: { width: 1920, height: 1080 },
    prompt:
      `Extremely subtle abstract ambient backdrop for a dark section behind text and cards. ${BRAND} ` +
      'A faint horizontal band of deep blue glow drifting low across the frame, with a barely-visible field of tiny ' +
      'particles and thin diagonal light streaks, very low contrast, mostly empty near-black space so overlaid text stays readable. ' +
      'No text. 16:9.',
  },
  {
    file: 'node-orbit.png',
    output_format: 'png',
    image_size: { width: 1024, height: 1024 },
    prompt:
      `Abstract radial constellation in precise thin vector line-art on a near-black canvas. ${BRAND} ` +
      'Concentric orbital rings connecting glowing electric-blue to cyan network nodes around a single bright core, ' +
      'delicate circuit traces, symmetrical centered composition, generous negative space. Premium, geometric. No text.',
  },
  {
    file: 'topo-band.jpg',
    output_format: 'jpeg',
    image_size: { width: 1920, height: 600 },
    prompt:
      `Wide minimal abstract divider band. ${BRAND} ` +
      'Flowing topographic contour lines in faint electric blue rippling left to right across a near-black field, ' +
      'a soft cyan glow blooming subtly off-center, generous empty space. No text. Aspect 3.2:1.',
  },
];

async function generateOne(apiKey, spec) {
  const res = await fetch(FAL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Key ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: spec.prompt,
      image_size: spec.image_size,
      quality: 'high',
      num_images: 1,
      output_format: spec.output_format,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`fal request failed (${res.status}): ${text.slice(0, 500)}`);
  }

  const data = await res.json();
  const url = data?.images?.[0]?.url;
  if (!url) throw new Error(`No image URL in response: ${JSON.stringify(data).slice(0, 300)}`);

  const imgRes = await fetch(url);
  if (!imgRes.ok) throw new Error(`Failed to download image (${imgRes.status})`);
  const buf = Buffer.from(await imgRes.arrayBuffer());
  const dest = resolve(OUT_DIR, spec.file);
  await writeFile(dest, buf);
  return { file: spec.file, bytes: buf.length };
}

async function main() {
  const only = process.argv.slice(2);
  const apiKey = await loadApiKey();
  await mkdir(OUT_DIR, { recursive: true });

  const queue = only.length
    ? VISUALS.filter((v) => only.some((o) => v.file.includes(o)))
    : VISUALS;

  console.log(`Generating ${queue.length} visual(s) -> ${OUT_DIR}\n`);

  for (const spec of queue) {
    process.stdout.write(`• ${spec.file} ... `);
    try {
      const { bytes } = await generateOne(apiKey, spec);
      console.log(`done (${(bytes / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
    }
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
