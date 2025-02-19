"use client";

import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in LA",
    price: "$2,500,000",
    img: "/beach-house.jpg",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    title: "Modern Apartment in NYC",
    price: "$1,200,000",
    img: "/beach-house.jpg",
    location: "New York, NY",
  },
  {
    id: 3,
    title: "Beachfront House in Miami",
    price: "$3,800,000",
    img: "/beach-house.jpg",
    location: "Miami, FL",
  },
];

export default function Properties() {
  return (
    <section className="py-16" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={property.img}
                alt={property.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#0676E6] font-bold">
                    {property.price}
                  </span>
                  <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
