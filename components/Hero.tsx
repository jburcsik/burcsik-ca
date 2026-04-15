"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

function getTimeGreeting(): string {
  const h = new Date().getHours();
  if (h >= 0 && h < 5)  return "Still up?";
  if (h >= 5 && h < 8)  return "Early bird.";
  if (h >= 8 && h < 12) return "Good morning.";
  if (h >= 12 && h < 14) return "Midday grind.";
  if (h >= 14 && h < 18) return "Good afternoon.";
  if (h >= 18 && h < 21) return "Good evening.";
  return "Burning the midnight oil?";
}

export default function Hero() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    setGreeting(getTimeGreeting());
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end px-6 md:px-12 max-w-site mx-auto pt-32 pb-16 md:pt-36 md:pb-24">
      <div>
        <motion.p
          {...fade(0.3)}
          className="text-xs uppercase tracking-[0.25em] text-foreground/35 font-medium mb-8"
        >
          Jesse Burcsik
          {greeting && (
            <span className="normal-case tracking-normal ml-3 text-copper/60 not-italic">
              — {greeting}
            </span>
          )}
        </motion.p>

        <motion.h1
          {...fade(0.45)}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight max-w-4xl mb-10"
        >
          Technology.
          <br />
          <span className="text-foreground/30">People.</span>
          <br />
          Community.
        </motion.h1>

        <motion.div
          {...fade(0.65)}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="mailto:jesse@burcsik.ca"
            className="inline-flex items-center gap-3 bg-foreground text-[var(--background)] px-7 py-3.5 text-sm font-medium hover:bg-copper transition-colors duration-200 rounded-sm"
          >
            Get in touch
          </a>
          <a
            href="#about"
            className="text-sm text-foreground/40 hover:text-foreground transition-colors"
          >
            Learn more ↓
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.0, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-copper/40 via-foreground/10 to-transparent"
      />
    </section>
  );
}
