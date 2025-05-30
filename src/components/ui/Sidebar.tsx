import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const Filters = () => (
    <div className="space-y-4 pt-4">
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider defaultValue={[0, 75]} max={100} step={1} />
              <div className="flex items-center justify-between">
                <Input type="number" placeholder="Min" className="w-[45%]" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="w-[45%]" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="property-type">
          <AccordionTrigger>Property Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {['House', 'Apartment', 'Condo', 'Townhouse', 'Land'].map(
                (type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id="" />
                    <label
                      htmlFor={`type-${type.toLowerCase()}`}
                      className="text-sm"
                    >
                      {type}
                    </label>
                  </div>
                )
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bedrooms">
          <AccordionTrigger>Bedrooms</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {['Any', '1+', '2+', '3+', '4+', '5+'].map((bed) => (
                <Button
                  key={bed}
                  variant="outline"
                  size="sm"
                  className="flex-1 min-w-[60px]"
                >
                  {bed}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bathrooms">
          <AccordionTrigger>Bathrooms</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {['Any', '1+', '2+', '3+', '4+'].map((bath) => (
                <Button
                  key={bath}
                  variant="outline"
                  size="sm"
                  className="flex-1 min-w-[60px]"
                >
                  {bath}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <Input type="text" placeholder="City, ZIP, or Neighborhood" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                'Pool',
                'Garage',
                'Air Conditioning',
                'Fireplace',
                'Garden',
                'Balcony',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox id="" />
                  <label
                    htmlFor={`feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden w-full mb-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </span>
          {mobileOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>

        {mobileOpen && (
          <div className="mt-4 border rounded-lg p-4 bg-muted">
            <Filters />
          </div>
        )}
      </div>

      <div className="hidden md:block w-full md:w-64">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <Filters />
      </div>
    </>
  );
};

export default Sidebar;
