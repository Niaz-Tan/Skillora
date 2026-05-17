import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaRegMessage, FaTv } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const Instructor = ({ nam }) => {
  return (
    <div className="mt-10 rounded-xl bg-zinc-900 p-5 sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* image */}
        <div className="w-full lg:w-auto">
          <Image
            unoptimized
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${nam}`}
            alt="profile"
            width={405}
            height={405}
            className="h-auto w-full max-w-[320px] rounded-xl border border-white/10 bg-white object-cover"
          />
        </div>

        {/* content */}
        <div className="flex-1">
          {/* about */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold sm:text-4xl">{nam}</h1>

            <p className="text-sm text-zinc-400 sm:text-base">
              Senior Software Engineer
            </p>
          </div>

          {/* stats */}
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm sm:text-base md:grid-cols-2">
            <li className="flex items-center gap-3 text-zinc-300">
              <FaTv className="shrink-0 text-lg" />
              10+ Courses
            </li>

            <li className="flex items-center gap-3 text-zinc-300">
              <MdPeopleAlt className="shrink-0 text-lg" />
              2k+ Students Learned
            </li>

            <li className="flex items-center gap-3 text-zinc-300">
              <FaRegMessage className="shrink-0 text-lg" />
              1500+ Reviews
            </li>

            <li className="flex items-center gap-3 text-zinc-300">
              <CiStar className="shrink-0 text-lg" />
              4.9 Average Rating
            </li>
          </ul>
        </div>
      </div>

      {/* description */}
      <p className="mt-8 text-base leading-7 text-zinc-300 sm:text-lg">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there is not
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend.
      </p>
    </div>
  );
};

export default Instructor;
