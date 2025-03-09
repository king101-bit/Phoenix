"use client";

import { SearchFilters } from "@/components/search-filter";
import React from "react";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <>
      {" "}
      <nav className="flex justify-between items-center py-4 px-6">
        {/* Left Items */}
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-400">
            Houses
          </Link>
          <Link href="/" className="hover:text-gray-400">
            Townhomes
          </Link>
          <Link href="/" className="hover:text-gray-400">
            Apartments
          </Link>
          <Link href="/" className="hover:text-gray-400">
            Land
          </Link>
        </div>

        <SearchFilters />

        {/* Right Items */}
        <div className="flex items-center gap-4">
          <Link href="/loans" className="px-4 py-1.5 hover:text-gray-400">
            Loans
          </Link>
          <Link href="/resources" className="px-4 py-1.5 hover:text-gray-400">
            Resources
          </Link>
          <Link
            href="/login"
            className="px-4 py-1.5 text-black bg-white border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 text-white bg-blue-600 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
