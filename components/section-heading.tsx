import { Reveal } from "./reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
        <span className="flex items-center gap-1.5">
          <span className="h-px w-6 bg-accent" />
          {index} / {eyebrow}
        </span>
      </div>
      <h2 className="heading-sans mt-4 max-w-3xl text-balance text-3xl font-medium text-fg sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
