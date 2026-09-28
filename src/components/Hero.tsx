"use client";

import { site } from "@/lib/content";
import Link from "next/link";
import { useEffect, useState } from "react";

const WORDS = ["user centered", "research driven", "detail obsessed", "mobile first"];
const TOOLS = ["Figma", "InVision", "Claude", "ChatGPT", "Midjourney", "v0"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let n = words[0].length;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[i];
      n += deleting ? -1 : 1;
      setText(word.slice(0, n));
      let delay = deleting ? 45 : 90;
      if (!deleting && n === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && n === 0) {
        deleting = false;
        i = (i + 1) % words.length;
        delay = 350;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export function Hero() {
  const text = useTypewriter(WORDS);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper">
      <div className="glow -left-24 top-24 size-[26rem] bg-violet-400/35" aria-hidden />
      <div className="glow left-1/3 top-10 size-[22rem] bg-sky-300/35" aria-hidden />
      <div className="glow -right-24 top-40 size-[24rem] bg-fuchsia-300/30" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[80rem] flex-1 flex-col items-center justify-center px-5 pb-10 pt-32 text-center md:px-10">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/work"
            className="hero-text-reveal hero-text-reveal--1 rounded-full bg-ink px-5 py-2.5 text-sm font-normal text-white shadow-[0_0_24px_rgba(106,76,255,0.45)] transition-transform hover:-translate-y-0.5"
          >
            View work
          </Link>
          <a
            href={site.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-text-reveal hero-text-reveal--1 rounded-full border border-line bg-white/70 px-5 py-2.5 text-sm font-normal text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Behance
          </a>
        </div>

        <div className="relative mt-10">
          <div
            className="flex size-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-violet-500 to-sky-400 text-2xl font-normal text-white shadow-lg"
            aria-hidden
          >
            JB
          </div>
          <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs font-normal text-ink shadow-md">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
            <span className="hero-text-reveal hero-text-reveal--2">{site.location}</span>
          </span>
        </div>

        <h1 className="hero-text-reveal hero-text-reveal--2 font-hero mt-12 min-h-[1.1em] text-[clamp(2.5rem,8vw,6.5rem)] font-normal leading-none text-ink">
          <span className="sr-only">I&apos;m a user centered UI/UX product designer</span>
          <span aria-hidden>
            I&apos;m a <span className="text-accent">{text}</span>
            <span className="cursor" />
          </span>
        </h1>

        <p className="hero-text-reveal hero-text-reveal--3 hero-role-shimmer mt-4 text-[clamp(1.75rem,4.5vw,3.5rem)] font-normal leading-tight tracking-tight">
          UI/UX Product Designer
        </p>

        <p className="hero-text-reveal hero-text-reveal--4 mt-6 max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
          {site.subheadline}
        </p>
      </div>

      <ul className="relative z-10 mx-auto mb-10 flex max-w-[80rem] flex-wrap justify-center gap-3 px-5 md:gap-4" aria-label="Tools">
        {TOOLS.map((tool, index) => (
          <li
            key={tool}
            className="hero-text-reveal flex h-16 min-w-16 items-center justify-center rounded-2xl border border-line bg-white px-4 text-sm font-normal text-ink-soft shadow-sm md:h-20 md:min-w-20"
            style={{ animationDelay: `${500 + index * 80}ms` }}
          >
            {tool}
          </li>
        ))}
      </ul>
    </section>
  );
}
