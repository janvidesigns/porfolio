import { nameMeaning } from "@/lib/content";

const LABELS = [nameMeaning.script, nameMeaning.word] as const;
const PAIR_COUNT = 2;

export function NameMarquee() {
  const items = Array.from({ length: PAIR_COUNT * 2 }, (_, i) => {
    const label = LABELS[i % 2];
    return (
      <span
        key={`${label}-${i}`}
        className="marquee-item flex shrink-0 items-center gap-10 md:gap-16"
      >
        <span
          className="font-display text-[140px] font-light leading-none tracking-tight text-ink"
          
        >
          {label}
        </span>
        <span
          className="size-2 shrink-0 rounded-full bg-accent md:size-4.5"
          aria-hidden
        />
      </span>
    );
  });

  return (
    <div
      className="relative flex h-[300px] items-center overflow-hidden border-b border-line"
      aria-label="जानवी — Janvi"
    >
      <div className="marquee-track flex w-max items-center">
        <div className="marquee-group flex">{items}</div>
        <div className="marquee-group flex" aria-hidden>
          {items}
        </div>
      </div>
    </div>
  );
}
