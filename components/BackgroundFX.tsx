export function BackgroundFX() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#06060a]" />
      <div className="animate-float-slow absolute -left-32 -top-40 h-[38rem] w-[38rem] rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="animate-float-slow absolute -right-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-fuchsia-600/20 blur-[130px] [animation-delay:-5s]" />
      <div className="animate-float-slow absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[120px] [animation-delay:-9s]" />
      <div className="noise absolute inset-0 opacity-[0.35]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_15%,#06060a_78%)]" />
    </div>
  );
}
