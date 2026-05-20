#!/usr/bin/env python3
"""
Photo processing for Web Design Mindset.
Place your portrait at img/founder-original.jpg, then run:
    python scripts/process-photo.py
"""

import subprocess
import sys
import os
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
IMG_DIR  = BASE_DIR / "img"
SOURCE   = IMG_DIR / "founder-original.jpg"
CUTOUT   = IMG_DIR / "founder-cutout.png"
DUOTONE  = IMG_DIR / "founder-duotone.png"
DUOTONE2 = IMG_DIR / "founder-duotone@2x.png"

SHADOW_COLOR    = (10, 10, 10)       # #0A0A0A
HIGHLIGHT_COLOR = (201, 243, 29)     # #C9F31D
MAX_LONG_EDGE   = 1200


def pip_install(package: str) -> None:
    try:
        __import__(package.split("[")[0].replace("-", "_"))
    except ImportError:
        print(f"  Installing {package}…")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package, "-q"])


def apply_duotone(rgba_image):
    from PIL import Image, ImageOps
    r, g, b, a = rgba_image.split()
    gray = ImageOps.grayscale(rgba_image.convert("RGB"))

    lut_r, lut_g, lut_b = [], [], []
    for i in range(256):
        t = i / 255.0
        lut_r.append(int(SHADOW_COLOR[0] + t * (HIGHLIGHT_COLOR[0] - SHADOW_COLOR[0])))
        lut_g.append(int(SHADOW_COLOR[1] + t * (HIGHLIGHT_COLOR[1] - SHADOW_COLOR[1])))
        lut_b.append(int(SHADOW_COLOR[2] + t * (HIGHLIGHT_COLOR[2] - SHADOW_COLOR[2])))

    from PIL import Image
    duo = Image.merge("RGB", (
        gray.point(lut_r),
        gray.point(lut_g),
        gray.point(lut_b),
    )).convert("RGBA")
    duo.putalpha(a)
    return duo


def resize_web(image, max_edge=MAX_LONG_EDGE):
    from PIL import Image
    w, h = image.size
    if max(w, h) <= max_edge:
        return image
    ratio = max_edge / max(w, h)
    return image.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)


def remove_bg_pillow_fallback(image):
    """Flood-fill from all four edges to erase near-uniform backgrounds."""
    from PIL import Image
    from collections import deque

    rgba  = image.convert("RGBA")
    data  = rgba.load()
    W, H  = rgba.size

    corners = [data[0, 0][:3], data[W-1, 0][:3], data[0, H-1][:3], data[W-1, H-1][:3]]
    bg = tuple(int(sum(c[i] for c in corners) / 4) for i in range(3))
    tol = 45

    visited = set()
    q = deque()
    for x in range(W):
        q.append((x, 0)); q.append((x, H - 1))
    for y in range(H):
        q.append((0, y)); q.append((W - 1, y))

    while q:
        x, y = q.popleft()
        if (x, y) in visited or not (0 <= x < W and 0 <= y < H):
            continue
        r, g, b, a = data[x, y]
        if all(abs(int(c) - int(bg[i])) <= tol for i, c in enumerate((r, g, b))):
            data[x, y] = (r, g, b, 0)
            visited.add((x, y))
            q.extend([(x+1, y), (x-1, y), (x, y+1), (x, y-1)])

    return rgba


def main():
    print("\n── Web Design Mindset · Photo Processor ──\n")

    if not SOURCE.exists():
        print(f"ERROR: {SOURCE} not found.\n")
        print("Drop your portrait at  img/founder-original.jpg  then re-run this script.")
        sys.exit(1)

    print("Installing / verifying dependencies…")
    pip_install("Pillow")
    pip_install("onnxruntime")
    pip_install("rembg")

    from PIL import Image
    import io

    print(f"\nLoading  {SOURCE.name}…")
    original = Image.open(SOURCE)

    try:
        from rembg import remove
        print("Removing background with rembg…")
        with open(SOURCE, "rb") as f:
            raw = f.read()
        cutout = Image.open(io.BytesIO(remove(raw))).convert("RGBA")
        print("  ✓ rembg succeeded")
    except Exception as exc:
        print(f"  rembg failed ({exc}) — using Pillow flood-fill fallback…")
        cutout = remove_bg_pillow_fallback(original)
        print("  ✓ Fallback complete")

    cutout.save(CUTOUT, "PNG")
    print(f"  ✓ Saved  {CUTOUT.name}")

    print("\nApplying duotone (#0A0A0A → #C9F31D)…")
    duotone = apply_duotone(cutout)

    duotone.save(DUOTONE, "PNG")
    print(f"  ✓ Saved  {DUOTONE.name}")

    optimised = resize_web(duotone)
    optimised.save(DUOTONE2, "PNG", optimize=True)
    print(f"  ✓ Saved  {DUOTONE2.name}  ({optimised.width}×{optimised.height})")

    print("\n── Done! Update img src in HTML from placehold.co to img/founder-duotone.png ──\n")


if __name__ == "__main__":
    main()
