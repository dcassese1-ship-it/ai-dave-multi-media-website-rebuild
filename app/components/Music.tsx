"use client";

import { useState } from "react";
import { EPS, SINGLES } from "@/app/data/music";

export default function Music() {
  const [open, setOpen] = useState<string | null>(EPS[0].title);

  return (
    <section id="music" className="relative border-t border-panel-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan mb-4">
              Frequency index
            </p>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-xl">
              The Neon Highway Catalog
            </h2>
            <p className="mt-4 text-ink/70 max-w-lg">
              Three EPs, one continuous score — Neon Highway, Electric
              Cities, and Voltage Bay. The rest of the catalog lives on
              ReverbNation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 font-mono text-xs uppercase tracking-widest text-dim">
            <a
              href="https://www.reverbnation.com/aidave/songs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan transition-colors"
            >
              Full catalog on ReverbNation ↗
            </a>
            <a
              href="https://www.youtube.com/@aidavemusicshorts/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan transition-colors"
            >
              Shorts on YouTube ↗
            </a>
          </div>
        </div>

        <div className="border-t border-panel-line">
          {EPS.map((ep) => {
            const isOpen = open === ep.title;
            return (
              <div key={ep.title} className="border-b border-panel-line">
                <button
                  onClick={() => setOpen(isOpen ? null : ep.title)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl group-hover:text-signal transition-colors">
                      {ep.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-dim mt-1">
                      {ep.genre}
                    </p>
                  </div>
                  <span
                    className={`font-mono text-xl text-dim transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-45 text-signal" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-8 grid md:grid-cols-[1fr_1.1fr] gap-8">
                    <ol className="space-y-2.5">
                      {ep.tracks.map((t, i) => (
                        <li
                          key={t.title}
                          className="flex items-baseline gap-3 text-sm sm:text-base"
                        >
                          <span className="font-mono text-dim text-xs w-5 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {t.youtube ? (
                            <a
                              href={t.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan transition-colors"
                            >
                              {t.title}
                            </a>
                          ) : (
                            <span className="text-ink/80">{t.title}</span>
                          )}
                        </li>
                      ))}
                    </ol>

                    {ep.spotifyAlbumId && (
                      <iframe
                        title={`${ep.title} on Spotify`}
                        src={`https://open.spotify.com/embed/album/${ep.spotifyAlbumId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="352"
                        style={{ borderRadius: 0, border: "1px solid var(--panel-line)" }}
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-dim mb-5">
            Released singles
          </p>
          <div className="flex flex-wrap gap-3">
            {SINGLES.map((s) => (
              <a
                key={s.title}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wide px-3.5 py-2 border border-panel-line hover:border-signal hover:text-signal transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
