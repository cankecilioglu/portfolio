/**
 * Generates rasterized brand assets that social scrapers / iOS need as PNG:
 *   public/og.png               (1200×630 Open Graph card)
 *   public/apple-touch-icon.png (180×180 home-screen icon)
 *
 * Uses `sharp` (already present via Astro) to rasterize SVG. Run:
 *   node scripts/gen-assets.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const INK = '#10141A';
const LINE = '#262E3A';
const TEXT = '#E8EDF4';
const MUTED = '#93A0B4';
const DATA = '#46D5C7';
const SIGNAL = '#FF8A3D';

const heatDefs = `
  <linearGradient id="heat" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2C3E73"/>
    <stop offset="0.45" stop-color="${DATA}"/>
    <stop offset="1" stop-color="${SIGNAL}"/>
  </linearGradient>`;

// Vertical instrument grid lines for subtle texture.
function gridLines(w, h, step, color, opacity) {
  let out = '';
  for (let x = step; x < w; x += step) {
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${color}" stroke-width="1" opacity="${opacity}"/>`;
  }
  for (let y = step; y < h; y += step) {
    out += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${color}" stroke-width="1" opacity="${opacity}"/>`;
  }
  return out;
}

const SANS = "'Segoe UI', 'Arial', sans-serif";
const MONO = "'Consolas', 'Courier New', monospace";

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>${heatDefs}</defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <g>${gridLines(1200, 630, 60, LINE, 0.35)}</g>
  <rect x="0" y="0" width="1200" height="630" fill="none" stroke="${LINE}" stroke-width="2"/>

  <!-- wordmark -->
  <rect x="80" y="74" width="20" height="20" rx="5" fill="url(#heat)"/>
  <text x="112" y="90" font-family="${MONO}" font-size="22" fill="${TEXT}">cankecilioglu.dev</text>

  <!-- eyebrow -->
  <text x="80" y="210" font-family="${MONO}" font-size="22" letter-spacing="4" fill="${MUTED}">// ROBOTICS · PERCEPTION · EMBEDDED</text>

  <!-- headline -->
  <text x="78" y="300" font-family="${SANS}" font-size="86" font-weight="800" fill="${TEXT}">From raw sensor</text>
  <text x="78" y="392" font-family="${SANS}" font-size="86" font-weight="800" fill="${TEXT}">to world model.</text>

  <!-- signal path rule + stages -->
  <rect x="80" y="486" width="700" height="6" rx="3" fill="url(#heat)"/>
  <text x="80" y="540" font-family="${MONO}" font-size="22" letter-spacing="2" fill="${DATA}">01 SENSOR</text>
  <text x="372" y="540" font-family="${MONO}" font-size="22" letter-spacing="2" fill="${MUTED}">02 STATE</text>
  <text x="640" y="540" font-family="${MONO}" font-size="22" letter-spacing="2" fill="${SIGNAL}">03 MEANING</text>

  <!-- byline -->
  <text x="80" y="588" font-family="${SANS}" font-size="24" fill="${MUTED}">Can Keçilioğlu — Robotics perception &amp; embedded engineer</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>${heatDefs}</defs>
  <rect width="512" height="512" rx="112" fill="${INK}"/>
  <rect x="80" y="232" width="352" height="48" rx="24" fill="url(#heat)"/>
  <circle cx="120" cy="256" r="38" fill="${DATA}"/>
  <circle cx="256" cy="256" r="34" fill="${INK}" stroke="${MUTED}" stroke-width="22"/>
  <circle cx="392" cy="256" r="46" fill="${SIGNAL}"/>
</svg>`;

async function run() {
  await sharp(Buffer.from(og)).png().toFile(join(publicDir, 'og.png'));
  console.log('✓ public/og.png (1200×630)');

  await sharp(Buffer.from(icon)).resize(180, 180).png().toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ public/apple-touch-icon.png (180×180)');
}

run().catch((err) => {
  console.error('asset generation failed:', err);
  process.exit(1);
});
