import type { Identity } from "@/lib/types";
import { GraduationIcon, HeartIcon, MapPinIcon, SparklesIcon } from "./icons";

type PersonaPanelProps = {
  identity: Identity;
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-snug text-zinc-200">{value}</dd>
    </div>
  );
}

export function PersonaPanel({ identity }: PersonaPanelProps) {
  return (
    <section className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="ring-gradient shrink-0 rounded-[30px] p-[2px]">
          <div className="rounded-[28px] bg-[#0a0a11] p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={identity.avatar}
              alt={`Avatar generado de ${identity.fullName}`}
              width={112}
              height={112}
              className="h-24 w-24 rounded-[24px] object-cover sm:h-28 sm:w-28"
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300/80">
            Expediente #{identity.id.slice(0, 8).toUpperCase()}
          </p>
          <h2 className="font-display mt-1.5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-[2.1rem]">
            {identity.fullName}
          </h2>
          <p className="mt-1.5 text-sm text-zinc-400">
            {identity.age} años · {identity.gender} · {identity.zodiac}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-300">
              <MapPinIcon className="h-3 w-3 text-cyan-300" />
              {identity.city}, {identity.country}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-300">
              <SparklesIcon className="h-3 w-3 text-fuchsia-300" />
              {identity.occupation}
            </span>
          </div>
        </div>
      </div>

      <dl className="relative mt-7 grid grid-cols-1 gap-x-6 gap-y-5 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
        <Field label="Nacimiento" value={identity.birthDate} />
        <Field
          label="Estado civil"
          value={
            identity.partner
              ? `${identity.maritalStatus} · ${identity.partner}`
              : identity.maritalStatus
          }
        />
        <Field
          label="Hijos"
          value={
            identity.children === 0
              ? "sin hijos"
              : `${identity.children} ${identity.children === 1 ? "hijo" : "hijos"}`
          }
        />
        <Field label="Mascotas" value={identity.pets} />
        <div className="sm:col-span-2">
          <Field label="Idiomas" value={identity.languages.join(" · ")} />
        </div>
        <div className="flex gap-3 sm:col-span-2">
          <GraduationIcon className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500" />
          <div className="min-w-0">
            <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
              Formación
            </dt>
            <dd className="mt-1 text-sm leading-snug text-zinc-200">
              {identity.education}
            </dd>
          </div>
        </div>
      </dl>

      <div className="relative mt-6 border-t border-white/[0.07] pt-6">
        <p className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
          <HeartIcon className="h-3.5 w-3.5 text-rose-300" />
          Rasgos de personalidad
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {identity.traits.map((trait) => (
            <span
              key={trait}
              className="rounded-full border border-violet-300/15 bg-violet-400/[0.08] px-3 py-1 text-xs text-violet-100/90"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
