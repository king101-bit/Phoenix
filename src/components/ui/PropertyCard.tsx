"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function PropertyCard() {
  return (
    <>
      {properties.map((property) => (
        <Link href={`/property/${property.id}`} key={property.id}>
          <Card className="hover:shadow-lg transition-shadow">
            <Image
              src={property.img}
              alt={property.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-xl">{property.price}</CardTitle>
              <CardDescription className="text-gray-600">
                {property.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mt-2 text-sm">
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
