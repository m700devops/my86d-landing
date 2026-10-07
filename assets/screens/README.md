# Phase 2 assets

Drop the files below into this folder, then uncomment the matching block in
`index.html`. Search the file for `PHASE 2` to find every slot.

Nothing in here is referenced by the live page until you uncomment it, so the
page never shows an empty box or a "coming soon" placeholder.

| File | Where it goes | Notes |
| --- | --- | --- |
| `hero.mp4` + `hero.webm` + `hero-poster.webp` | Hero, replaces the logo card | 8–12s scan recording in an iPhone frame. Already marked `playsinline muted loop autoplay`. Delete the `<img class="logo-card">` when you uncomment the `<video>`. |
| `step-1.webp` | "How it works" step 1 | Screenshot of a bottle being scanned |
| `step-2.webp` | "How it works" step 2 | Screenshot of the number pad |
| `step-3.webp` | "How it works" step 3 | Screenshot of items grouped by distributor |
| `step-4.webp` | "How it works" step 4 | Screenshot of the orders going out |
| `stephan.webp` | "From the founder" | Square photo, 320×320 or larger. Also replace the placeholder sentence with the two sentences Stephan writes. |

## Keep the page fast

- Export screenshots as WebP, max 600px wide, under ~60KB each.
- Keep the hero video under ~1.5MB and keep the poster image small.
- The `width` and `height` on each commented-out tag are placeholders — set them
  to the real pixel dimensions so nothing shifts while the page loads.

## Still needed from Stephan

- The App Store campaign token, for the `pt=` / `ct=` parameters.
  Add it to `CAMPAIGN.pt` in `js/main.js`; every badge picks it up automatically.
