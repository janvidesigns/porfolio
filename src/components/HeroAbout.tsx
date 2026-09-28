import { aboutParagraphs } from "@/lib/content";

export function HeroAbout() {
  return (
    <section className="bg-paper py-14 text-ink md:py-20">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-14">
        <div className="grid max-w-3xl gap-5 md:gap-6">
          {aboutParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-pretty text-base leading-relaxed text-ink-soft md:text-[1.05rem] md:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
