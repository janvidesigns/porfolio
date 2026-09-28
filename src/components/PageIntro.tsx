type PageIntroProps = {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function PageIntro({
  label,
  title,
  description,
  dark = false,
}: PageIntroProps) {
  return (
    <header
      className={`border-b border-line px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-14 ${
        dark ? "bg-paper text-ink" : "bg-paper text-ink"
      }`}
    >
      <div className="mx-auto max-w-[90rem]">
        {label && (
          <p
            className={`label-caps text-accent`}
          >
            {label}
          </p>
        )}
        <h1
          className={`font-display mt-4 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02] tracking-tight ${
            "text-ink"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${
              "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
