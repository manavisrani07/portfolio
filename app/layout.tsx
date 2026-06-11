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
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
