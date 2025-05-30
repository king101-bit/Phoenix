interface Property {
  id: number;
  title: string;
  bathrooms: string;
  bedrooms: string;
  sqft: string;
  price: string;
  img: string;
  location: string;
}

interface PropertyCardProps {
  properties: Property[];
}
