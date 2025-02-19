"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const texts = [
  "Find Your Dream Home",
  "Luxury Apartments Available",
  "Start Your Journey Today",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {texts[index]}
              </motion.span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover the best properties with ease. Your perfect home is just
              a click away.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex gap-2">
                <span>Browse Listings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - SVG */}
          <div className="flex justify-center">
            <img
              src="/sale.svg"
              alt="Real Estate Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
