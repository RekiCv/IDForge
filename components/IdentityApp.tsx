"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { generateIdentity } from "@/lib/generator";
import type { Identity } from "@/lib/types";
import { BackgroundFX } from "./BackgroundFX";
import { ContactPanel } from "./ContactPanel";
import { Disclaimer } from "./Disclaimer";
import { FactsPanel } from "./FactsPanel";
import { FakeCard } from "./FakeCard";
import { Hero } from "./Hero";
import { HistoryDrawer } from "./HistoryDrawer";
import { LorePanel } from "./LorePanel";
import { PersonaPanel } from "./PersonaPanel";
import { Toast } from "./Toast";
import { Toolbar } from "./Toolbar";

const HISTORY_KEY = "idforge.history.v1";
const LEGACY_HISTORY_KEY = "persona-lab.history.v1";
const HISTORY_LIMIT = 8;

const readHistory = (): Identity[] => {
  try {
    const raw =
      window.localStorage.getItem(HISTORY_KEY) ??
      window.localStorage.getItem(LEGACY_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Identity[]) : [];
  } catch {
    return [];
  }
};

const writeHistory = (items: Identity[]) => {
  try {
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
    window.localStorage.removeItem(LEGACY_HISTORY_KEY);
  } catch {
    // El almacenamiento puede estar lleno o deshabilitado.
  }
};

const downloadJson = (identity: Identity) => {
  const blob = new Blob([JSON.stringify(identity, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const name = identity.fullName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
  anchor.href = url;
  anchor.download = `persona-${name}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

export function IdentityApp() {
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [history, setHistory] = useState<Identity[]>([]);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const startedRef = useRef(false);
  const toastTimer = useRef<number | null>(null);
  const busyTimer = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const stored = readHistory();
    const first = stored[0] ?? generateIdentity();
    const nextHistory = stored.length > 0 ? stored : [first];

    setIdentity(first);
    setHistory(nextHistory);
    writeHistory(nextHistory);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      if (busyTimer.current) window.clearTimeout(busyTimer.current);
    };
  }, []);

  const generate = useCallback(() => {
    if (busy) return;
    setBusy(true);
    if (busyTimer.current) window.clearTimeout(busyTimer.current);
    busyTimer.current = window.setTimeout(() => {
      const next = generateIdentity();
      setIdentity(next);
      setHistory((previous) => {
        const nextHistory = [next, ...previous].slice(0, HISTORY_LIMIT);
        writeHistory(nextHistory);
        return nextHistory;
      });
      setBusy(false);
      showToast("Nueva identidad generada");
    }, 320);
  }, [busy, showToast]);

  const copyJson = useCallback(async () => {
    if (!identity) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(identity, null, 2));
      showToast("Identidad copiada como JSON");
    } catch {
      showToast("No se pudo copiar al portapapeles");
    }
  }, [identity, showToast]);

  const copyField = useCallback(
    async (value: string, label: string) => {
      try {
        await navigator.clipboard.writeText(value);
        showToast(`${label} copiado`);
      } catch {
        showToast("No se pudo copiar al portapapeles");
      }
    },
    [showToast],
  );

  const exportJson = useCallback(() => {
    if (!identity) return;
    downloadJson(identity);
    showToast("Identidad exportada");
  }, [identity, showToast]);

  const selectFromHistory = useCallback((item: Identity) => {
    setIdentity(item);
    setHistoryOpen(false);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    writeHistory([]);
    showToast("Historial vaciado");
  }, [showToast]);

  return (
    <div className="relative min-h-screen">
      <BackgroundFX />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 pt-6">
        <div className="flex items-center gap-2.5">
          <span className="ring-gradient flex h-9 w-9 items-center justify-center rounded-xl p-[1.5px]">
            <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0a0a11]">
              <span className="font-display text-[11px] font-bold tracking-tight text-white">
                ID
              </span>
            </span>
          </span>
          <span className="leading-tight">
            <span className="font-display block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-100">
              IDForge
            </span>
            <span className="block text-[10px] text-zinc-500">
              Identidades ficticias
            </span>
          </span>
        </div>

        <Toolbar
          hasIdentity={Boolean(identity)}
          historyCount={history.length}
          onCopy={copyJson}
          onExport={exportJson}
          onOpenHistory={() => setHistoryOpen(true)}
        />
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16">
        <Hero onGenerate={generate} busy={busy} hasIdentity={Boolean(identity)} />

        <p className="sr-only" aria-live="polite">
          {identity
            ? `Identidad generada: ${identity.fullName}, ${identity.age} años, ${identity.city}.`
            : "Generando identidad."}
        </p>

        {identity ? (
          <div key={identity.id} className="animate-rise space-y-5">
            <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
              <PersonaPanel identity={identity} />
              <div className="space-y-5">
                <FakeCard card={identity.card} />
                <ContactPanel identity={identity} onCopy={copyField} />
              </div>
            </div>

            <LorePanel identity={identity} />
            <FactsPanel identity={identity} />
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="glass h-[28rem] animate-pulse rounded-3xl" />
            <div className="space-y-5">
              <div className="glass aspect-[1.62/1] animate-pulse rounded-3xl" />
              <div className="glass h-48 animate-pulse rounded-3xl" />
            </div>
          </div>
        )}

        <Disclaimer />
      </main>

      <HistoryDrawer
        open={historyOpen}
        items={history}
        onClose={() => setHistoryOpen(false)}
        onSelect={selectFromHistory}
        onClear={clearHistory}
      />
      <Toast message={toast} />
    </div>
  );
}
