"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { civic } from "@/lib/data";

export default function Civic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="civic" className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
          Community
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-4 max-w-md">
          Civic engagement
        </h2>
        <p className="text-foreground/50 max-w-lg mb-16 leading-relaxed">
          Contributing beyond the job description has always been part of how I
          work. A few things I&apos;ve been part of.
        </p>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {civic.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="p-6 border border-foreground/10 rounded-sm hover:border-copper/30 transition-colors group"
            >
              <div className="w-8 h-0.5 bg-copper mb-6 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-medium text-foreground mb-1">{item.org}</h3>
              <p className="text-sm text-copper mb-3">{item.role}</p>
              <p className="text-sm text-foreground/55 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
