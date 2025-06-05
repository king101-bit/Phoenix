'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or your preferred icons

export function PropertyCarousel({ property }: { property: Property }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % property.img.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + property.img.length) % property.img.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      {/* Main Image Display with Navigation */}
      <div className="relative aspect-16/9 md:aspect-[21/9] w-full rounded-lg overflow-hidden group">
        <Image
          src={property.img[currentIndex]}
          alt={property.title}
          width={1200}
          height={600}
          className="w-full h-full object-cover"
          priority
        />

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background/90 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4 mx-auto" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background/90 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4 mx-auto" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
          {currentIndex + 1} / {property.img.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 justify-center">
        {property.img.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors hover:border-primary/50 ${
              currentIndex === index ? 'border-primary' : 'border-gray-200'
            }`}
          >
            <div className="">
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="h-full w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
