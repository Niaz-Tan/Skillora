// app/loading.js

export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="h-9 w-32 animate-pulse rounded-xl bg-zinc-800" />

          {/* Middle Nav */}
          <div className="hidden gap-4 md:flex">
            <div className="h-4 w-16 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-20 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-14 animate-pulse rounded bg-zinc-800" />
          </div>

          {/* Profile */}
          <div className="h-11 w-11 animate-pulse rounded-full bg-zinc-800" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-5 h-6 w-40 animate-pulse rounded-full bg-zinc-800" />

        <div className="space-y-4">
          <div className="h-14 w-[320px] animate-pulse rounded-xl bg-zinc-800 md:w-[650px]" />
          <div className="mx-auto h-14 w-[280px] animate-pulse rounded-xl bg-zinc-800 md:w-[500px]" />
        </div>

        <div className="mt-8 h-5 w-[250px] animate-pulse rounded bg-zinc-800 md:w-[450px]" />

        <div className="mt-10 flex gap-4">
          <div className="h-12 w-36 animate-pulse rounded-2xl bg-zinc-800" />
          <div className="h-12 w-36 animate-pulse rounded-2xl bg-zinc-800" />
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 h-8 w-52 animate-pulse rounded-lg bg-zinc-800" />

        <div className="flex gap-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-12 min-w-[120px] animate-pulse rounded-2xl bg-zinc-800"
            />
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 h-8 w-44 animate-pulse rounded-lg bg-zinc-800" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
            >
              {/* Thumbnail */}
              <div className="h-48 animate-pulse bg-zinc-800" />

              <div className="space-y-4 p-5">
                {/* Category */}
                <div className="h-4 w-24 animate-pulse rounded bg-zinc-800" />

                {/* Title */}
                <div className="space-y-2">
                  <div className="h-5 w-full animate-pulse rounded bg-zinc-800" />
                  <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-800" />
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between pt-2">
                  <div className="h-4 w-20 animate-pulse rounded bg-zinc-800" />
                  <div className="h-4 w-14 animate-pulse rounded bg-zinc-800" />
                </div>

                {/* Button */}
                <div className="pt-2">
                  <div className="h-11 w-full animate-pulse rounded-2xl bg-zinc-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}