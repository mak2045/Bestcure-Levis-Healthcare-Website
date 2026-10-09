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
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          dark ? "text-lime-400" : "text-leaf-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-forest-950"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-base leading-7 ${dark ? "text-cream-100/75" : "text-stone-warm"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
