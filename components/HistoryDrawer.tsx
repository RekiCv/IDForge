"use client";

import { useEffect } from "react";
import type { Identity } from "@/lib/types";
import { ArrowIcon, CloseIcon, HistoryIcon, TrashIcon } from "./icons";

type HistoryDrawerProps = {
  open: boolean;
  items: Identity[];
  onClose: () => void;
  onSelect: (identity: Identity) => void;
  onClear: () => void;
};

export function HistoryDrawer({
  open,
  items,
  onClose,
  onSelect,
  onClear,
}: HistoryDrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Historial de identidades">
      <button
        type="button"
        aria-label="Cerrar historial"
        onClick={onClose}
        className="animate-fade absolute inset-0 h-full w-full cursor-default bg-black/65 backdrop-blur-sm"
      />

      <aside className="animate-slide-in absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-[#0a0a12]/95 shadow-2xl">
        <header className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
          <div className="flex items-center gap-2">
            <HistoryIcon className="h-4 w-4 text-violet-300" />
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-200">
              Historial
            </h2>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-zinc-400">
              {items.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          {items.length === 0 ? (
            <p className="px-3 py-10 text-center text-sm text-zinc-500">
              Aún no has generado ninguna identidad.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(item)}
                    className="group flex w-full items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 text-left transition hover:border-white/10 hover:bg-white/[0.04]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border border-white/10 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-200">
                        {item.fullName}
                      </p>
                      <p className="truncate text-[11px] text-zinc-500">
                        {item.age} años · {item.city}
                      </p>
                    </div>
                    <ArrowIcon className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-white/[0.07] p-4">
            <button
              type="button"
              onClick={onClear}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-xs font-medium text-zinc-400 transition hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-200"
            >
              <TrashIcon className="h-3.5 w-3.5" />
              Vaciar historial
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}
