const CHAPTERS = [
  {
    log: "01",
    title: "The Maze",
    ep: "Neon Highway",
    status: "streaming",
  },
  {
    log: "02",
    title: "Electric Cities",
    ep: "Electric Cities",
    status: "streaming",
  },
  {
    log: "03",
    title: "Voltage Bay",
    ep: "Voltage Bay: Baptism of Light",
    status: "streaming",
  },
  {
    log: "04",
    title: "The Custodians",
    ep: "The Custodians",
    status: "streaming",
  },
  {
    log: "05",
    title: "Ascension Protocol",
    ep: "Ascension Protocol",
    status: "in production",
  },
  {
    log: "—",
    title: "Epilogue: The Dawn of Digitized Humanity",
    ep: "Full Soundtrack",
    status: "July 28",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative border-t border-panel-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">
              Transmission log
            </p>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight max-w-xl">
              Chronicles of the Neon Highway
            </h2>
          </div>
          <a
            href="https://www.amazon.com/dp/B0G6698CMR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-dim hover:text-cyan transition-colors"
          >
            Read the full story ↗
          </a>
        </div>

        <ol className="border-t border-panel-line">
          {CHAPTERS.map((c) => (
            <li
              key={c.log}
              className="group grid grid-cols-[3.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_10rem_8rem] items-center gap-4 border-b border-panel-line py-5 hover:bg-panel/60 transition-colors"
            >
              <span className="font-mono text-dim text-sm">{c.log}</span>
              <span className="font-display text-lg sm:text-xl group-hover:text-cyan transition-colors">
                {c.title}
              </span>
              <span className="hidden sm:block font-mono text-xs text-dim uppercase tracking-wide">
                {c.ep}
              </span>
              <span
                className={`justify-self-end sm:justify-self-start font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border ${
                  c.status === "streaming"
                    ? "border-cyan/40 text-cyan"
                    : c.status === "July 28"
                    ? "border-amber/40 text-amber"
                    : "border-panel-line text-dim"
                }`}
              >
                {c.status}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
