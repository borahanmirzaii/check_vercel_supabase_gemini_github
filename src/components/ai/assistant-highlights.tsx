const highlights = [
  {
    title: 'Suggested focus',
    description: 'Complete the draft for your career development plan today. I will remind you at 3pm.'
  },
  {
    title: 'Insight snapshot',
    description: 'Mood scores dipped on days without outdoor activity. Let’s schedule recreation twice this week.'
  },
  {
    title: 'Upcoming reminder',
    description: 'Send a note to Alex about Friday’s meetup. Draft ready in your Relationships pillar.'
  }
];

export default function AssistantHighlights() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {highlights.map((highlight) => (
        <article key={highlight.title} className="space-y-2 rounded-2xl border border-border bg-card p-4 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {highlight.title}
          </h3>
          <p className="text-sm text-muted-foreground">{highlight.description}</p>
        </article>
      ))}
    </section>
  );
}
