"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { bio } from "@/lib/data";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  // Honeypot — bots fill this in, humans don't
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // silent bot rejection
    if (!turnstileToken) return;
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, turnstileToken }),
    });

    if (res.ok) {
      setStatus("sent");
    } else {
      setStatus("idle");
      alert("Something went wrong. Please try emailing directly.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-6 md:px-12 max-w-site mx-auto">
      <div className="border-t border-foreground/10 pt-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
              Contact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
              Let&apos;s talk.
            </h2>
            <p className="text-foreground/55 leading-relaxed mb-8">
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
          </div>

          <div>
            {status === "sent" ? (
              <div className="h-full flex flex-col justify-center">
                <div className="w-8 h-0.5 bg-copper mb-4" />
                <p className="font-serif text-2xl text-foreground mb-2">Message sent.</p>
                <p className="text-foreground/50 text-sm">I&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from humans, bots fill it in */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label className="text-xs uppercase tracking-widest text-foreground/40 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-foreground/15 rounded-sm px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-copper transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-foreground/40 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-foreground/15 rounded-sm px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-copper transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-foreground/40 block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-foreground/15 rounded-sm px-4 py-3 text-sm text-foreground placeholder-foreground/30 focus:outline-none focus:border-copper transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={setTurnstileToken}
                  onError={() => setTurnstileToken(null)}
                  onExpire={() => setTurnstileToken(null)}
                />
                <button
                  type="submit"
                  disabled={status === "sending" || !turnstileToken}
                  className="w-full bg-foreground text-[var(--background)] py-3 text-sm font-medium hover:bg-copper transition-colors duration-200 rounded-sm disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
