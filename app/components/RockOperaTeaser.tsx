import Link from "next/link";
import { ROCK_OPERAS } from "@/app/data/rockoperas";

// Placeholder — swap to the id of whichever rock opera should be featured here.
const FEATURED_ROCK_OPERA_ID = "4-HiA2U31Nk";

export default function RockOperaTeaser() {
  const featured =
    ROCK_OPERAS.find((r) => r.id === FEATURED_ROCK_OPERA_ID) ?? ROCK_OPERAS[0];

  return (
    <section id="rock-operas" className="relative border-t border-panel-line bg-panel">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">
              Extended transmission
            </p>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-xl">
              Rock Opera Transmission
            </h2>
            <p className="mt-4 text-ink/70 max-w-lg">
              Full stories told entirely through music, no narration
              required — cinematic rock operas that turn an album into a
              world. Press play and let one carry you all the way through.
            </p>
          </div>
          <Link
            href="/rock-operas"
            className="inline-flex items-center gap-2 border border-panel-line text-ink font-mono text-xs uppercase tracking-widest px-5 py-3 hover:border-signal hover:text-signal transition-colors shrink-0"
          >
            See All Rock Operas →
          </Link>
        </div>

        <div className="border border-panel-line bg-void">
          <div className="relative aspect-video overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${featured.id}`}
              title={featured.title}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex items-start justify-between gap-4 flex-wrap p-6 sm:p-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-dim mb-1">
                Featured rock opera
              </p>
              <h3 className="font-display text-xl sm:text-2xl leading-snug">
                {featured.title}
              </h3>
            </div>
            <span className="shrink-0 font-mono text-xs text-dim mt-1">
              {featured.duration}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
