import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '../globals.css';

export const metadata: Metadata = {
  title: 'AI Life Management',
  description:
    'Offline-first AI-powered life management assistant with 8 pillar self-improvement insights.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
