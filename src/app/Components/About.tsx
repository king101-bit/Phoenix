"use client"; // ✅ Add this if you're in the app directory

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Ensure it's a named import

const About = () => {
  return (
    <>
      {" "}
      <section
        id="about"
        className="bg-gradient-to-r from-white to-gray-50 flex flex-col items-center justify-center"
      >
        {/* ✅ Fade-in Animation for Heading */}
        <motion.h1
          className="text-center text-3xl font-semibold mt-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ✅ Image Animation: Scale-in Effect */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/help.svg"
              alt="support"
              width={350}
              height={350}
              className="mb-3"
            />
          </motion.div>

          {/* ✅ Text Animation: Fade-in with Slide */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              Helping You Find The Best
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg">
              We are dedicated to providing the best real estate solutions
              tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
