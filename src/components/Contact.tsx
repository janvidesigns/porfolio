import { contactLinks, site } from "@/lib/content";

export function Contact() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-14">
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            {site.email}
          </a>
          <a
            href={site.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-line bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Behance portfolio
          </a>
        </div>

        <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <div key={link.label}>
              <dt className="label-caps text-muted">{link.label}</dt>
              <dd className="mt-2 text-sm text-ink">
                {link.href ? (
                  <a
                    href={link.href}
                    className="transition-colors hover:text-accent"
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.value}
                  </a>
                ) : (
                  link.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
