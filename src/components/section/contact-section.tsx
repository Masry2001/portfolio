import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  const email = DATA.contact.email;
  const whatsapp = DATA.contact.social.WhatsApp.url;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
          {DATA.sections.contact.label}
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
        </p>
        <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-10 px-5 transition-opacity hover:opacity-90"
          >
            <Icons.whatsapp className="size-4" />
            WhatsApp
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background text-sm font-medium h-10 px-5 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Icons.email className="size-4" />
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
