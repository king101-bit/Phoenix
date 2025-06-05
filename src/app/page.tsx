import Hero from '@/components/Hero';
import Properties from '@/components/ui/Properties';
import Choose from '@/components/ui/Choose';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Properties />
        <Choose />
        <Footer />
      </div>
    </>
  );
}
