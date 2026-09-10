/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

function CompanyBadge({ company, src }: { company: string; src?: string }) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(src) && !imageError;

  return (
    <div className="size-9 md:size-11 flex-none flex items-center justify-center overflow-hidden rounded-full border ring-2 ring-border bg-muted text-sm font-semibold text-muted-foreground">
      {showImage ? (
        <img
          src={src}
          alt={company}
          className="size-full object-contain p-1.5"
          onError={() => setImageError(true)}
        />
      ) : (
        <span aria-hidden>{company.trim().charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}

export default function WorkSection() {
  return (
    <div className="grid gap-8">
      {DATA.work.map((work) => (
        <div
          key={`${work.company}-${work.start}`}
          className="flex items-start gap-x-3"
        >
          <CompanyBadge company={work.company} src={work.logoUrl} />
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold leading-snug flex items-center gap-2 flex-wrap">
                  {work.href ? (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      {work.company}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    work.company
                  )}
                  {work.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium leading-none text-muted-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="font-sans text-sm text-muted-foreground">
                  {work.title}
                </div>
              </div>
              <div className="text-xs tabular-nums text-muted-foreground sm:text-right flex-none">
                {work.start} – {work.end ?? DATA.sections.work.presentLabel}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
