const SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/@aidavemusic" },
  { label: "YouTube Shorts", href: "https://www.youtube.com/@aidavemusicshorts/shorts" },
  { label: "Instagram", href: "https://www.instagram.com/aidavemusic" },
  { label: "Spotify", href: "https://open.spotify.com/artist/1vV0DRNHYFVWweXMqFp6ma" },
  { label: "X", href: "https://www.twitter.com/aidavemusic" },
  { label: "TikTok", href: "https://www.tiktok.com/@aidavemusic" },
];

export default function Footer() {
  return (
    <footer id="connect" className="relative border-t border-panel-line bg-panel scanlines">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">
              End of transmission
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-md">
              Stay on frequency.
            </h2>
            <p className="mt-4 text-ink/70 max-w-sm">
              New chapters, tracks, and transmissions post first on YouTube
              and Instagram.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-dim mb-2">
                Contact
              </p>
              <a
                href="mailto:dave@aidavesmultimediauniverse.com"
                className="hover:text-cyan transition-colors"
              >
                dave@aidavesmultimediauniverse.com
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dim hover:text-signal transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-panel-line pt-8 flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] text-dim">
          <p>© {new Date().getFullYear()} AI Dave. All rights reserved.</p>
          <p>The Neon Highway Universe™ is a creative property of AI Dave.</p>
        </div>
      </div>
    </footer>
  );
}
