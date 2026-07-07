import { profile } from "@/lib/data";

const icons: Record<string, { label: string; path: string }> = {
  github: {
    label: "GitHub",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z",
  },
  linkedin: {
    label: "LinkedIn",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  medium: {
    label: "Medium",
    path: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
  },
  substack: {
    label: "Substack",
    path: "M22.54 8.36H1.46V5.41h21.08v2.95zM1.46 10.81V24L12 18.11 22.54 24V10.81H1.46zM22.54 0H1.46v2.95h21.08V0z",
  },
  scholar: {
    label: "Google Scholar",
    path: "M5.24 9.05 12 3.5l6.76 5.55a6.5 6.5 0 1 0-13.52 0zM12 3.5 0 13.36h4.16A7.84 7.84 0 0 0 12 21.2a7.84 7.84 0 0 0 7.84-7.84H24L12 3.5zm0 14.95a5.1 5.1 0 1 1 0-10.2 5.1 5.1 0 0 1 0 10.2z",
  },
  leetcode: {
    label: "LeetCode",
    path: "M13.48 0a1.37 1.37 0 0 0-.96.44L5.46 7.96l-3.9 4.18a1.85 1.85 0 0 0 0 2.53l7.3 7.78a5.27 5.27 0 0 0 7.65.1l3.86-3.86a1.37 1.37 0 1 0-1.94-1.94l-3.86 3.86a2.53 2.53 0 0 1-3.7-.05l-6.1-6.5a.62.62 0 0 1 0-.85l3.9-4.17 6.99-7.45A1.37 1.37 0 0 0 13.48 0zm4.31 13.49H9.55a1.37 1.37 0 1 0 0 2.74h8.24a1.37 1.37 0 1 0 0-2.74z",
  },
};

export default function Socials({ size = 18 }: { size?: number }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {Object.entries(profile.links).map(([key, url]) => {
        const ic = icons[key];
        if (!ic) return null;
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={ic.label}
            aria-label={ic.label}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-acc/40 hover:text-acc hover:bg-acc/10"
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
              <path d={ic.path} />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
