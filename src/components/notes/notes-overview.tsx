const mockNotes = [
  {
    title: 'Product strategy sync',
    summary: 'AI summary placeholder describing action items and key decisions.',
    tags: ['career', 'tasks'],
    updatedAt: '2h ago'
  },
  {
    title: 'Morning reflection',
    summary: 'Mindfulness journal entry with sentiment analysis stub.',
    tags: ['mental', 'journal'],
    updatedAt: 'Today'
  },
  {
    title: 'Grocery receipt photo',
    summary: 'Expense categorized under Finance with OCR extracted totals.',
    tags: ['finance', 'ocr'],
    updatedAt: 'Yesterday'
  }
];

export default function NotesOverview() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent notes</h2>
        <button className="text-sm font-medium text-primary">View all</button>
      </header>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {mockNotes.map((note) => (
          <article key={note.title} className="space-y-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <header>
              <h3 className="text-base font-semibold">{note.title}</h3>
              <p className="text-xs text-muted-foreground">Updated {note.updatedAt}</p>
            </header>
            <p className="text-sm text-muted-foreground">{note.summary}</p>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wide text-muted-foreground">
              {note.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
