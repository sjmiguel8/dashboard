'use client';

import { Input } from '../ui/input.tsx';
import { Search } from 'lucide-react';
import styles from './SearchInput.module.css';

export function SearchInput() {
  return (
    <form className={`${styles.relativeForm} ${styles.mdGrow}`} onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const value = formData.get('q') as string;
      if (value) {
        window.location.search = `?q=${encodeURIComponent(value)}`;
      }
    }}>
      <Search className={styles.icon} />
      <Input
        name="q"
        type="search"
        placeholder="Search..."
        className={`${styles.input} ${styles.mdWidth} ${styles.lgWidth}`}
        defaultValue={typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('q') || '' : ''}
      />
    </form>
  );
}
