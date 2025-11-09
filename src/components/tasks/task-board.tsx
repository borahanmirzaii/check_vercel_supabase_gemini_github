const columns = [
  {
    title: 'To do',
    tasks: [
      { title: 'Outline wellness goals', pillar: 'Health', due: 'Today' },
      { title: 'Draft Q2 OKRs', pillar: 'Career', due: 'Tomorrow' }
    ]
  },
  {
    title: 'In progress',
    tasks: [
      { title: 'Transcribe customer interviews', pillar: 'Career', due: 'In 2 days' }
    ]
  },
  {
    title: 'Done',
    tasks: [
      { title: 'Log meal & macros', pillar: 'Health', due: 'Completed' },
      { title: 'Send gratitude note', pillar: 'Relationships', due: 'Completed' }
    ]
  }
];

export default function TaskBoard() {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {columns.map((column) => (
        <article key={column.title} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
          <header className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide">{column.title}</h2>
            <span className="text-xs text-muted-foreground">{column.tasks.length} tasks</span>
          </header>
          <div className="mt-4 space-y-3">
            {column.tasks.map((task) => (
              <div key={task.title} className="space-y-1 rounded-xl border border-border bg-muted/40 p-3">
                <p className="text-sm font-medium">{task.title}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="uppercase tracking-wide">{task.pillar}</span>
                  <span>{task.due}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
