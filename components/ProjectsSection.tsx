import Section from "./Section";
import Reveal from "./Reveal";
import { projects, hiddenRepos, profile } from "@/lib/data";

export type Repo = {
  full_name: string;
  name: string;
  description: string | null;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
  html_url: string;
};

export default function ProjectsSection({ repos }: { repos: Repo[] }) {
  const featured = projects.filter((p) => p.featured);
  const featuredNames = new Set(featured.map((p) => p.repo.toLowerCase()));
  const stars = Object.fromEntries(
    repos.map((r) => [r.full_name.toLowerCase(), r.stargazers_count])
  );

  // Everything else on GitHub, auto-synced — no token needed (public API).
  const rest = repos
    .filter(
      (r) =>
        !r.fork &&
        !featuredNames.has(r.full_name.toLowerCase()) &&
        !hiddenRepos.includes(r.full_name)
    )
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <Section
      id="projects"
      kicker="02 · Projects"
      title="Things I've built"
      subtitle="Featured work up top; the rest of the grid syncs automatically with my GitHub, stars included."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.repo} delay={i * 60}>
            <a
              href={`https://github.com/${p.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-[16px] font-semibold text-zinc-100 group-hover:text-sky-200 transition-colors">
                  {p.name}
                </h3>
                <span className="flex items-center gap-1 font-mono text-xs text-zinc-500">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-amber-300/80"
                  >
                    <path d="M12 2l2.95 6.32 6.93.84-5.12 4.75 1.35 6.84L12 17.35l-6.11 3.4 1.35-6.84L2.12 9.16l6.93-.84L12 2z" />
                  </svg>
                  {stars[p.repo.toLowerCase()] ?? 0}
                </span>
              </div>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-zinc-400">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <Reveal delay={120}>
          <p className="mt-10 mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
            Live from GitHub · {rest.length} more repos
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((r) => (
              <a
                key={r.full_name}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-line bg-white/[0.02] px-4 py-3 transition-all hover:border-sky-300/30 hover:bg-sky-400/[0.05]"
              >
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-zinc-300 group-hover:text-sky-200">
                    {r.name}
                    {r.stargazers_count > 0 && (
                      <span className="ml-2 font-mono text-[11px] text-amber-300/80">
                        ★ {r.stargazers_count}
                      </span>
                    )}
                  </p>
                  <p className="truncate text-xs text-zinc-500">
                    {r.description ?? r.language ?? "Open source"}
                  </p>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-3 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:text-sky-300"
                >
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal delay={160}>
        <div className="mt-8 text-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Everything on GitHub →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
