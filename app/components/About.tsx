export default function About() {
  return (
    <section className="relative border-t border-panel-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 grid md:grid-cols-[1fr_1.3fr] gap-12">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal mb-4">
            Transmission source
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            One creator.
            <br />
            One connected universe.
          </h2>
        </div>

        <div className="space-y-6 text-ink/80 text-base sm:text-lg leading-relaxed">
          <p>
            AI Dave is a multimedia creator blending AI-generated music,
            storytelling, and cinematic visuals into a single universe. Every
            song, image, and chapter is part of a connected narrative
            exploring identity, memory, and the future of human-AI
            consciousness.
          </p>
          <p>
            The catalog spans cyberpunk, electro-rock, noir pop, indie, and
            beyond — but its spine is <span className="text-ink">The
            Chronicles of the Neon Highway</span>: a post-apocalyptic sci-fi
            love story told across a novella, a 21-song concept album, and a
            growing library of AI-narrated video.
          </p>
          <p className="text-dim">
            Every release is a fragment of the same broadcast. This is where
            it's all logged.
          </p>
        </div>
      </div>
    </section>
  );
}
