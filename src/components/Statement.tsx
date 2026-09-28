import { site } from "@/lib/content";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-1 inline-flex items-center rounded-full border border-line bg-white px-4 py-0.5 align-middle text-[0.72em] text-muted shadow-sm">
      {children}
    </span>
  );
}

export function Statement() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div className="arcs" aria-hidden />
      <p className="relative mx-auto max-w-4xl px-5 text-center text-[clamp(1.25rem,2.6vw,2.25rem)] font-light leading-[2.3] tracking-tight text-ink md:px-10">
        UI/UX designer in Mumbai crafting <Pill>Product</Pill>
        <Pill>Web</Pill> and <Pill>Mobile</Pill> experiences, from first sketch to{" "}
        <Pill>high-fidelity prototypes</Pill> and <Pill>design systems</Pill> that scale. Led UX for a
        booking app that drew <Pill>60k+</Pill> users&apos; interest and scored <Pill>50% NPS</Pill> in testing.
        Currently works as <Pill>UI/UX Designer</Pill> at Stew Digital Solutions.
        <span className="sr-only"> {site.tagline}</span>
      </p>
    </section>
  );
}
