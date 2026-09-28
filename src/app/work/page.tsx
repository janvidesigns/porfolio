import { DeepDives } from "@/components/DeepDives";
import { PageIntro } from "@/components/PageIntro";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `Work & Case Studies — ${site.name}`,
  description:
    "UI/UX case studies: POS systems, mobile booking apps, e-commerce, and design systems.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageShell>
      <PageIntro
        label="Work"
        title="Deep dives"
        description="Case studies across product, web, and mobile — process, decisions, and results."
      />
      <DeepDives />
    </PageShell>
  );
}
