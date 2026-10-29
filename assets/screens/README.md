# Phase 2 assets

Drop the files below into this folder, then uncomment the matching block in
`index.html`. Search the file for `PHASE 2` to find every slot.

Nothing in here is referenced by the live page until you uncomment it, so the
page never shows an empty box or a "coming soon" placeholder.

| File | Where it goes | Notes |
| --- | --- | --- |
| `hero.mp4` + `hero.webm` + `hero-poster.webp` | Hero, replaces the logo card | 8–12s scan recording in an iPhone frame. Already marked `playsinline muted loop autoplay`. Delete the `<img class="logo-card">` when you uncomment the `<video>`. |
| `step-1.webp` | "How it works" step 1 | Screenshot of a bottle label being snapped |
| `step-2.webp` | "How it works" step 2 | Screenshot of the number pad |
| `step-3.webp` | "How it works" step 3 | Screenshot of the app naming a bottle from its label |
| `step-4.webp` | "How it works" step 4 | Screenshot of bottles next to their par |
| `step-5.webp` | "How it works" step 5 | Screenshot of the orders going out |
| `stephan.webp` | "From the founder" | Square photo, 320×320 or larger. Also replace the placeholder sentence with the two sentences Stephan writes. |

## Already live (not Phase 2)

These two are referenced by `index.html` right now.

| File | Where it goes | Notes |
| --- | --- | --- |
| `demo.mp4` | "How it works" video | 720×1558, 39s, H.264 + AAC, faststart, ~6.2MB. Click-to-play with sound; `preload="none"`, so the file is never fetched until someone presses play. Captions and voiceover are baked in. |
| `demo-poster.webp` | Cover frame for `demo.mp4` | 720×1558, ~17KB. The only part of the player that loads with the page. |

If the video is ever re-cut: keep 720×1558 (the player sets
`aspect-ratio: 720 / 1558`), keep faststart on, and update the duration in the
line under the player, in the play button's `aria-label`, and the transcript.

## Keep the page fast

- Export screenshots as WebP, max 600px wide, under ~60KB each.
- Keep the hero video under ~1.5MB and keep the poster image small.
- The `width` and `height` on each commented-out tag are placeholders — set them
  to the real pixel dimensions so nothing shifts while the page loads.

## Still needed from Stephan

- The App Store campaign token, for the `pt=` / `ct=` parameters.
  Add it to `CAMPAIGN.pt` in `js/main.js`; every badge picks it up automatically.
