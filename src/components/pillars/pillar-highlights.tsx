const highlights = [
  {
    pillar: 'Health & Fitness',
    trend: 'improving',
    summary: 'Consistent sleep tracking increased average rest by 45 minutes.',
    recommendation: 'Continue wind-down routine and schedule weekly yoga.'
  },
  {
    pillar: 'Finance',
    trend: 'stable',
    summary: 'Spending decreased 8% vs last month. Savings rate at 22%.',
    recommendation: 'Automate transfers to investment account each payday.'
  }
];

export default function PillarHighlights() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Latest insights</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {highlights.map((highlight) => (
          <article key={highlight.pillar} className="space-y-2 rounded-xl border border-border bg-muted/40 p-4">
            <header className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
              <span>{highlight.pillar}</span>
              <span className="font-semibold text-foreground">{highlight.trend}</span>
            </header>
            <p className="text-sm font-medium">{highlight.summary}</p>
            <p className="text-xs text-muted-foreground">{highlight.recommendation}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
