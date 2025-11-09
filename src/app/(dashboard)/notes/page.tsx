import QuickCapture from '@/components/notes/quick-capture';
import NotesOverview from '@/components/notes/notes-overview';

export default function NotesPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Notes workspace</h1>
        <p className="text-sm text-muted-foreground">
          Capture multi-format notes that automatically sync and gain AI-powered summaries, tags, and
          reminders.
        </p>
      </header>
      <QuickCapture />
      <NotesOverview />
    </div>
  );
}
