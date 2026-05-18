import { formatPrice } from "@/lib/formatPrice";

const Pricing = ({ price }) => {
  return (
    <aside className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-xl">
      <div className="space-y-5">
        <div className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
          Enrollment Open
        </div>

        <div>
          <p className="text-sm text-zinc-400">Course Price</p>

          <h1 className="mt-2 text-4xl font-bold text-white">
            {formatPrice(price)}
          </h1>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-8 flex flex-col gap-3">
        <button className="rounded-2xl bg-linear-to-r from-fuchsia-500 to-violet-600 py-4 text-sm font-semibold text-white transition hover:opacity-90">
          Enroll Now
        </button>

        <button className="rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white">
          Add To Cart
        </button>
      </div>

      {/* meta */}
      <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-zinc-500">Level</span>

          <span className="text-white">Beginner</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">Duration</span>

          <span className="text-white">50+ Hours</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">Lessons</span>

          <span className="text-white">120+</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">Certificate</span>

          <span className="text-emerald-400">Included</span>
        </div>
      </div>
    </aside>
  );
};

export default Pricing;
