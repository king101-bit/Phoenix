import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/Sidebar";
import { HomeIcon, Search } from "lucide-react";
import React from "react";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import PropertyCard from "@/components/ui/PropertyCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8">
              <Sidebar />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">Properties for Sale</h1>
                    <p className="text-muted-foreground">
                      Showing 1-12 of 48 results
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="recommended">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recommended">Recommended</SelectItem>
                        <SelectItem value="price-asc">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-desc">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
                        <SelectItem value="bathrooms">
                          Most Bathrooms
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PropertyCard />
                </div>
                <div className="justify-center items-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink isActive href="#">
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t bg-background">
          <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2">
                <HomeIcon className="h-6 w-6" />
                <span className="text-xl font-bold">EstateEase</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 md:mt-0">
                © {new Date().getFullYear()} EstateEase. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
