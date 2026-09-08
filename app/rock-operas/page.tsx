import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { ROCK_OPERAS } from "@/app/data/rockoperas";

export const metadata: Metadata = {
  title: "Rock Operas | AI Dave",
  description:
    "Cinematic stories told entirely through music — the full collection of AI Dave rock operas, from full-length journeys to mini rock operas told in five or six songs.",
};

export default function RockOperasPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 scanlines">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-signal blink-dot" />
            Curated collection
          </div>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight max-w-2xl mb-6">
            Rock Operas
          </h1>
          <p className="text-ink/70 max-w-xl mb-16 text-base sm:text-lg leading-relaxed">
            Cinematic stories told entirely through music — no narration
            required. Some are full-length journeys, others are Mini Rock
            Operas telling one complete story in five or six songs. Just
            press play and let the music create the movie in your
            imagination.
          </p>

          <div className="flex flex-col gap-16">
            {ROCK_OPERAS.map((r) => (
              <div key={r.id}>
                <div className="relative aspect-video overflow-hidden border border-panel-line bg-void">
                  <iframe
                    src={`https://www.youtube.com/embed/${r.id}`}
                    title={r.title}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-start justify-between gap-4 mt-4">
                  <h2 className="font-display text-xl sm:text-2xl leading-snug">
                    {r.title}
                  </h2>
                  <span className="shrink-0 font-mono text-xs text-dim mt-1">
                    {r.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 font-mono text-xs uppercase tracking-widest">
            <a
              href="https://www.youtube.com/playlist?list=PLeHT4xATyxws"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-signal transition-colors"
            >
              Full playlist on YouTube ↗
            </a>
            <Link
              href="/"
              className="text-dim hover:text-signal transition-colors"
            >
              ← Back to AI Dave
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
