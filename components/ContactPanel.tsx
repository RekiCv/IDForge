"use client";

import { useState } from "react";
import type { Identity } from "@/lib/types";
import { CheckIcon, CopyIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

type ContactPanelProps = {
  identity: Identity;
  onCopy: (value: string, label: string) => void;
};

type ContactRow = {
  label: string;
  value: string;
  icon: React.ReactNode;
  mono?: boolean;
};

export function ContactPanel({ identity, onCopy }: ContactPanelProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const rows: ContactRow[] = [
    {
      label: "Teléfono",
      value: identity.phone,
      icon: <PhoneIcon className="h-4 w-4" />,
      mono: true,
    },
    {
      label: "Correo",
      value: identity.email,
      icon: <MailIcon className="h-4 w-4" />,
    },
    {
      label: "Dirección",
      value: `${identity.address}, ${identity.postalCode} ${identity.city}`,
      icon: <MapPinIcon className="h-4 w-4" />,
    },
  ];

  const copy = (value: string, label: string) => {
    onCopy(value, label);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section className="glass rounded-3xl p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-300">
          Contacto
        </h3>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-zinc-500">
          Datos inventados
        </span>
      </div>

      <ul className="mt-3 divide-y divide-white/[0.06]">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center gap-3 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400">
              {row.icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {row.label}
              </p>
              <p
                className={`truncate text-sm text-zinc-200 ${row.mono ? "font-mono" : ""}`}
              >
                {row.value}
              </p>
            </div>
            <button
              type="button"
              onClick={() => copy(row.value, row.label)}
              aria-label={`Copiar ${row.label.toLowerCase()}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
            >
              {copied === row.label ? (
                <CheckIcon className="h-3.5 w-3.5 text-emerald-300" />
              ) : (
                <CopyIcon className="h-3.5 w-3.5" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
