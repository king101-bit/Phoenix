'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function PropertyCard({ properties }: PropertyCardProps) {
  if (!properties) return null;

  return (
    <>
      {properties.map((property) => (
        <Link href={`/property/${property.id}`} key={property.id}>
          <Card className="hover:shadow-lg transition-shadow mb-4">
            <div className="relative w-full h-48 sm:h-60">
              <Image
                src={property.img}
                alt={property.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg sm:text-xl">
                {property.title}
              </CardTitle>
              <CardDescription className="mt-1">
                <p className="text-muted-foreground text-base sm:text-lg">
                  {property.price}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {property.location}
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base">
                <div className="flex items-center gap-1">
                  <span>{property.bedrooms}</span>
                  <span className="text-muted-foreground">bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{property.bathrooms}</span>
                  <span className="text-muted-foreground">bath</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{property.sqft}</span>
                  <span className="text-muted-foreground">sqft</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
