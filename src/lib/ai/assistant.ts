import { GoogleGenerativeAI } from '@google/generative-ai';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export async function chatWithAssistant(messages: Message[], context?: Record<string, unknown>) {
  if (!process.env.GEMINI_API_KEY) {
    console.warn('Gemini API key missing. Returning mock response.');
    return {
      response: 'This is a placeholder response. Configure GEMINI_API_KEY to enable live conversations.'
    };
  }

  const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = client.getGenerativeModel({ model: 'gemini-pro' });

  const systemPrompt = `You are LifeAI, an assistant helping users manage notes, tasks, and goals across eight pillars.\nContext: ${JSON.stringify(
    context ?? {}
  )}`;

  const history = [
    { role: 'user' as const, parts: systemPrompt },
    ...messages.map((message) => ({ role: message.role === 'user' ? ('user' as const) : ('model' as const), parts: message.content }))
  ];

  const chat = model.startChat({ history });
  const result = await chat.sendMessage(messages[messages.length - 1]?.content ?? 'Hello');
  return { response: result.response.text() };
}
