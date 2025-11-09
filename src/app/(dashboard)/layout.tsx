import type { ReactNode } from 'react';
import DashboardSidebar from '@/components/layout/dashboard-sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 border-l border-border bg-muted/20">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">{children}</div>
      </div>
    </div>
  );
}
