"use client";

import { CopyIcon, DownloadIcon, HistoryIcon } from "./icons";

type ToolbarProps = {
  hasIdentity: boolean;
  historyCount: number;
  onCopy: () => void;
  onExport: () => void;
  onOpenHistory: () => void;
};

const baseButton =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-not-allowed disabled:opacity-40";

export function Toolbar({
  hasIdentity,
  historyCount,
  onCopy,
  onExport,
  onOpenHistory,
}: ToolbarProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onCopy}
        disabled={!hasIdentity}
        className={baseButton}
        title="Copiar la identidad como JSON"
      >
        <CopyIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Copiar JSON</span>
      </button>
      <button
        type="button"
        onClick={onExport}
        disabled={!hasIdentity}
        className={baseButton}
        title="Descargar la identidad como JSON"
      >
        <DownloadIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Exportar</span>
      </button>
      <button
        type="button"
        onClick={onOpenHistory}
        className={baseButton}
        title="Ver historial"
      >
        <HistoryIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Historial</span>
        {historyCount > 0 && (
          <span className="rounded-full bg-violet-400/20 px-1.5 py-0.5 text-[9px] font-semibold text-violet-200">
            {historyCount}
          </span>
        )}
      </button>
    </div>
  );
}
