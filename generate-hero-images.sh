#!/bin/bash
# Generates hero images at three breakpoints using Chrome headless
# Run from: ~/Projects/website
# Requires: Google Chrome, cwebp

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="http://localhost:8765/hero-capture.html"
OUT="images"

echo "Generating hero images..."

# Desktop: 1440×900
"$CHROME" --headless=new --disable-gpu --no-sandbox \
  --window-size=1440,900 \
  --screenshot="/tmp/hero-desktop.png" \
  "$URL" 2>/dev/null
cwebp -q 92 /tmp/hero-desktop.png -o "$OUT/hero-desktop.webp" 2>/dev/null
echo "✓ hero-desktop.webp (1440×900)"

# Tablet: 768×1024
"$CHROME" --headless=new --disable-gpu --no-sandbox \
  --window-size=768,1024 \
  --screenshot="/tmp/hero-tablet.png" \
  "$URL" 2>/dev/null
cwebp -q 92 /tmp/hero-tablet.png -o "$OUT/hero-tablet.webp" 2>/dev/null
echo "✓ hero-tablet.webp (768×1024)"

# Mobile: 390×844
"$CHROME" --headless=new --disable-gpu --no-sandbox \
  --window-size=390,844 \
  --screenshot="/tmp/hero-mobile.png" \
  "$URL" 2>/dev/null
cwebp -q 92 /tmp/hero-mobile.png -o "$OUT/hero-mobile.webp" 2>/dev/null
echo "✓ hero-mobile.webp (390×844)"

echo "Done. Check images/ directory."
ls -lh "$OUT"/hero-*.webp 2>/dev/null
