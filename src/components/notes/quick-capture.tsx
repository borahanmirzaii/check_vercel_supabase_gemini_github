import Link from 'next/link';

const captureModes = [
  {
    title: 'Text note',
    description: 'Markdown-enabled editor with AI summarization.',
    href: '#text'
  },
  {
    title: 'Voice note',
    description: 'Record audio and transcribe with Firebase ML.',
    href: '#audio'
  },
  {
    title: 'Image note',
    description: 'Capture or upload photos with OCR extraction.',
    href: '#image'
  },
  {
    title: 'Video note',
    description: 'Record short clips with auto transcripts.',
    href: '#video'
  }
];

export default function QuickCapture() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">Quick capture</h2>
          <p className="text-sm text-muted-foreground">
            Start a new note in seconds. In the full implementation this widget syncs to IndexedDB when offline.
          </p>
        </div>
        <Link href="#" className="text-sm font-medium text-primary">
          Customize shortcuts
        </Link>
      </header>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {captureModes.map((mode) => (
          <button
            key={mode.title}
            className="h-full rounded-xl border border-dashed border-border bg-muted/30 p-4 text-left transition hover:border-primary/60 hover:bg-primary/5"
          >
            <h3 className="text-sm font-semibold">{mode.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{mode.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
