import Link from "next/link";

export function HomeCta() {
  return (
    <section className="border-t border-line bg-paper py-14 md:py-20">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p className="max-w-md text-pretty text-base text-ink-soft md:text-lg">
          Explore case studies, experience, and ways to collaborate.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            View work
          </Link>
          <Link
            href="/about"
            className="inline-flex rounded-full border border-line px-6 py-3 text-sm font-normal text-ink transition-colors hover:border-accent hover:text-accent"
          >
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}
