'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchFilters() {
  return (
    <div className="flex w-full items-center gap-4 ml-20">
      <div className="relative flex flex-col justify-center items-center">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by location, ZIP code, or address..."
          className="w-full md:w-96 lg:w-[500px] h-10 pl-9" // Adjust width and height here
        />
      </div>
    </div>
  );
}
