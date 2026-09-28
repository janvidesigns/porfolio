"use client";

import { nav, site } from "@/lib/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href);
  const links = nav.filter((n) => n.href !== "/contact");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" className="text-xl font-light tracking-tight text-ink md:text-2xl">
          {site.shortName}
          <span className="text-muted">Bahira</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-normal transition-colors hover:text-accent ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-normal text-ink shadow-sm transition-colors hover:border-accent hover:text-accent"
          >
            Contact me
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-9 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
            {open ? (
              <path d="M4 1l12 12M16 1L4 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            ) : (
              <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.25" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 py-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-3xl font-light ${isActive(item.href) ? "text-accent" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
