import { properties } from "@/data/properties";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bath, Bed, Heart, MapPin, Share2, Square } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default async function PropertyDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="h-screen text-center mt-10">
        <h2>Property Not Found</h2>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <section className="relative bg-muted p-8">
        <div className="container px-4 md:px-6 py-8">
          <Carousel className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-lg overflow-hidden">
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={property.img}
                  alt={`${property.title}`}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious
              className="absolute left-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              variant="outline"
              size="icon"
            />
            <CarouselNext
              className="absolute right-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              variant="outline"
              size="icon"
            />
          </Carousel>
        </div>
      </section>
      <section className="py-8 px-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold">{property.price}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-muted-foreground">{property.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Heart className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mb-8 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">3</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">2</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">1,800</p>
                    <p className="text-sm text-muted-foreground">Square Feet</p>
                  </div>
                </div>
              </div>
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Property Description
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    This beautiful modern home offers spacious living areas with
                    abundant natural light. The open floor plan features a
                    gourmet kitchen with stainless steel appliances, quartz
                    countertops, and a large island perfect for entertaining.
                    The primary suite includes a walk-in closet and an ensuite
                    bathroom with a double vanity and a walk-in shower. Two
                    additional bedrooms and a full bathroom complete the upper
                    level. The backyard is fully fenced with a covered patio,
                    perfect for outdoor dining and relaxation. Located in a
                    desirable neighborhood with easy access to parks, schools,
                    and shopping.
                  </p>
                  <p className="text-muted-foreground">
                    The backyard is fully fenced with a covered patio, perfect
                    for outdoor dining and relaxation. Located in a desirable
                    neighborhood with easy access to parks, schools, and
                    shopping.
                  </p>
                </TabsContent>
                <TabsContent value="features" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Property Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Interior Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Open floor plan
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Hardwood floors
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Stainless steel appliances
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Quartz countertops
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Central air conditioning
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Gas fireplace
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Exterior Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Private backyard
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Covered patio
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          Fenced yard
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          2-car garage
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Property Location
                  </h3>
                  <p className="text-muted-foreground">
                    Located in the heart of the city, this property is close to
                    top-rated schools, parks, and shopping centers. The
                    neighborhood offers a quiet suburban feel while still being
                    close to the city center.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            <div className="w-full lg:w-[350px] bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Inquire about this property
              </h2>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Full Name" />
                </div>
                <div>
                  <Input placeholder="Email Address" />
                </div>
                <div>
                  <Input placeholder="Phone Number" />
                </div>
                <div>
                  <Textarea placeholder="Message" rows={4} />
                </div>
                <Button className="w-full">Send Inquiry</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
