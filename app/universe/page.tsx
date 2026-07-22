import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { ARTISTS } from "@/app/data/universe";

export const metadata: Metadata = {
  title: "The AI Dave Universe | AI Dave",
  description:
    "Every artist and project broadcasting under the AI Dave name — California Me, Aria Vantara, Rowan Vale, csj collective, Open Fracture, Cedar Valley, A Peaceful Start, and Bruce the Christmas Moose.",
};

export default function UniversePage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 scanlines">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-signal blink-dot" />
            Full frequency list
          </div>
          <h1 className="font-display text-4xl sm:text-6xl leading-tight max-w-2xl mb-6">
            The AI Dave Universe
          </h1>
          <p className="text-ink/70 max-w-xl mb-16 text-base sm:text-lg leading-relaxed">
            Every AI-generated artist and project broadcasting under the AI
            Dave name — each with its own sound, its own world, and its own
            frequency.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-panel-line border border-panel-line">
            {ARTISTS.map((a) => (
              <div key={a.name} className="bg-void flex flex-col">
                {a.image && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/0 to-void/0" />
                  </div>
                )}
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-2xl">{a.name}</h2>
                    <span
                      className={`shrink-0 font-mono text-[9px] uppercase tracking-widest px-2 py-1 border ${
                        a.status === "live"
                          ? "border-cyan/40 text-cyan"
                          : "border-panel-line text-dim"
                      }`}
                    >
                      {a.status === "live" ? "Live" : "Coming Soon"}
                    </span>
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {a.tagline}
                  </p>
                  {a.links.length > 0 ? (
                    <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-2">
                      {a.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs uppercase tracking-widest text-ink border-b border-cyan pb-0.5 hover:text-cyan transition-colors"
                        >
                          {l.label} →
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-auto font-mono text-xs uppercase tracking-widest text-dim pt-2">
                      Nothing live yet
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest text-dim hover:text-signal transition-colors"
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
