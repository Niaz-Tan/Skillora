import { getCategories } from "@/queries/categories";
import Link from "next/link";
import { FaArrowRight, FaLayerGroup } from "react-icons/fa6";

const all = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "UI/UX Design",
  },
  {
    id: 3,
    title: "Mobile Development",
  },
  {
    id: 4,
    title: "Cyber Security",
  },
];

const Categorys = async () => {
  const categories = await getCategories();
  return (
    <section className="relative px-6 py-20 md:px-10 lg:px-40">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Categories</h2>

        <Link
          href="/categories"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          Browse All
          <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/categories/${category._id}`}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.05] "
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                <FaLayerGroup className="text-2xl text-white" />
              </div>

              <h3 className="text-sm font-semibold text-white sm:text-base">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categorys;
