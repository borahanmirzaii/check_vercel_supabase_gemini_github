import Link from 'next/link';
import { ReactNode } from 'react';

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-border bg-card p-10 shadow-xl">
        <header className="space-y-2 text-center">
          <Link href="/" className="inline-block text-sm font-semibold text-primary">
            LifeAI
          </Link>
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </header>
        <div>{children}</div>
      </div>
    </main>
  );
}
