import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Phoenix - Real Estate',
  description: 'Find your dream home with Phoenix Real Estate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
