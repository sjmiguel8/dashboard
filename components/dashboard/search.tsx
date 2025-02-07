'use client';

import { Input } from '../ui/input.tsx';
import { Search } from 'lucide-react';

export function SearchInput() {
  return (
    <form className="relative ml-auto flex-1 md:grow-0" onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const value = formData.get('q') as string;
      if (value) {
        window.location.search = `?q=${encodeURIComponent(value)}`;
      }
    }}>
      <Search className="absolute left-2.5 top-[.75rem] h-4 w-4 text-muted-foreground" />
      <Input
        name="q"
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        defaultValue={typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('q') || '' : ''}
      />
    </form>
  );
}
