import Link from 'next/link';

export default function CalendarHero() {
  return (
    <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-sm">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Smart calendar</p>
        <h1 className="text-3xl font-semibold tracking-tight">Plan with confidence</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Syncs two-way with Google Calendar, surfaces AI-suggested focus blocks, and keeps offline edits queued
          for background sync. Today&apos;s prototype shows the planned experience.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Connect Google Calendar
          </Link>
          <Link href="#" className="rounded-lg border border-border px-4 py-2 text-sm font-medium">
            Configure scheduling AI
          </Link>
        </div>
      </div>
    </section>
  );
}
