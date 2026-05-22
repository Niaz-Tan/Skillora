export default function Loading() {
  return (
    <div className="min-h-screen px-6 pt-28 pb-20 md:px-10 lg:px-40 text-white relative">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative animate-pulse">
        {/* SEARCH BAR */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
          <div className="h-4 w-4 rounded bg-white/10" />
          <div className="h-4 w-1/3 bg-white/10 rounded" />
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex md:hidden gap-3 mt-4">
          <div className="flex-1 h-12 rounded-xl bg-white/10" />
          <div className="flex-1 h-12 rounded-xl bg-white/10" />
        </div>

        {/* DESKTOP CONTROLS */}
        <div className="hidden md:flex items-center justify-between mt-5 gap-4">
          <div className="h-10 w-44 bg-white/10 rounded-xl" />

          <div className="flex gap-2">
            <div className="h-10 w-20 bg-white/10 rounded-xl" />
            <div className="h-10 w-20 bg-white/10 rounded-xl" />
            <div className="h-10 w-20 bg-white/10 rounded-xl" />
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* SIDEBAR */}
          <div className="hidden lg:block space-y-4">
            <div className="h-5 w-32 bg-white/10 rounded" />

            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-3 py-3 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="h-3 w-24 bg-white/10 rounded" />
                <div className="h-4 w-4 bg-white/10 rounded" />
              </div>
            ))}
          </div>

          {/* COURSE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
              >
                {/* image */}
                <div className="aspect-video bg-white/10" />

                {/* text */}
                <div className="p-5 space-y-3">
                  <div className="h-3 w-20 bg-white/10 rounded" />
                  <div className="h-4 w-3/4 bg-white/10 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE FLOAT BUTTONS */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 flex gap-3">
          <div className="flex-1 h-12 bg-white/10 rounded-xl" />
          <div className="flex-1 h-12 bg-white/10 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
