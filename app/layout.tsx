import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

// Backdrop art (generated with Higgsfield). Purely decorative: if the URL
// ever dies, the CSS glow underneath takes over and nothing breaks.
const BACKDROP_ART =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Fd25j83K3H9QwfT7t0yPQYWF6Y/hf_20260707_121031_07aeeef4-6419-4670-b0c8-486cd6dedd25.png";

export const metadata: Metadata = {
  title: "Manav Israni · Software & AI Engineer",
  description:
    "Software engineer building AI systems that ship: voice agents, multi-agent pipelines and production LLM apps. Publications, projects and writing by Manav Israni.",
  openGraph: {
    title: "Manav Israni · Software & AI Engineer",
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
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="backdrop-glow" aria-hidden />
        {BACKDROP_ART && (
          <div
            className="backdrop-art"
            aria-hidden
            style={{ backgroundImage: `url(${BACKDROP_ART})` }}
          />
        )}
        <div className="grid-overlay" aria-hidden />
        <div className="stars" aria-hidden>
          {Array.from({ length: 22 }).map((_, i) => {
            const x = ((i * 367) % 100) + 0.5;
            const y = ((i * 211) % 110) - 5;
            const o = 0.14 + ((i * 53) % 26) / 100;
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
