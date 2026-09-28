import { PageShell } from "@/components/PageShell";
import { caseStudies, site } from "@/lib/content";
import { createPageMetadata, siteUrl } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case study" };

  return createPageMetadata({
    title: `${study.title} — Case Study — ${site.name}`,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    author: {
      "@type": "Person",
      name: site.name,
      url: siteUrl,
    },
    dateCreated: study.period,
    url: `${siteUrl}/work/${study.slug}`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-5 py-12 pt-24 md:px-8 md:py-20 md:pt-28">
        <Link
          href="/work"
          className="text-sm font-light text-ink-soft transition-colors hover:text-accent"
        >
          ← All work
        </Link>

        <p className="font-display mt-8 text-2xl text-accent">
          # {study.title.toLowerCase()}
        </p>
        <h1 className="headline-editorial mt-6 text-ink">{study.headline}</h1>
        <p className="mt-4 text-lg text-muted">
          {study.subtitle} · {study.role} · {study.period}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-line bg-bg">
          <p className="text-sm text-muted">Add case study visuals here</p>
        </div>

        <section className="mt-12">
          <p className="label-caps text-muted">Overview</p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
            {study.summary}
          </p>
        </section>

        <section className="mt-12">
          <p className="label-caps text-muted">Highlights</p>
          <ul className="mt-6 space-y-4">
            {study.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-pretty text-base leading-relaxed text-ink-soft"
              >
                <span className="text-accent" aria-hidden>
                  ●
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white"
          >
            All case studies
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-line px-6 py-3 text-sm font-normal text-ink hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
          {study.href && (
            <a
              href={study.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-line px-6 py-3 text-sm font-normal text-ink hover:border-accent hover:text-accent"
            >
              Behance
            </a>
          )}
        </div>
      </article>
    </PageShell>
  );
}
