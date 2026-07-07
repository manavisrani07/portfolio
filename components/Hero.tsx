import { profile, stats } from "@/lib/data";
import Socials from "./Socials";
import Greeting from "./Greeting";

const ticker = [
  "Voice Agents",
  "LangGraph",
  "RAG",
  "FastAPI",
  "TypeScript",
  "Multi-agent Systems",
  "Twilio",
  "PostgreSQL",
  "Hugging Face",
  "Docker",
  "AWS",
  "Next.js",
  "PyTorch",
  "Kubernetes",
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-5 sm:px-8 pt-32 sm:pt-44 pb-10">
      <div style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) both" }}>
        <Greeting />
      </div>

      <p
        className="kicker mt-6"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) .5s both" }}
      >
        Manav Israni <b>·</b> Software & AI Engineer <b>·</b> Melbourne{" "}
        <b>·</b> Open to work
      </p>

      <h1
        className="mt-5 text-[2.4rem] leading-[1.04] sm:text-6xl font-bold tracking-[-0.03em]"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) .7s both" }}
      >
        I build <span className="font-serif-accent text-gradient">AI systems</span>
        <br />
        that actually ship.
      </h1>

      <p
        className="mt-7 max-w-xl text-[15.5px] sm:text-lg leading-relaxed text-zinc-400"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) .85s both" }}
      >
        Voice agents that made real calls. Clinical tools real doctors used.
        Three published papers along the way. Currently doing a Master of Data
        Science at the University of Melbourne.
      </p>

      <div
        className="mt-9 flex flex-wrap items-center gap-3"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) 1s both" }}
      >
        <a href="#projects" className="btn-primary">
          See the work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="/resume.pdf" target="_blank" className="btn-ghost">
          Résumé
        </a>
        <a href={`mailto:${profile.email}`} className="btn-ghost hidden sm:inline-flex">
          {profile.email}
        </a>
      </div>

      <div
        className="mt-9"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) 1.1s both" }}
      >
        <Socials />
      </div>

      {/* running stack ticker */}
      <div
        className="marquee mt-16 border-y border-line py-3.5"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) 1.2s both" }}
        aria-hidden
      >
        <div className="marquee-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-11 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500"
            >
              {t} <span className="text-acc/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div
        className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4"
        style={{ animation: "fadeUp .7s cubic-bezier(.21,.6,.35,1) 1.35s both" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="border-l border-line pl-4">
            <div className="text-2xl sm:text-3xl font-bold text-zinc-100">
              {s.value}
            </div>
            <div className="mt-1 font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
