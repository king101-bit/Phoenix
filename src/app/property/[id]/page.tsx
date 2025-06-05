import properties from '@/data/properties';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Bath, Bed, Heart, MapPin, Share2, Square } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Metadata } from 'next';
import { PropertyCarousel } from '@/components/Property/PropertyCarousel';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// Updated type definition for Next.js 15+
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // Await the params
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return {
      title: 'Property Not Found',
      description: "The property you're looking for does not exist.",
    };
  }

  return {
    title: `${property.title} | Phoenix`,
    description: `Explore details about ${property.title} located in ${property.location}.`,
    openGraph: {
      title: `${property.title} | Luna Properties`,
      description: `Explore this listing in ${property.location}. Price: ${property.price}`,
      images: [
        {
          url: property.img[0],
          width: 1200,
          height: 630,
          alt: `${property.title}`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params; // Await the params
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="h-screen text-center mt-10">
        <Image
          src="/town.png"
          width={300}
          height={300}
          className="h-auto w-auto justify-center items-center"
          alt="error text"
        />
        <h2>Property Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <section className="relative bg-muted p-8">
          <div className="container px-4 md:px-6 py-4">
            <PropertyCarousel property={property} />
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
                      <p className="text-muted-foreground">
                        {property.location}
                      </p>
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
                      <p className="text-sm text-muted-foreground">
                        Square Feet
                      </p>
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
                      This beautiful modern home offers spacious living areas
                      with abundant natural light. The open floor plan features
                      a gourmet kitchen with stainless steel appliances, quartz
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
                    <h3 className="text-xl font-semibold mb-4">Location</h3>
                    <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-4">
                      {/* Map would go here - using placeholder */}
                      <div className="h-full w-full flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>{' '}
                    <h4 className="font-medium mb-2">Nearby Amenities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Schools</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Lincoln Elementary School (0.5 miles)</li>
                          <li>Washington Middle School (1.2 miles)</li>
                          <li>Jefferson High School (1.8 miles)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">
                          Transportation
                        </h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Bus Stop (0.2 miles)</li>
                          <li>Light Rail Station (0.8 miles)</li>
                          <li>Highway Access (1.5 miles)</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="w-full lg:w-80 lg:min-w-[320px]">
                <div className="sticky top-24 border rounded-lg p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-sm text-muted-foreground">
                        Premier Realty
                      </p>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <Input type="text" placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Your Phone" />
                    </div>
                    <div>
                      <Textarea
                        placeholder="I'm interested in this property and would like to schedule a viewing."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    By submitting, you agree to our{' '}
                    <Link href="/terms" className="underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
