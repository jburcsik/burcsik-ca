"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { bio } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-16 md:py-20 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-foreground/55 leading-relaxed mb-8 max-w-md">
            Whether you&apos;re exploring a collaboration, have a question, or
            just want to connect — I&apos;m always open to a good conversation.
          </p>
          <div className="space-y-3">
            <a
              href={`mailto:${bio.email}`}
              className="flex items-center gap-3 text-sm text-foreground/60 hover:text-copper transition-colors group"
            >
              <span className="w-4 h-px bg-foreground/30 group-hover:bg-copper group-hover:w-6 transition-all" />
              {bio.email}
            </a>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-foreground/60 hover:text-copper transition-colors group"
            >
              <span className="w-4 h-px bg-foreground/30 group-hover:bg-copper group-hover:w-6 transition-all" />
              LinkedIn
            </a>
            <a
              href={bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-foreground/60 hover:text-copper transition-colors group"
            >
              <span className="w-4 h-px bg-foreground/30 group-hover:bg-copper group-hover:w-6 transition-all" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
