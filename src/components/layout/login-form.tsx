'use client';

import { useState } from 'react';

const providers = [
  { id: 'google', label: 'Continue with Google' },
  { id: 'email', label: 'Sign in with Email' }
];

export default function LoginForm() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  return (
    <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Sign in
      </button>

      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">or choose a quick sign-in option</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {providers.map((provider) => (
            <button
              key={provider.id}
              type="button"
              className={`rounded-lg border px-4 py-2 text-sm transition hover:border-primary/60 ${
                selectedProvider === provider.id ? 'border-primary bg-primary/10' : 'border-border'
              }`}
              onClick={() => setSelectedProvider(provider.id)}
            >
              {provider.label}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
