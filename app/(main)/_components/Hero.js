import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 px-6 md:px-10 lg:px-40">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          Welcome to Skillora
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Master Skills.
          <br />
          Build Your Future.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          A modern learning platform where developers and creators grow through
          structured courses.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/courses"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Browse Courses
          </Link>

          <Link
            href="/register/teacher"
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.06]"
          >
            Start Teaching
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
