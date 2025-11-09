const insights = [
  {
    title: 'Focus streak',
    description: 'You completed 5 days of priority tasks for the Career pillar.',
    type: 'success'
  },
  {
    title: 'Balance reminder',
    description: 'No recent actions in Recreation. Schedule a hobby session this week.',
    type: 'reminder'
  }
];

export default function TaskInsights() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">AI insights</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {insights.map((insight) => (
          <article
            key={insight.title}
            className={`space-y-2 rounded-xl border p-4 text-sm ${
              insight.type === 'success'
                ? 'border-emerald-400/40 bg-emerald-400/10'
                : 'border-amber-400/40 bg-amber-200/10'
            }`}
          >
            <h3 className="font-semibold">{insight.title}</h3>
            <p className="text-muted-foreground">{insight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
