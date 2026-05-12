import Link from "next/link";
import { PiStudentFill } from "react-icons/pi";
import { HiMiniAcademicCap } from "react-icons/hi2";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-3xl p-8">
      <div className="flex flex-col gap-5">
        <Link
          href="/register/student"
          className="
            group w-full rounded-2xl border border-zinc-800/80
            bg-gradient-to-br from-[#18181f]/95 to-[#222235]/85
            backdrop-blur-xl px-6 py-5 transition-all duration-300
            hover:border-zinc-700 hover:-translate-y-0.5
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex size-12 items-center justify-center rounded-xl
                border border-zinc-800 bg-zinc-900/70
                transition group-hover:border-zinc-700
              "
            >
              <PiStudentFill className="size-6 text-zinc-100" />
            </div>

            <div className="text-left">
              <h2 className="text-base font-semibold text-zinc-100">
                Become a Student
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Start learning from premium courses
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/register/teacher"
          className="
            group w-full rounded-2xl border border-zinc-800/80
            bg-gradient-to-br from-[#18181f]/95 to-[#222235]/85
            backdrop-blur-xl px-6 py-5 transition-all duration-300
            hover:border-zinc-700 hover:-translate-y-0.5
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex size-12 items-center justify-center rounded-xl
                border border-zinc-800 bg-zinc-900/70
                transition group-hover:border-zinc-700
              "
            >
              <HiMiniAcademicCap className="size-6 text-zinc-100" />
            </div>

            <div className="text-left">
              <h2 className="text-base font-semibold text-zinc-100">
                Become an Instructor
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Teach students and earn money
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}