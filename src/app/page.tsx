import { Experience } from "@/components/Experience";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { PageShell } from "@/components/PageShell";
import { Skills } from "@/components/Skills";
import { Statement } from "@/components/Statement";
import { site } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `${site.name} — UI/UX Product Designer`,
  description: site.tagline,
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Statement />
      <FeaturedWork />
      <Skills />
      <Experience title="Experience" />
      <HomeCta />
    </PageShell>
  );
}
