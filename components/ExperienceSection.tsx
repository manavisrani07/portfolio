import Section from "./Section";
import Reveal from "./Reveal";
import { experience, programs, skills } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      kicker="01 · Experience"
      title="Where I've shipped AI"
      subtitle="Voice agents that dialled real customers, and clinical tools that real doctors used."
    >
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="timeline space-y-8 pl-9">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.period} delay={i * 60}>
              <div className="relative">
                <span className="timeline-dot -left-9" />
                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {job.role}{" "}
                      <span className="text-zinc-500 font-normal">·</span>{" "}
                      <span className="text-sky-200">{job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-zinc-500">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-zinc-600">
                    {job.location}
                    {job.type ? ` · ${job.type}` : ""}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-[14.5px] leading-relaxed text-zinc-400"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-sky-300/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {job.tech && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="space-y-8">
          <Reveal delay={100}>
            <div className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sky-200">
                Toolbox
              </h3>
              <div className="mt-5 space-y-5">
                {Object.entries(skills).map(([group, list]) => (
                  <div key={group}>
                    <p className="mb-2 text-[13px] font-semibold text-zinc-300">
                      {group}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {list.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-amber-200/90">
                Highlights
              </h3>
              <ul className="mt-5 space-y-4">
                {programs.map((p) => (
                  <li key={p.name}>
                    <p className="text-[13.5px] font-semibold text-zinc-200">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-zinc-500">
                      {p.detail}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] text-zinc-600">
                      {p.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
