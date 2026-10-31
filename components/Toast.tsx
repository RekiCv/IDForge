import { CheckIcon } from "./icons";

type ToastProps = {
  message: string | null;
};

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      <div className="animate-rise flex items-center gap-2 rounded-full border border-emerald-300/20 bg-[#0b1512]/95 px-4 py-2.5 text-xs font-medium text-emerald-100 shadow-2xl backdrop-blur">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15">
          <CheckIcon className="h-3 w-3 text-emerald-300" />
        </span>
        {message}
      </div>
    </div>
  );
}
