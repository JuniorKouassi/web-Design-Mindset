#!/usr/bin/env node
/**
 * Photo processor — duotone via contrast S-curve.
 * No background removal needed: mix-blend-mode:screen in CSS
 * makes pure-black pixels transparent on the dark site background.
 *
 * Usage:  node scripts/process-photo.js
 */

const path = require('path');
const fs   = require('fs');

const BASE     = path.resolve(__dirname, '..');
const IMG      = path.join(BASE, 'img');
const SOURCE   = path.join(IMG, 'founder-original.jpg');
const DUOTONE  = path.join(IMG, 'founder-duotone.png');
const DUOTONE2 = path.join(IMG, 'founder-duotone@2x.png');
const MAX_EDGE = 1200;

/* Duotone palette — pure black shadows so screen blend erases them */
const SHADOW    = { r: 0,   g: 0,   b: 0   };  // #000000
const HIGHLIGHT = { r: 201, g: 243, b: 29  };  // #C9F31D

module.paths.unshift(path.join(BASE, 'node_modules'));

/* S-curve contrast: darkens shadows, boosts highlights */
function sCurve(t, strength = 2.2) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  if (t < 0.5) return 0.5 * Math.pow(2 * t, strength);
  return 1 - 0.5 * Math.pow(2 * (1 - t), strength);
}

async function main() {
  console.log('\n── Web Design Mindset · Photo Processor ──\n');

  if (!fs.existsSync(SOURCE)) {
    console.error('ERROR: img/founder-original.jpg not found.');
    process.exit(1);
  }

  const { Jimp } = require('jimp');

  console.log('Loading  founder-original.jpg…');
  const srcBuf = fs.readFileSync(SOURCE);
  const img    = await Jimp.fromBuffer(srcBuf);
  const { width, height } = img.bitmap;
  console.log(`  ${width}×${height}px`);

  console.log('\nApplying contrast-enhanced duotone…');

  const data = img.bitmap.data;

  for (let i = 0; i < width * height; i++) {
    const base = i * 4;
    const r = data[base];
    const g = data[base + 1];
    const b = data[base + 2];

    /* Luminance-weighted grayscale */
    const gray = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    /* S-curve contrast: crush dark values to black, pull highlights up */
    const t = sCurve(gray, 2.2);

    /* Map to duotone gradient */
    data[base]     = Math.round(SHADOW.r + t * (HIGHLIGHT.r - SHADOW.r));
    data[base + 1] = Math.round(SHADOW.g + t * (HIGHLIGHT.g - SHADOW.g));
    data[base + 2] = Math.round(SHADOW.b + t * (HIGHLIGHT.b - SHADOW.b));
    data[base + 3] = 255; /* fully opaque — CSS blend mode handles transparency */
  }

  /* Save full-size duotone */
  const duoBuf = await img.getBuffer('image/png');
  fs.writeFileSync(DUOTONE, duoBuf);
  console.log('  ✓ Saved  founder-duotone.png');

  /* Web-optimised copy ≤ 1200px */
  const longest = Math.max(width, height);
  const ratio   = longest > MAX_EDGE ? MAX_EDGE / longest : 1;
  const ow = Math.round(width  * ratio);
  const oh = Math.round(height * ratio);

  const img2 = await Jimp.fromBuffer(duoBuf);
  img2.resize({ w: ow, h: oh });
  const optBuf = await img2.getBuffer('image/png');
  fs.writeFileSync(DUOTONE2, optBuf);
  console.log(`  ✓ Saved  founder-duotone@2x.png  (${ow}×${oh})`);

  console.log('\n── Done! ──');
  console.log('CSS mix-blend-mode:screen will make the black areas transparent');
  console.log('on the dark site background — no background removal needed.\n');
}

main().catch(err => { console.error(err); process.exit(1); });
