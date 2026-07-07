import Reveal from "./Reveal";

export default function Section({
  id,
  kicker,
  title,
  children,
  subtitle,
}: {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
      <Reveal>
        <p className="kicker section-rule mb-4">{kicker}</p>
        <h2 className="text-3xl sm:text-[2.6rem] font-bold tracking-[-0.02em]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            {subtitle}
          </p>
        )}
      </Reveal>
      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  );
}
