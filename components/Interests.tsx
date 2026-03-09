"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hobbies } from "@/lib/data";

const line1 = ["I", "work", "hard."];
const line2 = ["I", "play", "harder"];

function WinkHeading() {
  const [hovered, setHovered] = useState(false);
  const [wink, setWink] = useState(false);
  const winkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (hovered) {
      winkTimer.current = setTimeout(() => setWink(true), 550);
    } else {
      if (winkTimer.current) clearTimeout(winkTimer.current);
      setWink(false);
    }
    return () => { if (winkTimer.current) clearTimeout(winkTimer.current); };
  }, [hovered]);

  const allWords = [...line1, ...line2];

  return (
    <h2
      className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-5 cursor-default select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {line1.map((word, i) => (
        <span
          key={`l1-${i}`}
          className="inline-block mr-[0.25em] transition-all duration-200"
          style={{
            textDecorationLine: hovered ? "underline" : "none",
            textDecorationColor: "#b87333",
            textDecorationThickness: "1.5px",
            textUnderlineOffset: "4px",
            transitionDelay: hovered ? `${i * 80}ms` : "0ms",
          }}
        >
          {word}
        </span>
      ))}
      <br />
      {line2.map((word, i) => (
        <span
          key={`l2-${i}`}
          className="inline-block mr-[0.25em] transition-all duration-200"
          style={{
            textDecorationLine: hovered ? "underline" : "none",
            textDecorationColor: "#b87333",
            textDecorationThickness: "1.5px",
            textUnderlineOffset: "4px",
            transitionDelay: hovered ? `${(line1.length + i) * 80}ms` : "0ms",
          }}
        >
          {word}
        </span>
      ))}
      <span
        className="inline-block transition-all duration-150"
        style={{ transitionDelay: hovered ? `${allWords.length * 80}ms` : "0ms" }}
      >
        {wink ? "😉" : "."}
      </span>
    </h2>
  );
}

export default function Interests() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16 grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
            Outside work
          </p>
          <WinkHeading />
          <p className="text-foreground/50 text-sm leading-relaxed">
            Fully bought in on the whole balanced-life thing.
            The hobbies aren&apos;t for the résumé — they&apos;re what make
            the work worth doing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-foreground/8 border border-foreground/8 rounded-sm overflow-hidden">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              className="bg-[var(--background)] px-5 py-5 hover:bg-copper/5 transition-colors group cursor-default"
            >
              <div className="w-4 h-px bg-copper/30 mb-3 group-hover:w-6 group-hover:bg-copper transition-all duration-300" />
              <span className="text-sm text-foreground/65 group-hover:text-foreground transition-colors leading-snug block">
                {hobby.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
