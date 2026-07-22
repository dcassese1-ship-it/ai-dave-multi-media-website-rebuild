"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#story", label: "The Story" },
  { href: "#watch", label: "Watch" },
  { href: "#music", label: "Music" },
  { href: "/universe", label: "Universe" },
  { href: "#launch", label: "July 28" },
  { href: "#connect", label: "Connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur border-b border-panel-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-wide text-sm sm:text-base">
          AI&nbsp;DAVE<span className="text-signal">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-dim">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan blink-dot" />
          On Air
        </div>
      </nav>
    </header>
  );
}
