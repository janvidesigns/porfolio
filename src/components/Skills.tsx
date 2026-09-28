import { certificates, education, skillGroups } from "@/lib/content";

export function Skills() {
  const chips = skillGroups.flatMap((g) => g.chips);
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10">
        <h2 className="font-display text-4xl font-light tracking-tight md:text-6xl">Skills</h2>
        <ul className="mt-10 flex flex-wrap gap-3">
          {chips.map((chip) => (
            <li
              key={chip.label}
              className="rounded-xl border border-line bg-white px-4 py-2.5 text-base font-normal text-ink shadow-sm"
            >
              {chip.label}
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-light tracking-tight">Education</h3>
            {education.map((item) => (
              <div key={item.degree} className="mt-4">
                <p className="font-normal text-ink">{item.degree}</p>
                <p className="text-muted">{item.org}</p>
                <p className="text-sm text-accent">{item.year}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-light tracking-tight">Certificates</h3>
            <ul className="mt-4 space-y-3">
              {certificates.map((cert) => (
                <li key={cert.num}>
                  <p className="font-normal text-ink">{cert.title}</p>
                  <p className="text-sm text-muted">{cert.source}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
