"use client";

import { useEffect, useState } from "react";

const FULL = "Hi, it's Manav.";
const NAME_START = FULL.indexOf("Manav");

export default function Greeting() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Respect reduced-motion: show instantly.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(FULL.length);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= FULL.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 1600);
      }
    }, 72);
    return () => clearInterval(id);
  }, []);

  const plain = FULL.slice(0, Math.min(n, NAME_START));
  const name = n > NAME_START ? FULL.slice(NAME_START, n) : "";

  return (
    <p className="text-4xl sm:text-6xl font-serif-accent tracking-tight">
      <span className="text-zinc-200">{plain}</span>
      <span className="text-gradient">{name}</span>
      <span
        className={`ml-1 inline-block h-[0.9em] w-[2.5px] translate-y-[0.12em] bg-acc align-baseline ${
          done ? "opacity-0" : "animate-blink"
        }`}
        style={{ transition: "opacity .5s" }}
      />
    </p>
  );
}
