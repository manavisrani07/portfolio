import Section from "./Section";
import Reveal from "./Reveal";
import { articles, profile } from "@/lib/data";

export default function WritingSection() {
  return (
    <Section
      id="writing"
      kicker="04 · Writing"
      title="I write about AI, in plain English"
      subtitle="Voice agents, LLM security, structured outputs and whatever else I'm currently obsessed with. On Medium and Substack."
    >
      <div className="grid gap-3">
        {articles.slice(0, 5).map((a, i) => (
          <Reveal key={a.url} delay={Math.min(i * 40, 200)}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-white/[0.02] px-5 sm:px-6 py-4 transition-all hover:border-violet-300/30 hover:bg-violet-400/[0.05]"
            >
              <div className="flex min-w-0 items-baseline gap-4">
                <span className="hidden shrink-0 font-mono text-xs text-zinc-600 sm:block">
                  {a.date}
                </span>
                <p className="truncate text-[14.5px] font-medium text-zinc-300 transition-colors group-hover:text-violet-200">
                  {a.title}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {a.tags.slice(0, 2).map((t) => (
                  <span key={t} className="chip hidden md:inline-flex">
                    {t}
                  </span>
                ))}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-violet-300"
                >
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={160}>
        {articles.length > 5 && (
          <p className="mt-6 text-center font-mono text-xs text-zinc-500">
            + {articles.length - 5} more pieces where these came from
          </p>
        )}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={profile.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Follow on Medium →
          </a>
          <a
            href={profile.links.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Subscribe on Substack →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
