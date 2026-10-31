import type { Identity } from "@/lib/types";
import { QuoteIcon } from "./icons";

type LorePanelProps = {
  identity: Identity;
};

export function LorePanel({ identity }: LorePanelProps) {
  const { lore } = identity;

  return (
    <section className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            Lore de vida · inventado
          </p>
          <h2 className="font-display mt-2 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            {lore.headline}
          </h2>
        </div>
        <QuoteIcon className="hidden h-9 w-9 shrink-0 text-white/10 sm:block" />
      </div>

      <div className="relative mt-7 grid gap-9 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          {lore.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-pretty text-[15px] leading-relaxed text-zinc-300/90"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            Línea de tiempo
          </h3>
          <ol className="relative mt-4 space-y-5 border-l border-white/10 pl-5">
            {lore.timeline.map((event, index) => (
              <li key={`${event.year}-${event.title}-${index}`} className="relative">
                <span className="absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300 ring-4 ring-[#0a0a12]" />
                <p className="font-mono text-[11px] tracking-wider text-violet-300/90">
                  {event.year}
                </p>
                <p className="mt-0.5 text-sm font-medium text-zinc-200">
                  {event.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                  {event.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
