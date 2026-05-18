const SkeleInforNav = () => {
  return (
    <div className="animate-pulse">
      <nav className="mb-6">
        <ul className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/5 bg-zinc-900/40 p-2 backdrop-blur-md">
          <li className="h-9.5 w-24 rounded-xl bg-zinc-950 border border-white/5" />

          <li className="h-9.5 w-28 rounded-xl bg-zinc-800/40" />
          <li className="h-9.5 w-24 rounded-xl bg-zinc-800/40" />
        </ul>
      </nav>

      <div className="rounded-3xl border border-white/5 bg-zinc-900/30 p-6 backdrop-blur-md space-y-4">
        <div className="h-4 w-1/3 rounded bg-zinc-800" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-3/4 rounded bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default SkeleInforNav;
