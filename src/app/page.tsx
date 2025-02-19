import Hero from "../app/Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Properties from "./Components/Properties";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Properties />
      <Contact />
      <Footer />
    </>
  );
}
