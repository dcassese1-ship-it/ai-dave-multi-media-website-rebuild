import Image from "next/image";

export default function Launch() {
  return (
    <section id="launch" className="relative border-t border-panel-line bg-panel scanlines">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-amber mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber blink-dot" />
              Priority transmission — pre-save open now
            </div>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-2xl">
              The full story lands July 28.
            </h2>
          </div>
          <p className="font-mono text-5xl sm:text-6xl text-outline leading-none">
            07.28
          </p>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          <div className="relative aspect-square border border-panel-line overflow-hidden">
            <Image
              src="/images/audiobook-cover.jpg"
              alt="Chronicles of the Neon Highway: Audiobook with Full Original Soundtrack — cover art"
              fill
              sizes="(max-width: 1024px) 100vw, 340px"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-panel-line border border-panel-line">
            <div className="bg-void p-8 flex flex-col gap-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">
                Audiobook
              </p>
              <h3 className="font-display text-2xl">
                Chronicles of the Neon Highway
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed">
                The complete novella, fully AI-narrated by KAEL and LYRA — with
                the full original soundtrack woven through the telling. A
                post-apocalyptic sci-fi journey and love story in the digital
                realm.
              </p>
              <div className="mt-auto flex flex-col gap-2.5">
                <a
                  href="https://open.spotify.com/show/3OmDkGiGo02pUglgO0GJVY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink border-b border-cyan pb-1 hover:text-cyan transition-colors"
                >
                  Pre-save on Spotify →
                </a>
                <a
                  href="https://www.amazon.com/dp/B0G6698CMR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-dim border-b border-panel-line pb-1 hover:text-cyan hover:border-cyan transition-colors"
                >
                  Read the eBook on Amazon →
                </a>
              </div>
            </div>

            <div className="bg-void p-8 flex flex-col gap-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-signal">
                Soundtrack
              </p>
              <h3 className="font-display text-2xl">
                Official Soundtrack — 21 Songs
              </h3>
              <p className="text-ink/70 text-sm leading-relaxed">
                The companion concept album, released the same day across
                every streaming platform — the full score of the Neon
                Highway universe, chapter by chapter.
              </p>
              <a
                href="https://open.spotify.com/artist/1vV0DRNHYFVWweXMqFp6ma"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink border-b border-signal pb-1 hover:text-signal transition-colors"
              >
                Follow on Spotify →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
