const filters = [
  'Text',
  'Audio',
  'Image',
  'Video',
  'Tasks',
  'Events',
  'Pillars',
  'Tags'
];

export default function SearchFilters() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Filters & saved searches</h2>
          <p className="text-sm text-muted-foreground">
            Combine semantic filters, vector similarity, and timeline constraints for precise results.
          </p>
        </div>
        <button className="text-sm font-medium text-primary">Save current search</button>
      </header>
      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} className="rounded-full border border-border px-3 py-1 text-xs">
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {[1, 2].map((index) => (
          <article key={index} className="space-y-2 rounded-xl border border-border bg-muted/40 p-4 text-sm">
            <header className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
              <span>Saved search {index}</span>
              <span>Updated 3 days ago</span>
            </header>
            <p className="text-muted-foreground">
              Placeholder for natural language query and filters. Results appear instantly when selected.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
