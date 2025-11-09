import Link from 'next/link';

const sections = [
  {
    title: 'Capture Everything',
    description:
      'Create rich text, audio, image, and video notes that work online or offline and sync when you reconnect.',
    href: '/notes'
  },
  {
    title: 'AI Assistant',
    description:
      'Chat with your Gemini-powered copilot for summaries, insights, and contextual recommendations.',
    href: '/ai-assistant'
  },
  {
    title: 'Unified Schedule',
    description:
      'See your Google Calendar events, tasks, and memories in a single smart timeline.',
    href: '/calendar'
  },
  {
    title: '8 Pillars Progress',
    description:
      'Track health, finance, relationships, and more with personalized AI insights and suggestions.',
    href: '/pillars'
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="flex flex-col gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          LifeAI PWA
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Organize your life with intelligent, offline-first assistance
        </h1>
        <p className="text-muted-foreground">
          Capture memories, manage tasks, and grow across eight pillars of well-being with an
          AI assistant that understands your goals.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={`/(dashboard)${section.href}`}
            className="group rounded-xl border border-border bg-card/40 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <h2 className="mb-2 text-2xl font-semibold group-hover:text-primary">{section.title}</h2>
            <p className="text-sm text-muted-foreground">{section.description}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ml-1 h-4 w-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5m7.5-7.5H3" />
              </svg>
            </span>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <FeatureCard
          title="Offline-first"
          description="IndexedDB caching, background sync, and resilient service workers keep your data available everywhere."
        />
        <FeatureCard
          title="Privacy-first"
          description="Granular permissions, Firestore security rules, and encrypted storage protect your personal data."
        />
        <FeatureCard
          title="Extensible"
          description="Modular architecture with Zustand stores, typed APIs, and reusable shadcn/ui components."
        />
      </section>
    </main>
  );
}

function FeatureCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-border bg-card/50 p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </article>
  );
}
