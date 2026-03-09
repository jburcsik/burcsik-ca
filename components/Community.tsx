"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { civic } from "@/lib/data";

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="civic" className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16 grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
            Community
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
            Beyond the job description.
          </h2>
          <p className="text-foreground/50 text-sm leading-relaxed">
            Civic engagement isn&apos;t something I do to round out a profile.
            It&apos;s how I think — that the skills and perspective built
            professionally have an obligation to be put to broader use.
          </p>
        </motion.div>

        <div className="space-y-6">
          {civic.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex gap-6 items-start group"
            >
              <div className="pt-1.5 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-copper/40 group-hover:bg-copper transition-colors" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium text-sm">{item.org}</span>
                  <span className="text-foreground/30 text-xs">·</span>
                  <span className="text-copper text-xs">{item.role}</span>
                </div>
                <p className="text-foreground/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
