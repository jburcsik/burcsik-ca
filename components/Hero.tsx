"use client";

import { motion } from "framer-motion";
import { bio } from "@/lib/data";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-site mx-auto">
      <div className="pt-24 pb-16">
        <motion.p
          {...fade(0.1)}
          className="text-sm uppercase tracking-[0.2em] text-copper font-medium mb-6"
        >
          {bio.location}
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-8"
        >
          {bio.name.split(" ")[0]}
          <br />
          <span className="text-foreground/30">{bio.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          {...fade(0.35)}
          className="text-xl md:text-2xl text-foreground/60 font-light max-w-xl leading-relaxed mb-4"
        >
          {bio.tagline}
        </motion.p>

        <motion.p
          {...fade(0.45)}
          className="text-base text-foreground/50 max-w-lg leading-relaxed mb-12"
        >
          {bio.positioning}
        </motion.p>

        <motion.div {...fade(0.55)} className="flex items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-foreground text-[var(--background)] px-6 py-3 text-sm font-medium hover:bg-copper transition-colors duration-200 rounded-sm"
          >
            See my work
            <span className="text-lg leading-none">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
