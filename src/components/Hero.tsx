'use client';

import { Search } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-[-1] bg-linear-to-b from-muted/50 to-muted"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Your Dream Home Today
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover thousands of properties for sale and rent across the
                country.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-3xl mt-8 p-4 bg-background rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <Input
                      type="text"
                      placeholder="City, neighborhood, or ZIP"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100k">Under $100k</SelectItem>
                        <SelectItem value="200k">$100k - $200k</SelectItem>
                        <SelectItem value="300k">$200k - $300k</SelectItem>
                        <SelectItem value="400k">$300k - $400k</SelectItem>
                        <SelectItem value="500k">$400k - $500k</SelectItem>
                        <SelectItem value="1m">$500k - $1M</SelectItem>
                        <SelectItem value="any">$1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full mt-4">
                  <Search className="mr-2 h-4 w-4" /> Search Properties
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
