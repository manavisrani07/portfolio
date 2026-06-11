"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import Socials from "./Socials";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("sent");
        form.reset();
      } else if (json.fallback) {
        // No email service configured — open the visitor's mail client instead.
        const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
        const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      kicker="06 · Contact"
      title="Let's build something"
      subtitle="Hiring, collaborating, or just want to talk agents and LLMs? My inbox is open."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full p-7">
            <p className="text-[15px] leading-relaxed text-zinc-400">
              Email is the fastest way to reach me. I usually reply within a
              day. You can also find me on any of these:
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-sweep mt-6 inline-block text-xl font-semibold text-sky-200"
            >
              {profile.email}
            </a>
            <p className="mt-2 font-mono text-xs text-zinc-600">
              {profile.location}
            </p>
            <div className="mt-7">
              <Socials />
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <form onSubmit={onSubmit} className="card space-y-4 p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-sky-300/50"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-sky-300/50"
              />
            </div>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-sky-300/50"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                ? "Sent. Talk soon ✓"
                : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-center text-xs text-rose-300">
                That didn&apos;t send. Email me directly instead.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
