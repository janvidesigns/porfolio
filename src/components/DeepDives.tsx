import { caseStudies } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export function DeepDives() {
  return (
    <section>
      {caseStudies.map((study, index) => (
        <article
          key={study.slug}
          className={`py-6 md:py-8`}
        >
          <div className="mx-auto max-w-360 px-5 md:px-10 lg:px-14"><div className="rounded-[2rem] border border-line bg-white p-6 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <p className="font-display text-2xl text-accent md:text-3xl">
                  # {study.title.toLowerCase()}
                </p>
                <h2 className="headline-editorial mt-6 text-ink">
                  {study.headline}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted">
                  {study.subtitle} · {study.period}
                </p>
              </div>

              <div>
                <p className="text-pretty text-base leading-relaxed text-ink-soft md:text-lg">
                  {study.summary}
                </p>

                <div className="mt-8">
                  <p className="label-caps text-muted">Highlights</p>
                  <ul className="mt-4 space-y-3">
                    {study.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-pretty text-sm leading-relaxed text-ink-soft md:text-base"
                      >
                        <span className="shrink-0 text-accent" aria-hidden>
                          ●
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${study.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
                  >
                    Read the case study
                    <span aria-hidden>→</span>
                  </Link>
                  {study.href && (
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted transition-colors hover:text-accent"
                    >
                      Behance
                    </a>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {study.img && (
              <div className="h-full md:h-200 w-full">
                <Image
                  width={800}
                  height={800}
                  src={study.img ?? ""}
                  alt={study.title}
                  className="mt-12 w-full h-full rounded-3xl object-cover"
                />
              </div>
            )}
          </div></div>
        </article>
      ))}
    </section>
  );
}
