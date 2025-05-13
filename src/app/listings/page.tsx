'use client';

import Sidebar from '@/components/ui/Sidebar';
import DropdownQuery from '@/components/ui/DropdownQuery';
import PropertyCard from '@/components/ui/PropertyCard';
import { useSearchParams } from 'next/navigation';
import  properties  from '@/data/properties'; 

export default function ListingsPage() {
  const searchParams = useSearchParams();
  const sort = searchParams.get('sort') || 'recommended';

  const sortedProperties = [...properties]; 

  switch (sort) {
    case 'price-asc':
      sortedProperties.sort(
        (a, b) =>
          parseInt(a.price.replace(/[$,]/g, '')) -
          parseInt(b.price.replace(/[$,]/g, ''))
      );
            break;
    case 'price-desc':
      sortedProperties.sort(
        (a, b) =>
          parseInt(b.price.replace(/[$,]/g, '')) -
          parseInt(a.price.replace(/[$,]/g, ''))
      );
      
      break;
    case 'newest':
      sortedProperties.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case 'bedrooms':
      sortedProperties.sort((a, b) => 
        parseInt(b.bedrooms) - parseInt(a.bedrooms));
      break;
    case 'bathrooms':
      sortedProperties.sort((a, b) => 
      parseInt(b.bathrooms) - parseInt(a.bathrooms)
      );
      break;
    default:
      // leave it as-is for "recommended"
      break;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h1 className="text-2xl font-bold">Properties for Sale</h1>
                  <p className="text-muted-foreground">
                    Showing 1-{sortedProperties.length} results
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <DropdownQuery />
                </div>
              </div>
              <div className="grid grid-cols-1 space-x-4 sm:grid-cols-1 lg:grid-cols-3 gap-4">
              <PropertyCard properties={sortedProperties} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
