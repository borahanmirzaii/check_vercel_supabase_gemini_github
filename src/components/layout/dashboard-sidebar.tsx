'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { LifeSparkLogo } from './life-spark-logo';

const navItems = [
  { href: '/(dashboard)/notes', label: 'Notes' },
  { href: '/(dashboard)/calendar', label: 'Calendar' },
  { href: '/(dashboard)/tasks', label: 'Tasks' },
  { href: '/(dashboard)/pillars', label: 'Pillars' },
  { href: '/(dashboard)/search', label: 'Search' },
  { href: '/(dashboard)/ai-assistant', label: 'AI Assistant' }
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 flex-col border-r border-border bg-card/80 p-6 lg:flex">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <LifeSparkLogo />
        LifeAI
      </div>
      <nav className="mt-10 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center justify-between rounded-lg px-3 py-2 text-sm transition',
              pathname === item.href
                ? 'bg-primary text-primary-foreground shadow'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto rounded-lg border border-dashed border-border p-4 text-xs text-muted-foreground">
        Sync status: <span className="font-medium text-foreground">Offline mode (demo)</span>
      </div>
    </aside>
  );
}
