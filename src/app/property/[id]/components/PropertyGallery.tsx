import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyGallery = ({ images = [], title = "Property Title" }) => {
  const [current, setCurrent] = useState(0);

  const handleThumbClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
        <Carousel value={current} onValueChange={setCurrent}>
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <Image
                  src={img}
                  alt={title}
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() =>
                setCurrent((prev) => (prev > 0 ? prev - 1 : images.length - 1))
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  current === i ? "bg-primary" : "bg-background/80"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2 mt-2">
        {images.map((img, i) => (
          <div
            key={i}
            className={`aspect-[4/3] overflow-hidden rounded-md ${
              current === i ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              width={200}
              height={150}
              className="h-full w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => handleThumbClick(i)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyGallery;
