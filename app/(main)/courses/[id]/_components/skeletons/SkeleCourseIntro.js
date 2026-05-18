const SkeleCourseIntro = () => {
  return (
    <section className="space-y-6 animate-pulse">
      <div>
        <div className="h-7 w-36 rounded-full bg-zinc-800" />
      </div>

      <div className="space-y-4">
        <div className="space-y-2 max-w-4xl">
          <div className="h-8 w-3/4 rounded-lg bg-zinc-800 sm:h-10 lg:h-12" />
          <div className="h-8 w-1/2 rounded-lg bg-zinc-800 sm:h-10 lg:h-12" />
        </div>

        <div className="space-y-2 max-w-3xl">
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-4/5 rounded bg-zinc-800" />
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl border border-white/5 bg-zinc-900/40 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-13 w-13 rounded-full bg-zinc-800 border border-white/5" />

          <div className="space-y-2">
            <div className="h-3 w-16 rounded bg-zinc-800" />
            <div className="h-5 w-32 rounded bg-zinc-800" />
          </div>
        </div>

        <div className="space-y-2 sm:text-right">
          <div className="h-3 w-20 rounded bg-zinc-800" />
          <div className="h-5 w-24 rounded bg-zinc-800" />
        </div>
      </div>
    </section>
  );
};

export default SkeleCourseIntro;
