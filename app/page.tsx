import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EasterEggs from "@/components/EasterEggs";
import Statement from "@/components/Statement";
import Community from "@/components/Community";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <EasterEggs />
      <Nav />
      <Hero />
      <Statement />
      <Community />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}
