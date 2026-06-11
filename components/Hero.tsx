import { profile, stats } from "@/lib/data";
import Socials from "./Socials";
import Portrait from "./Portrait";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 sm:pt-40 pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="kicker mb-5 animate-fade-up">
            Melbourne, Australia · Open to opportunities
          </p>
          <h1
            className="animate-fade-up text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight"
            style={{ animationDelay: "80ms" }}
          >
            Manav Israni —{" "}
            <span className="text-gradient">AI Software Engineer</span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
            style={{ animationDelay: "160ms" }}
          >
            {profile.tagline} Voice agents in production, multi-agent systems
            for healthcare, and three peer-reviewed papers along the way.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a href="#projects" className="btn-primary">
              View projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
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
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              {profile.email}
            </a>
          </div>

          <div
            className="animate-fade-up mt-8"
            style={{ animationDelay: "320ms" }}
          >
            <Socials />
          </div>
        </div>

        <div
          className="animate-fade-up flex justify-center lg:justify-end"
          style={{ animationDelay: "200ms" }}
        >
          <Portrait />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="card animate-fade-up px-5 py-6 text-center"
            style={{ animationDelay: `${380 + i * 70}ms` }}
          >
            <div className="text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
