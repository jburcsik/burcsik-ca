"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    label: "Builder",
    body: "I make things — software, teams, organizations. The medium changes; the drive doesn't. I'm most energized when I'm turning an idea into something real that other people can use.",
  },
  {
    label: "Connector",
    body: "I've spent my career at the intersection of technical complexity and human reality. I translate between worlds: between engineers and executives, between what's possible and what's needed.",
  },
  {
    label: "Citizen",
    body: "I believe the places we live deserve the same quality of thought we bring to our work. I show up for my community — not as a brand exercise, but because it matters.",
  },
];

export default function Statement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground/80 leading-[1.45] max-w-3xl mb-20"
        >
          I work at the edge where technology stops being interesting on its own
          — where it has to earn its keep by actually changing how people live
          and work.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-copper font-mono text-xs">
                  0{i + 1}
                </span>
                <span className="font-serif text-xl font-medium">{p.label}</span>
              </div>
              <p className="text-foreground/55 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
