import type { Identity } from "@/lib/types";

type FactsPanelProps = {
  identity: Identity;
};

export function FactsPanel({ identity }: FactsPanelProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <article className="glass-soft rounded-2xl p-5">
        <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          Le gusta
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {identity.hobbies.map((hobby) => (
            <span
              key={hobby}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-300"
            >
              {hobby}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          <span className="text-zinc-400">Objeto fetiche:</span>{" "}
          {identity.favorite}.
        </p>
      </article>

      <article className="glass-soft rounded-2xl p-5">
        <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          Miedos y manías
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          Le dan pánico {identity.fear}.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
          Manía confesa: {identity.quirk}.
        </p>
      </article>

      <article className="glass-soft rounded-2xl p-5">
        <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          Lo que no cuenta
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          {identity.secret.charAt(0).toUpperCase() + identity.secret.slice(1)}.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">
          <span className="text-zinc-400">Ahorros:</span> {identity.savings}.
        </p>
      </article>
    </div>
  );
}
