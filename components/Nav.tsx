"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const items = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Research", "#research"],
  ["Writing", "#writing"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#070709]/70 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-16">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          <span className="text-gradient">manav</span>
          <span className="text-zinc-500">.israni</span>
          <span className="text-sky-300 animate-blink">_</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="link-sweep text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="btn-ghost !px-4 !py-2 text-sm"
          >
            Hire me
          </a>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden text-zinc-300"
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-[#0a0a0f]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
