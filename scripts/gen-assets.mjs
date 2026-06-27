/**
 * Generates rasterized brand assets that social scrapers / iOS need as PNG:
 *   public/og.png               (1200×630 Open Graph card)
 *   public/apple-touch-icon.png (180×180 home-screen icon)
 *
 * Uses `sharp` (present via Astro) to rasterize SVG. Run: npm run gen:assets
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const INK = '#0F0E0C';
const LINE = '#29241E';
const TEXT = '#F3EEE6';
const MUTED = '#9E9587';
const ORANGE = '#FF6A1A';

const SANS = "'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif";
const MONO = "'Consolas', 'Courier New', monospace";

function gridLines(w, h, step, color, opacity) {
  let out = '';
  for (let x = step; x < w; x += step)
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${color}" stroke-width="1" opacity="${opacity}"/>`;
  for (let y = step; y < h; y += step)
    out += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${color}" stroke-width="1" opacity="${opacity}"/>`;
  return out;
}

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <g>${gridLines(1200, 630, 60, LINE, 0.5)}</g>
  <rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="${LINE}" stroke-width="1"/>

  <!-- glow -->
  <defs>
    <radialGradient id="glow" cx="88%" cy="12%" r="55%">
      <stop offset="0" stop-color="${ORANGE}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- wordmark -->
  <rect x="80" y="74" width="20" height="20" rx="5" fill="${ORANGE}"/>
  <text x="112" y="90" font-family="${MONO}" font-size="22" fill="${TEXT}">cankecilioglu.dev</text>

  <!-- eyebrow -->
  <text x="80" y="232" font-family="${MONO}" font-size="21" letter-spacing="5" fill="${MUTED}">ROBOTICS · PERCEPTION · EMBEDDED</text>

  <!-- headline -->
  <text x="76" y="342" font-family="${SANS}" font-size="96" font-weight="800" letter-spacing="-3" fill="${TEXT}">Can Keçilioğlu</text>

  <!-- subline -->
  <text x="80" y="424" font-family="${SANS}" font-size="44" font-weight="700" fill="${TEXT}">Building <tspan fill="${ORANGE}">perception systems</tspan></text>

  <!-- accent rule -->
  <rect x="80" y="470" width="120" height="5" rx="2.5" fill="${ORANGE}"/>

  <!-- byline -->
  <text x="80" y="566" font-family="${SANS}" font-size="26" fill="${MUTED}">Robotics perception &amp; embedded engineer</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="${INK}"/>
  <rect x="120" y="120" width="272" height="272" rx="64" fill="${ORANGE}"/>
  <circle cx="256" cy="256" r="48" fill="${INK}"/>
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
