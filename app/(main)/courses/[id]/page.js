import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaClock,
  FaPlay,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa6";

const courses = [
  {
    id: "1",
    title: "Modern Next.js Course",
    category: "Web Development",
    price: 49,
    modules: 12,
    students: 1200,
    duration: "18 Hours",
    instructor: "Niaz Uddin",
    description:
      "Learn modern Next.js from scratch with real-world projects, authentication, server actions, database integration, and deployment.",
  },
];

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const course = courses.find((course) => course.id === id) || courses[0];

  return (
    <div className="relative min-h-screen overflow-hidden px-6 pt-28 pb-24 md:px-10 lg:px-40">
      {/* bg */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute top-[-200px] left-[-100px] h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute right-[-100px] top-[300px] h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* left */}
        <div>
          <p className="text-sm text-zinc-500">{course.category}</p>

          <h1 className="mt-3 text-4xl font-bold text-white">{course.title}</h1>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
            {course.description}
          </p>

          {/* stats */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>4.9 Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUserGraduate />
              <span>{course.students}+ Students</span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaBookOpen />
              <span>{course.modules} Modules</span>
            </div>
          </div>

          {/* thumbnail */}
          <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl border border-white/10">
            <Image
              unoptimized
              src={`https://picsum.photos/seed/${course.title}/1200/700`}
              alt={course.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl transition hover:scale-110">
              <FaPlay className="ml-1 text-2xl text-white" />
            </button>
          </div>

          {/* curriculum */}
          <div className="mt-14">
            <h2 className="text-2xl font-semibold text-white">
              Course Curriculum
            </h2>

            <div className="mt-6 space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">Module {item}</h3>

                    <span className="text-sm text-zinc-500">5 Lessons</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right card */}
        <div>
          <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-4xl font-bold text-white">${course.price}</p>

            <button className="mt-6 w-full rounded-2xl bg-white py-3 font-semibold text-black transition hover:opacity-90">
              Enroll Now
            </button>

            <div className="mt-8 space-y-4 text-sm text-zinc-400">
              <div className="flex items-center justify-between">
                <span>Instructor</span>
                <span className="text-white">{course.instructor}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Modules</span>
                <span className="text-white">{course.modules}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Duration</span>
                <span className="text-white">{course.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Level</span>
                <span className="text-white">Beginner</span>
              </div>
            </div>

            <Link
              href="/courses"
              className="mt-8 block text-center text-sm text-zinc-500 transition hover:text-white"
            >
              Back to courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
