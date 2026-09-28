import { site } from "@/lib/content";
import { NameMarquee } from "./NameMarquee";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-muted">
      <NameMarquee />
      <div className="mx-auto flex max-w-[90rem] flex-col items-start justify-between gap-4 px-5 py-8 md:flex-row md:items-center md:px-10 lg:px-14">
        <p className="text-sm">{site.footerNote}</p>
        <p className="text-sm">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
