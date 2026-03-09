"use client";

import { useEffect, useState } from "react";
import { bio } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Community", href: "#civic" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      setNameVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-sm border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-serif text-lg font-medium tracking-tight hover:text-copper transition-all duration-300 ${
            nameVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          {bio.name.split(" ")[0]}
          <span className="text-copper">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 border border-copper text-copper hover:bg-copper hover:text-[var(--background)] transition-all duration-200 rounded-sm"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
