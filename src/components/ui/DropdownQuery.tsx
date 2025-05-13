'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export default function DropdownQuery() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') || 'recommended';

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    router.push(`?${params.toString()}`);
  };

  return (
    <Select defaultValue={sort} onValueChange={handleSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recommended">Recommended</SelectItem>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="newest">Newest First</SelectItem>
        <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
        <SelectItem value="bathrooms">Most Bathrooms</SelectItem>
      </SelectContent>
    </Select>
  );
}
