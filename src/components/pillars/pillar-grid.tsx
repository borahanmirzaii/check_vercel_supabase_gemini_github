const pillars = [
  'Health & Fitness',
  'Finance',
  'Career & Professional',
  'Relationships & Network',
  'Mental & Emotional',
  'Learning & Growth',
  'Recreation & Hobbies',
  'Contribution & Purpose'
];

export default function PillarGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {pillars.map((pillar) => (
        <article key={pillar} className="space-y-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
          <header className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {pillar}
          </header>
          <p className="text-sm text-muted-foreground">
            Placeholder metrics and visualizations go here. Each card will display recent progress, AI insights, and
            quick actions tailored to the pillar.
          </p>
          <button className="text-sm font-medium text-primary">Open details</button>
        </article>
      ))}
    </section>
  );
}
