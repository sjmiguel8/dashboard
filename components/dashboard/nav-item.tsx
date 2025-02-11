'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip.tsx';
import clsx from 'clsx';
import styles from './NavItem.module.css';

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
            clsx(
              styles.flexCenter,
              { [styles.mdSize]: true },
              { [styles.bgAccent]: isActive }
            )
          )}
        >
          {children}
          <span className={styles.srOnly}>{label}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}
