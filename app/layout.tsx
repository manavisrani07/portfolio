import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Manav Israni · AI Software Engineer",
  description:
    "AI Software Engineer building voice agents, multi-agent systems and production LLM apps. Publications, projects and writing by Manav Israni.",
  openGraph: {
    title: "Manav Israni · AI Software Engineer",
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="aurora" aria-hidden />
        <div className="grid-overlay" aria-hidden />
        <div className="stars" aria-hidden>
          {Array.from({ length: 28 }).map((_, i) => {
            // deterministic pseudo-random spread, stable across renders
            const x = ((i * 367) % 100) + 0.5;
            const y = ((i * 211) % 110) - 5;
            const o = 0.18 + ((i * 53) % 30) / 100;
            const tw = 3.5 + ((i * 97) % 50) / 10;
            const d = ((i * 131) % 60) / 10;
            const size = i % 5 === 0 ? 2.5 : i % 2 === 0 ? 2 : 1.5;
            return (
              <i
                key={i}
                style={
                  {
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    "--o": o,
                    "--tw": `${tw}s`,
                    "--d": `${d}s`,
                  } as React.CSSProperties
                }
              />
            );
          })}
        </div>
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
