'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Edit2, Trash2 } from 'lucide-react';
import Link from 'next/link';

type DashboardPropertyCardProps = {
  property: {
    id: number; // Changed from string to number
    img: string[];
    title: string;
    price: string;
    location: string;
    bedrooms: string; // Changed from number to string
    bathrooms: string; // Changed from number to string
    sqft: string; // Changed from optional number to string
    createdAt?: string; // Added optional field
  };
  onDelete: (id: number) => void; // Changed parameter type to number
};
type ListingCardProps = {
  property: {
    id: number; // Changed from string to number
    img: string[];
    title: string;
    price: string;
    location: string;
    bedrooms: string; // Changed from number to string
    bathrooms: string; // Changed from number to string
    sqft: string; // Changed from optional number to string
    createdAt?: string; // Added optional field
  };
  onDelete: (id: number) => void; // Changed parameter type to number
  onEdit: (id: number) => void; // Added onEdit function
};

export function DashboardPropertyCard({
  property,
  onDelete,
}: DashboardPropertyCardProps) {
  return (
    <Card className="mb-4 overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={property.img[0]}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 300px"
        />
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(property.id);
          }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <CardHeader className="p-4 space-y-1">
        <CardTitle className="text-lg">{property.price}</CardTitle>
        <CardDescription className="line-clamp-1">
          {property.title}
        </CardDescription>
        <CardDescription className="text-sm">
          {property.location}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex gap-4 text-sm">
          <span>{property.bedrooms} bed</span>
          <span>{property.bathrooms} bath</span>
          {property.sqft && <span>{property.sqft} sqft</span>}
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/property/${property.id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ListingCard({
  property,
  onDelete,
  onEdit,
}: ListingCardProps) {
  return (
    <>
      <Card className="mb-4 overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={property.img[0]}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 300px"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(property.id);
              }}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(property.id);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardHeader className="p-4 space-y-1">
          <CardTitle className="text-lg">{property.price}</CardTitle>
          <CardDescription className="line-clamp-1">
            {property.title}
          </CardDescription>
          <CardDescription className="text-sm">
            {property.location}
          </CardDescription>
          <div className="flex gap-4 text-sm">
            <span>{property.bedrooms} bed</span>
            <span>{property.bathrooms} bath</span>
            {property.sqft && <span>{property.sqft} sqft</span>}
          </div>
        </CardHeader>

        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <p className="text-muted-foreground">Listed 1 week ago</p>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/property/${property.id}`}>View</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
