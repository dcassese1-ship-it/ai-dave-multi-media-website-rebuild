export type WatchVideo = {
  id: string;
  title: string;
  chapter: string;
  duration: string;
};

const VIDEOS: WatchVideo[] = [
  {
    id: "XHM-K-Re6mw",
    title: "The Merge Revealed",
    chapter: "Voltage Bay — Voices in the Machine",
    duration: "3:20",
  },
  {
    id: "ZGx-2A_stq0",
    title: "Neon Hearts Ablaze",
    chapter: "Voltage Bay — Voltage Love",
    duration: "4:15",
  },
  {
    id: "E-OKKK4VoJE",
    title: "Digitized Humanity Awakens",
    chapter: "Ascension Protocol — Finale",
    duration: "4:22",
  },
];

export default function Watch() {
  return (
    <section id="watch" className="relative border-t border-panel-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">
              Visual transmission
            </p>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-xl">
              Watch the Universe
            </h2>
            <p className="mt-4 text-ink/70 max-w-lg">
              The characters of the Neon Highway, on screen — cinematic
              music videos from the story so far.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@aidavemusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-panel-line text-ink font-mono text-xs uppercase tracking-widest px-5 py-3 hover:border-signal hover:text-signal transition-colors shrink-0"
          >
            Subscribe on YouTube →
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {VIDEOS.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden border border-panel-line bg-void">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/0 to-void/0" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-void/70 border border-ink/30 flex items-center justify-center group-hover:bg-signal group-hover:border-signal transition-colors">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      className="ml-0.5 text-ink group-hover:text-void transition-colors"
                    >
                      <path d="M0 0L16 9L0 18V0Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-ink bg-void/80 px-1.5 py-0.5">
                  {v.duration}
                </span>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-widest text-dim mt-3">
                {v.chapter}
              </p>
              <h3 className="font-display text-lg mt-1 group-hover:text-signal transition-colors">
                {v.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
