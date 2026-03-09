"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { hobbies } from "@/lib/data";

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
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-5">
            I work hard.<br />I play harder.
          </h2>
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
