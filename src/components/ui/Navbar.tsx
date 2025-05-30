import { Home, Search } from 'lucide-react';
import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    {
      href: '/buy',
      label: 'Buy',
      key: 'buy',
    },
    {
      href: '/sell',
      label: 'Sell',
      key: 'sell',
    },
    {
      href: '/rent',
      label: 'Rent',
      key: 'rent',
    },
  ];

  return (
    <>
      {' '}
      <header className="px-16 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">Phoenix</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-bold hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </header>{' '}
    </>
  );
};

export default Navbar;
