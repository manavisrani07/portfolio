import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection, { Repo } from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import WritingSection from "@/components/WritingSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { profile } from "@/lib/data";

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/manavisrani07/repos?per_page=100",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return (await res.json()) as Repo[];
  } catch {
    return [];
  }
}

export default async function Home() {
  const repos = await getRepos();

  return (
    <main>
      <Nav />
      <Hero />
      <ExperienceSection />
      <ProjectsSection repos={repos} />
      <ResearchSection />
      <WritingSection />
      <EducationSection />
      <ContactSection />
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-zinc-600">
            © {new Date().getFullYear()} Manav Israni · Built with Next.js,
            deployed on Vercel
          </p>
          <div className="flex gap-5 font-mono text-xs">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-sky-200"
            >
              github
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-sky-200"
            >
              linkedin
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-zinc-500 transition-colors hover:text-sky-200"
            >
              email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
