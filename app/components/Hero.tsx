export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden scanlines grain"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full bg-signal/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-[120px]" />

      {/* moving scan sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
        <div className="scan-sweep h-32 w-full bg-gradient-to-b from-transparent via-cyan to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 pt-28 pb-16">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-signal blink-dot" />
          Incoming transmission — origin: the neon highway
        </div>

        <h1 className="font-display font-semibold leading-[0.92] tracking-tight text-[15vw] sm:text-[9vw] lg:text-[6.4rem] flicker">
          AI DAVE
        </h1>
        <p className="font-display text-2xl sm:text-4xl text-dim mt-2 tracking-tight">
          Multimedia Universe
        </p>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-ink/80 leading-relaxed">
          Music, stories, and cinematic AI art broadcast from a post-apocalyptic
          future — where memory, identity, and human consciousness are being
          rewritten one signal at a time.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#music"
            className="inline-flex items-center gap-2 bg-signal text-void font-mono text-xs uppercase tracking-widest font-medium px-6 py-3.5 hover:bg-ink transition-colors"
          >
            Listen Now
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 border border-panel-line text-ink font-mono text-xs uppercase tracking-widest px-6 py-3.5 hover:border-cyan hover:text-cyan transition-colors"
          >
            Read the Story
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 max-w-md font-mono text-[11px] uppercase tracking-widest text-dim border-t border-panel-line pt-5">
          <div>
            <dt className="mb-1">Signal</dt>
            <dd className="text-ink normal-case tracking-normal text-sm font-body">Active</dd>
          </div>
          <div>
            <dt className="mb-1">Chapters</dt>
            <dd className="text-ink normal-case tracking-normal text-sm font-body">6 logged</dd>
          </div>
          <div>
            <dt className="mb-1">Format</dt>
            <dd className="text-ink normal-case tracking-normal text-sm font-body">Novella + Album</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
