"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <nav className="bg-gradient-to-r from-blue-100 to-blue-200 absolute top-0 w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-gray-900 ml-40 space-x-2"
          >
            <Image src="/logo.svg" alt="Logo" width={35} height={35} />
            <span>Phoenix</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 font-bold hover:text-blue-600"
            >
              Home
            </Link>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-700 font-bold hover:text-blue-600 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="properties"
              smooth={true}
              duration={500}
              className="text-gray-700 font-bold hover:text-blue-600 cursor-pointer"
            >
              Properties
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 font-bold hover:text-blue-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/properties"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Properties
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
