import { Contact } from "@/components/Contact";
import { PageIntro } from "@/components/PageIntro";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: `Contact — ${site.name}`,
  description:
    "Get in touch for UI/UX roles, freelance projects, and collaborations. Based in Mumbai, India.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        label="Contact"
        title="Let's build something thoughtful."
        description="Open to UI/UX roles, freelance projects, and collaborations on product, web, and mobile."
      />
      <Contact />
    </PageShell>
  );
}
