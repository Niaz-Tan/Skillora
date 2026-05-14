import { formatPrice } from "@/lib/formatPrice";
import { getCourseById } from "@/queries/courses";
import Image from "next/image";

import {
  FaBookOpen,
  FaChevronDown,
  FaClock,
  FaPlayCircle,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const course = await getCourseById(id);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 pt-28 pb-24 md:px-10 lg:px-24">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute top-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-3xl" />

      <div className="absolute right-[-100px] top-[250px] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative grid items-start gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* banner */}
          <div className="group relative aspect-video overflow-hidden rounded-[32px] border border-white/10">
            <Image
              src={`https://picsum.photos/seed/${course.title}/800/500`}
              alt={course.title}
              fill
              unoptimized
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-xl">
              Preview Course
            </div>
          </div>

          {/* info */}
          <div>
            {/* title */}
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
              {course.title}
            </h1>

            {/* pricing */}
            <div className="mt-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-xl text-zinc-500">Course Price :</p>

                  <p className="text-3xl font-semibold text-white">
                    {formatPrice(course.price)}
                  </p>
                </div>

                <div className="w-fit rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  Enrollment Open
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-600 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02] hover:opacity-95">
                  Enroll Now
                </button>

                <button className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Course Content</h2>

              <p className="mt-1 text-sm text-zinc-400">
                {course.modules.length} modules included
              </p>
            </div>

            {/* <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
              {course.duration}
            </div> */}
          </div>

          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <details
                key={module._id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition hover:bg-white/[0.03]">
                  <div>
                    <p className="text-sm text-zinc-500">Module {index + 1}</p>

                    <h3 className="mt-1 font-medium text-white">
                      {module.title}
                    </h3>
                  </div>

                  <FaChevronDown className="text-zinc-500 transition duration-300 group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/5 px-4 py-3">
                  {/* <div className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        className="flex w-full items-center justify-between rounded-xl border border-transparent bg-white/[0.02] px-4 py-3 text-left transition-all hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-300">
                            <FaPlayCircle />
                          </div>

                          <div>
                            <p className="text-sm text-white">{lesson.title}</p>

                            <p className="mt-1 text-xs text-zinc-500">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-zinc-500">
                          Lesson {lessonIndex + 1}
                        </span>
                      </button>
                    ))}
                  </div> */}
                </div>
              </details>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div className="mt-10">
        {/* category */}
        <div>
          <span>Development</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
