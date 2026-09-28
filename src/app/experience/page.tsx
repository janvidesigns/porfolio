import { Experience } from "@/components/Experience";
import { PageIntro } from "@/components/PageIntro";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `Experience — ${site.name}`,
  description:
    "Work history: UI/UX roles at Stew Digital Solutions, Navyh Ventures, Sport X, Freelancers Academy, and Shoella.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageIntro
        label="Experience"
        title="Where I've designed and shipped."
        description="Roles across product, agency, and internships — flows, systems, and interfaces in agile teams."

      />
      <Experience />
    </PageShell>
  );
}
