import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Civic from "@/components/Civic";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Civic />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}
