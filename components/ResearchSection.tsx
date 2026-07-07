import Section from "./Section";
import Reveal from "./Reveal";
import { publications, profile } from "@/lib/data";

export default function ResearchSection() {
  return (
    <Section
      id="research"
      kicker="03 · Research"
      title="Peer-reviewed publications"
      subtitle="Three first-author papers in 2025, published with IEEE and Springer. Computer vision, multi-agent systems and medical AI."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {publications.map((pub, i) => (
          <Reveal key={pub.doi} delay={i * 70}>
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-6"
            >
              {pub.badge && (
                <span className="mb-4 inline-flex w-fit rounded-full border border-acc/25 bg-acc/10 px-3 py-1 font-mono text-[11px] text-acc">
                  {pub.badge}
                </span>
              )}
              <h3 className="text-[15px] font-semibold leading-snug text-zinc-100 group-hover:text-acc transition-colors">
                {pub.title}
              </h3>
              <p className="mt-2 font-mono text-[11px] text-zinc-500">
                {pub.authors}
              </p>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-zinc-400">
                {pub.summary}
              </p>
              <p className="mt-4 flex items-center justify-between font-mono text-xs text-zinc-500">
                {pub.venue}
                <span className="text-acc/80 group-hover:translate-x-0.5 transition-transform">
                  DOI ↗
                </span>
              </p>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={140}>
        <div className="mt-8 text-center">
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Google Scholar profile →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
