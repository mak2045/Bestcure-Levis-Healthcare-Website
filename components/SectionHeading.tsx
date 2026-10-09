interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`reveal max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${
          dark ? "text-lime-400" : "text-leaf-600"
        }`}
      >
        <span
          className={`h-px w-6 ${dark ? "bg-lime-400/60" : "bg-leaf-600/50"} ${
            centered ? "hidden sm:block" : ""
          }`}
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        className={`mt-3.5 font-display text-[1.75rem] font-semibold leading-[1.18] sm:text-4xl ${
          dark ? "text-white" : "text-forest-950"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${
            dark ? "text-cream-100/75" : "text-stone-warm"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
