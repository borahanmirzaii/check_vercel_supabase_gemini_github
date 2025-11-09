const agenda = [
  {
    title: 'Deep work block',
    start: '09:00',
    end: '11:00',
    source: 'AI suggested',
    pillar: 'Career'
  },
  {
    title: 'Lunch & walk',
    start: '12:30',
    end: '13:30',
    source: 'Personal',
    pillar: 'Health'
  },
  {
    title: 'Mentor call with Sam',
    start: '15:00',
    end: '15:45',
    source: 'Google Calendar',
    pillar: 'Relationships'
  }
];

export default function UpcomingAgenda() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Today&apos;s agenda</h2>
          <p className="text-sm text-muted-foreground">
            AI factors in your focus preferences, energy levels, and pillar goals when scheduling.
          </p>
        </div>
        <button className="rounded-lg border border-border px-3 py-2 text-sm">Add event</button>
      </header>
      <div className="mt-6 space-y-3">
        {agenda.map((item) => (
          <article key={item.title} className="flex items-center justify-between rounded-xl bg-muted/40 p-4">
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.source}</p>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <p>
                {item.start} - {item.end}
              </p>
              <p className="font-medium uppercase tracking-wide text-foreground">{item.pillar}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
