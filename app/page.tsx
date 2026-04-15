import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EasterEggs from "@/components/EasterEggs";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <EasterEggs />
      <Nav />
      <Hero />
      <Statement />
      <Footer />
    </main>
  );
}
