import PillarGrid from '@/components/pillars/pillar-grid';
import PillarHighlights from '@/components/pillars/pillar-highlights';

export default function PillarsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">8 pillars dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Track holistic progress with AI-generated insights across health, finance, relationships, and more.
        </p>
      </header>
      <PillarHighlights />
      <PillarGrid />
    </div>
  );
}
