import { About } from "@/components/About";
import { HeroAbout } from "@/components/HeroAbout";
import { PageIntro } from "@/components/PageIntro";
import { PageShell } from "@/components/PageShell";
import { Skills } from "@/components/Skills";
import { site } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `About — ${site.name}`,
  description:
    "UI/UX designer in Mumbai. Background in product, web, and mobile design, design systems, and agile collaboration.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro
        label="About"
        title="Designing clear, usable product experiences."
        description={site.tagline}
      />
      <HeroAbout />
      <About />
      <Skills />
    </PageShell>
  );
}
