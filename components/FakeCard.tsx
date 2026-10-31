import type { FictionalCard } from "@/lib/types";
import { LockIcon, WifiIcon } from "./icons";

type FakeCardProps = {
  card: FictionalCard;
};

function Chip() {
  return (
    <svg viewBox="0 0 44 32" className="h-8 w-11" aria-hidden="true">
      <rect x="0.5" y="0.5" width="43" height="31" rx="5.5" fill="url(#chipGrad)" stroke="rgba(255,255,255,0.5)" />
      <path d="M0 11h13M31 11h13M0 21h13M31 21h13M13 0v32M31 0v32M13 16h18" stroke="rgba(60,40,10,0.55)" strokeWidth="1.2" fill="none" />
      <defs>
        <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f7e7b0" />
          <stop offset="45%" stopColor="#d9b45a" />
          <stop offset="100%" stopColor="#f4dfa0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FakeCard({ card }: FakeCardProps) {
  return (
    <div>
      <div
        className="card-sheen relative aspect-[1.62/1] overflow-hidden rounded-3xl p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/15 sm:p-6"
        style={{ backgroundImage: card.gradient }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full opacity-40 blur-2xl"
          style={{ backgroundColor: card.accent }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-lg font-semibold tracking-[0.2em] text-white">
                {card.brand}
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                {card.tier}
              </p>
            </div>
            <span className="rounded-full border border-white/25 bg-black/25 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              Ficticia
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Chip />
            <WifiIcon className="h-5 w-5 rotate-90 text-white/70" />
          </div>

          <div>
            <p className="font-mono text-[clamp(0.95rem,4.2vw,1.4rem)] font-medium tracking-[0.14em] text-white drop-shadow">
              {card.number}
            </p>

            <div className="mt-3 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/50">
                  Titular
                </p>
                <p className="truncate text-[11px] font-medium uppercase tracking-[0.1em] text-white/90">
                  {card.holder}
                </p>
              </div>
              <div className="flex shrink-0 gap-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.22em] text-white/50">
                    Vence
                  </p>
                  <p className="font-mono text-[11px] text-white/90">{card.expiry}</p>
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.22em] text-white/50">
                    CVV
                  </p>
                  <p className="font-mono text-[11px] text-white/90">{card.cvv}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] whitespace-nowrap font-display text-4xl font-bold uppercase tracking-[0.35em] text-white/[0.06] sm:text-5xl"
          aria-hidden="true"
        >
          No válida
        </span>
      </div>

      <p className="mt-3 flex items-start gap-2 px-1 text-[11px] leading-relaxed text-zinc-500">
        <LockIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-600" />
        Número, caducidad y CVV generados al azar. No es una tarjeta real y no
        sirve para ningún pago.
      </p>
    </div>
  );
}
