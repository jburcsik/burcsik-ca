import Nav from "@/components/Nav";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata = {
  title: "Résumé — Jesse Burcsik",
  robots: { index: false, follow: false },
};

export default function Resume() {
  return (
    <main>
      <Nav />
      <div className="pt-32 pb-8 px-6 md:px-12 max-w-site mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-3">
          Résumé
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          Jesse Burcsik
        </h1>
      </div>
      <About />
      <Work />
      <Footer />
    </main>
  );
}
