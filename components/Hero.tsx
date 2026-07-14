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
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      <div className="grid md:grid-cols-[45fr_55fr] flex-1 items-stretch max-w-site mx-auto w-full">
        <div className="flex flex-col justify-center px-6 md:px-12 pt-28 pb-12 md:py-0 order-2 md:order-1 relative z-20">
          <div className="max-w-[34rem]">
            <motion.p
              {...fade(0.3)}
              className="text-xs uppercase tracking-[0.25em] text-foreground/35 font-medium mb-8"
            >
              Jesse Burcsik
              {greeting && (
                <>
                  :
                  <span className="normal-case tracking-normal ml-3 text-copper/60 not-italic">
                    {greeting}
                  </span>
                </>
              )}
            </motion.p>

            <motion.h1
              {...fade(0.45)}
              className="font-serif text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.02em] mb-10"
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
                href="#contact"
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
        </div>

        <div className="relative min-h-[60vh] md:min-h-screen order-1 md:order-2">
          <img
            src="/img/jesse.jpg"
            alt="Jesse Burcsik"
            className="absolute inset-0 w-full h-full object-cover object-[60%_top]"
          />
          {/* eased horizontal dissolve — cream canvas into photo */}
          <div
            className="absolute inset-y-0 left-0 w-[40%] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right,#f9f7f4 0%,#f9f7f4 8%,rgba(249,247,244,0.92) 22%,rgba(249,247,244,0.6) 45%,rgba(249,247,244,0.25) 70%,rgba(249,247,244,0) 100%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-[18%] pointer-events-none bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[22%] pointer-events-none bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.0, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-copper/40 via-foreground/10 to-transparent z-30"
      />
    </section>
  );
}
