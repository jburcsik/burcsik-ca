"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-site mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* About text */}
        <Section>
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
            Built on curiosity.<br />Driven by impact.
          </h2>
          <div className="space-y-4 text-foreground/65 leading-relaxed">
            <p>
              I&apos;ve spent my career bridging the gap between technical
              complexity and human outcomes — building systems that scale,
              teams that thrive, and communities that grow stronger.
            </p>
            <p>
              My work spans engineering, product, and strategy, but the common
              thread is always people: understanding what they need, designing
              for their reality, and earning their trust.
            </p>
            <p>
              Outside of work, I&apos;m as likely to be found contributing to
              a community board as I am debugging a pipeline or planning my
              next trail run.
            </p>
          </div>
          <div className="mt-8 pl-4 border-l-2 border-copper">
            <p className="text-foreground/50 italic text-sm leading-relaxed">
              &ldquo;The best technology disappears into the background and
              lets people do what they actually came to do.&rdquo;
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section>
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
            Expertise
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-widest mb-4">
                Technical
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded-sm text-foreground/70 hover:border-copper/40 hover:text-foreground transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/40 uppercase tracking-widest mb-4">
                Leadership &amp; Strategy
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.leadership.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded-sm text-foreground/70 hover:border-copper/40 hover:text-foreground transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
