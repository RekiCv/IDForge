import { RefreshIcon, SparklesIcon } from "./icons";

type HeroProps = {
  onGenerate: () => void;
  busy: boolean;
  hasIdentity: boolean;
};

export function Hero({ onGenerate, busy, hasIdentity }: HeroProps) {
  return (
    <section className="relative pb-10 pt-12 text-center sm:pb-14 sm:pt-20">
      <div className="animate-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        100% ficticio · 0% real
      </div>

      <h1 className="animate-rise font-display mt-6 text-balance text-[2.7rem] font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
        Una vida entera,
        <br />
        <span className="text-gradient">generada al azar.</span>
      </h1>

      <p className="animate-rise mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-zinc-400 [animation-delay:80ms] sm:text-base">
        Pulsa el botón y obtén un nombre, un teléfono, una tarjeta decorativa,
        un avatar procedural y una biografía inventada. Nada de esto existe.
      </p>

      <div className="animate-rise mt-8 flex flex-col items-center justify-center gap-3 [animation-delay:140ms] sm:flex-row">
        <button
          type="button"
          onClick={onGenerate}
          disabled={busy}
          className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#0b0714] shadow-[0_10px_40px_-12px_rgba(192,132,252,0.65)] transition duration-300 hover:shadow-[0_14px_50px_-10px_rgba(192,132,252,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-400 disabled:cursor-wait disabled:opacity-80"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          {busy ? (
            <RefreshIcon className="animate-spin-slow h-4 w-4" />
          ) : (
            <SparklesIcon className="h-4 w-4" />
          )}
          <span className="relative">
            {busy
              ? "Generando…"
              : hasIdentity
                ? "Generar otra identidad"
                : "Generar identidad"}
          </span>
        </button>

        <span className="text-xs text-zinc-500">
          Cada clic crea una persona distinta.
        </span>
      </div>
    </section>
  );
}
