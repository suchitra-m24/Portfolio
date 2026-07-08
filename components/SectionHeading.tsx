import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
      <div
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-brand-indigo ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="w-6 h-px bg-brand-indigo/50" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
