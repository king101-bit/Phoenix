"use client";

import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { Button } from "./button";

export default function Properties() {
  return (
    <>
      <section className="py-12 md:py-16 bg-background" id="properties">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Featured Properties
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <PropertyCard />
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/listings">
              <Button variant="outline">View All Properties</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
