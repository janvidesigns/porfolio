import { manifesto } from "@/lib/content";

export function About() {
  return (
    <section className="border-y border-line bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-14">
        <p className="headline-editorial max-w-5xl text-ink">
          {manifesto}
        </p>
      </div>
    </section>
  );
}
