'use client';

import { Button } from '../ui/button.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu.tsx';
import styles from './User.module.css';

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
};

export function User({ user }: UserProps) {
  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/auth/signout', { method: 'POST' });
    if (response.ok) {
      window.location.href = '/login';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`${styles.overflowHidden} ${styles.roundedFull}`}
        >
          <img
            src={user?.image ?? '/placeholder-user.jpg'}
            width={36}
            height={36}
            alt="Avatar"
            className={`${styles.overflowHidden} ${styles.roundedFull}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/settings">Settings</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form onSubmit={handleSignOut} className={styles.fullWidth}>
            <button type="submit" className={`${styles.fullWidth} ${styles.textLeft}`}>Sign Out</button>
          </form>
        </DropdownMenuItem>
        {!user && (
          <DropdownMenuItem asChild>
            <a href="/login">Sign In</a>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
