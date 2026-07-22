# AI Dave Multimedia Universe — Homepage Rebuild

Next.js 16 (App Router) + Tailwind v4. Built to deploy on Vercel, same as the Christmas Moose site.

## Run locally
```
npm install
npm run dev
```

## Deploy
Push to GitHub, then import the repo in Vercel (or `vercel deploy` from this folder). No environment variables needed.

## What's here
- `app/page.tsx` — assembles the homepage sections
- `app/components/` — Nav, Hero, About, Launch (July 28 audiobook + soundtrack), Story (chapter log), Music (EP accordion + Spotify embeds), Footer
- `app/data/music.ts` — all EP/track/single data pulled from the current Wix site — edit here to add tracks or swap in the soundtrack link once it's live

## Design system
- Palette: near-black void (#08070D), signal magenta (#FF3D8A), cyan (#22E8D8), amber (#FFB454)
- Type: Chakra Petch (display), Inter (body), JetBrains Mono (labels/data)
- Motif: "transmission log" — the story and catalog are framed as intercepted broadcasts, fitting the AI-consciousness theme

## Known TODO
- Swap the Spotify soundtrack link in `Launch.tsx` once the DistroKid release is live (currently points to your artist page)
- The Custodians EP has no Spotify embed yet (no album link was on the old site) — add its `spotifyAlbumId` in `music.ts` once available
- Real photography/artwork for the hero and About section could replace the current type-only treatment
