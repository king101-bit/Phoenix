import Hero from "../app/Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Properties from "./Components/Properties";
import Choose from "./Components/Choose";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Choose />
      <Properties />
      <Contact />
    </>
  );
}
