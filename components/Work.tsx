"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { career } from "@/lib/data";

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
          Career
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-16 max-w-md">
          Selected work &amp; achievements
        </h2>

        <div ref={ref} className="space-y-0">
          {career.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-foreground/8 hover:border-copper/30 transition-colors"
            >
              <div>
                <p className="text-sm text-foreground/40 font-mono">{item.period}</p>
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-medium text-foreground">{item.role}</h3>
                  <span className="text-sm text-foreground/40">·</span>
                  <span className="text-sm text-copper">{item.org}</span>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
