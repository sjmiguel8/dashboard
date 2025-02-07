'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import clsx from 'clsx';

export function NavItem({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isActive = typeof window !== 'undefined' && window.location.pathname === href;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className={clsx(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            {
              'bg-accent text-black': isActive
            }
          )}
        >
          {children}
          <span className="sr-only">{label}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}
