"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { hobbies } from "@/lib/data";

export default function Interests() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
          Outside work
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-16 max-w-md">
          What keeps me sharp
        </h2>

        <div ref={ref} className="flex flex-wrap gap-3">
          {hobbies.map((hobby, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="px-5 py-2.5 border border-foreground/12 text-foreground/65 text-sm rounded-full hover:border-copper/50 hover:text-foreground transition-colors cursor-default"
            >
              {hobby.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
