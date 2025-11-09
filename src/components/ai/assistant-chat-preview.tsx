const messages = [
  {
    role: 'assistant',
    content:
      'Good morning! Your Health pillar is trending upward. Remember to log today’s hydration and enjoy a short walk after lunch.'
  },
  {
    role: 'user',
    content: 'Schedule a 45 minute deep work block tomorrow morning and summarize yesterday’s meeting notes.'
  },
  {
    role: 'assistant',
    content:
      'On it! I’ll reserve 8:30-9:15am, confirm with your calendar, and send a summary with three action items to your Tasks list.'
  }
];

export default function AssistantChatPreview() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Conversation preview</h2>
      <div className="mt-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
          >
            <p
              className={`max-w-xl rounded-2xl px-4 py-3 text-sm shadow-sm ${
                message.role === 'assistant'
                  ? 'bg-muted text-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}
            >
              {message.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
