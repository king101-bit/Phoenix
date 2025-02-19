"use client";

import Image from "next/image";
import Link from "next/link";

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
    <section id="properties" className="py-16 px-6 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-8">
        Featured Properties
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-md p-4">
            <Image
              src={property.img}
              alt={property.title}
              width={400}
              height={250}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-blue-600 font-bold mt-2">{property.price}</p>
            <Link
              href={`/properties/${property.id}`}
              className="mt-4 inline-block text-white bg-blue-600 px-4 py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
