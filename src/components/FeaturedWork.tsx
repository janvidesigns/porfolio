import { caseStudies } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export function FeaturedWork() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-light tracking-tight md:text-6xl">Selected work</h2>
          <Link href="/work" className="rounded-full border border-line bg-white px-4 py-2 text-sm font-normal text-ink transition-colors hover:border-accent hover:text-accent">
            All work
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(11,11,18,0.35)]"
            >
              {study.img ? (
                <Image
                  src={study.img}
                  alt={study.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-violet-200 via-sky-100 to-fuchsia-100 p-8 text-center text-3xl font-light tracking-tight text-ink">
                  {study.title}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-normal tracking-tight">{study.title}</h3>
                <p className="mt-1 text-muted">{study.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
