import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Overview = ({ course }) => {
  const { category, learning } = course;
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Course Description</h1>

        <p className="mt-5 text-base leading-8 text-zinc-400">
          {category.description}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
        <h2 className="text-2xl font-semibold text-white">
          What You Will Learn?
        </h2>

        <ul className="mt-6 grid gap-5 md:grid-cols-2">
          {learning.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-zinc-300">
              <IoCheckmarkDoneOutline className="mt-1 shrink-0 text-lg text-emerald-400" />

              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
