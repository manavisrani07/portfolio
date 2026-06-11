import Section from "./Section";
import Reveal from "./Reveal";
import { education, beyond } from "@/lib/data";

export default function EducationSection() {
  return (
    <Section id="education" kicker="05 · Education" title="Education & beyond">
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 80}>
            <div className="card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[16px] font-semibold text-zinc-100">
                  {e.school}
                </h3>
                <span className="shrink-0 font-mono text-xs text-zinc-500">
                  {e.period}
                </span>
              </div>
              <p className="mt-1.5 text-[14px] text-sky-200/90">{e.degree}</p>
              <p className="mt-1 text-[13px] text-zinc-500">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="card mt-5 p-6 sm:p-7">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-200/90">
            Beyond the code
          </h3>
          <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-zinc-400">
            {beyond.blurb}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {beyond.interests.map((i) => (
              <span key={i} className="chip !border-emerald-300/20 !text-emerald-100/80">
                {i}
              </span>
            ))}
            {beyond.softSkills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
