import AssistantChatPreview from '@/components/ai/assistant-chat-preview';
import AssistantHighlights from '@/components/ai/assistant-highlights';

export default function AIAssistantPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Gemini assistant</h1>
        <p className="text-sm text-muted-foreground">
          Converse with an AI that understands your goals, context, and historical data across every pillar.
        </p>
      </header>
      <AssistantChatPreview />
      <AssistantHighlights />
    </div>
  );
}
