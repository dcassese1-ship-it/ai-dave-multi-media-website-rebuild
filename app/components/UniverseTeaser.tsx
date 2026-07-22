import Image from "next/image";
import Link from "next/link";
import { ARTISTS } from "@/app/data/universe";

export default function UniverseTeaser() {
  return (
    <section id="universe" className="relative border-t border-panel-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">
              Other signals
            </p>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-xl">
              The AI Dave Universe
            </h2>
            <p className="mt-4 text-ink/70 max-w-lg">
              Beyond the Neon Highway — a growing roster of AI-generated
              artists, each broadcasting on their own frequency.
            </p>
          </div>
          <Link
            href="/universe"
            className="font-mono text-xs uppercase tracking-widest text-dim hover:text-signal transition-colors"
          >
            View all artists ↗
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-panel-line border border-panel-line">
          {ARTISTS.map((a) => (
            <Link
              key={a.name}
              href="/universe"
              className="group bg-void flex flex-col hover:bg-panel/60 transition-colors"
            >
              {a.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/10 to-transparent" />
                </div>
              )}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg group-hover:text-signal transition-colors">
                    {a.name}
                  </h3>
                  <span
                    className={`shrink-0 font-mono text-[9px] uppercase tracking-widest px-2 py-1 border ${
                      a.status === "live"
                        ? "border-cyan/40 text-cyan"
                        : "border-panel-line text-dim"
                    }`}
                  >
                    {a.status === "live" ? "Live" : "Soon"}
                  </span>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">{a.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
