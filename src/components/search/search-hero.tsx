export default function SearchHero() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h1 className="text-3xl font-semibold tracking-tight">Unified search</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Find memories, tasks, emails, and documents instantly. Semantic embeddings, visual similarity search, and
        voice queries converge to deliver contextual answers.
      </p>
      <div className="mt-6 rounded-xl border border-border bg-background p-4 shadow-inner">
        <input
          type="search"
          placeholder="Ask anything about your life data…"
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
    </section>
  );
}
