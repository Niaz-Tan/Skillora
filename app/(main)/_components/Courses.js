import { formatPrice } from "@/lib/formatPrice";
import { getCategories } from "@/queries/categories";
import { getCourses } from "@/queries/courses";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBookOpen } from "react-icons/fa6";

const Courses = async () => {
  const courses = await getCourses();
  return (
    <section className="relative px-6 pb-24 md:px-10 lg:px-40">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Courses</h2>

        <Link
          href="/courses"
          className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          Browse All
          <FaArrowRight className="text-xs" />
        </Link>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {courses.map((course) => (
          <Link
            key={course._id}
            href={`/courses/${course._id}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                unoptimized
                src={`https://picsum.photos/seed/${course.title}/800/500`}
                alt={course.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="p-5">
              {/* <p className="text-xs text-zinc-500">{course.category}</p> */}
              <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-white">
                {course.title}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                <FaBookOpen />
                <span>{course.modules.length} Modules</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-bold text-white">
                  {formatPrice(course.price)}
                </p>

                <div className="flex items-center gap-2 text-sm text-zinc-300 transition group-hover:text-white">
                  Enroll
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Courses;
