'use client';

import { useState } from 'react';

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 800);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="font-medium">First name</span>
          <input
            type="text"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Ada"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="font-medium">Last name</span>
          <input
            type="text"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Lovelace"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="font-medium">Email</span>
        <input
          type="email"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="you@example.com"
        />
      </label>

      <label className="space-y-2 text-sm">
        <span className="font-medium">Password</span>
        <input
          type="password"
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Create a strong password"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-75"
      >
        {isSubmitting ? 'Creating account…' : 'Create account'}
      </button>

      <p className="text-xs text-muted-foreground">
        By continuing you agree to our terms of service and privacy policy.
      </p>
    </form>
  );
}
