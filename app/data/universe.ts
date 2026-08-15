export type ArtistLink = {
  label: string;
  href: string;
};

export type Artist = {
  name: string;
  tagline: string;
  status: "live" | "coming-soon";
  image?: string;
  links: ArtistLink[];
};

export const ARTISTS: Artist[] = [
  {
    name: "California Me",
    tagline: "Nostalgic coastal California romanticism — indie pop for a road trip that never ends.",
    status: "live",
    image: "/images/universe/california-me.jpg",
    links: [
      { label: "Website", href: "https://www.californiameproject.com/" },
      { label: "YouTube", href: "https://www.youtube.com/@californiameproject" },
      { label: "Spotify", href: "https://open.spotify.com/artist/1iJSeStxqdmszQ5joVzrLY" },
      { label: "ReverbNation", href: "https://www.reverbnation.com/californiame" },
    ],
  },
  {
    name: "Aria Vantara",
    tagline: "AI artist & virtual model — Miami-inspired noir pop shaped by heat and neon.",
    status: "live",
    image: "/images/universe/aria-vantara.jpg",
    links: [
      { label: "Website", href: "https://ariavantara.com/" },
      { label: "Spotify", href: "https://open.spotify.com/artist/245fJVD4QIHQqRgGMpSeOb" },
      { label: "TikTok", href: "https://www.tiktok.com/@aria.vantara" },
      { label: "ReverbNation", href: "https://www.reverbnation.com/ariavantara" },
    ],
  },
  {
    name: "Rowan Vale",
    tagline: "Late-night indie lo-fi — static, memory, and signals that almost connect.",
    status: "live",
    image: "/images/universe/rowan-vale.jpg",
    links: [
      { label: "Website", href: "https://www.rowanvalemusic.com/" },
      { label: "Spotify", href: "https://open.spotify.com/artist/4gbinFZgYovyJJqwkyO7w4" },
    ],
  },
  {
    name: "csj collective",
    tagline: "Contemporary Christian music — different voices, one offering.",
    status: "live",
    image: "/images/universe/csj-collective.jpg",
    links: [
      { label: "Website", href: "https://csjcollective.com/" },
      { label: "Spotify", href: "https://open.spotify.com/artist/57tFnkw6MPErsVcHaL9qY5" },
    ],
  },
  {
    name: "Open Fracture",
    tagline: "Alt-rock, raw and anthemic.",
    status: "live",
    image: "/images/universe/open-fracture.jpg",
    links: [
      { label: "Website", href: "https://www.openfracture.com/" },
      { label: "Spotify", href: "https://open.spotify.com/artist/7I3XDXjscC9Qx6OGOtoVEt" },
    ],
  },
  {
    name: "Bruce the Christmas Moose",
    tagline: "Kids & family holiday music and storytelling.",
    status: "live",
    image: "/images/universe/bruce-christmas-moose.jpg",
    links: [
      { label: "Website", href: "https://thechristmasmoose.com" },
      { label: "YouTube", href: "https://www.youtube.com/@thechristmasmoose" },
      { label: "Spotify", href: "https://open.spotify.com/album/1kXOUVJMlIn9MfVbPuOixG" },
    ],
  },
  {
    name: "A Peaceful Start",
    tagline: "An ambient music channel — cozy windows, quiet mornings, long-form calm.",
    status: "live",
    image: "/images/universe/a-peaceful-start.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@apeacefulstart" },
    ],
  },
  {
    name: "Cedar Valley",
    tagline: "New sound, new signal — website and EP coming soon.",
    status: "coming-soon",
    image: "/images/universe/cedar-valley.jpg",
    links: [],
  },
];
