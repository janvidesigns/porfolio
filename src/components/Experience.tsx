import { jobs } from "@/lib/content";

function highlightMetrics(text: string) {
  return text.split(/(\d+[kK]?\+?%?)/g).map((part, i) =>
    /^\d+[kK]?\+?%?$/.test(part) ? (
      <strong key={i} className="font-medium text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function Experience({ title }: { title?: string }) {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10">
        {title && <h2 className="font-display text-4xl font-light tracking-tight md:text-6xl">{title}</h2>}
        <div className={`border-t border-line ${title ? "mt-10" : ""}`}>
          {jobs.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_auto] md:gap-12"
            >
              <div>
                <h3 className="text-2xl font-light tracking-tight md:text-3xl">{job.role}</h3>
                <ul className="mt-3 max-w-2xl space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-pretty text-muted">
                      {highlightMetrics(b)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <p className="text-lg font-normal text-ink">
                  {job.company}
                  {job.context && <span className="text-muted"> / {job.context}</span>}
                </p>
                <p className="mt-1 text-muted">{job.period}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
