import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaRegMessage, FaTv } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const Instructor = ({ nam }) => {
  return (
    <div className="mt-10 bg-zinc-900 p-5 rounded-lg">
      <div className="flex gap-10">
        <div>
          <Image
            unoptimized
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${nam}`}
            alt="profile"
            width={405}
            height={405}
            className=" border border-white/10 bg-white rounded-lg"
          />
        </div>
        <div>
          {/* about */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">{nam}</h1>
            <p className="text-sm text-zinc-400">Senior Software Engineer</p>
          </div>
          <ul className="mt-8 flex flex-col gap-4">
            <li className="flex items-center gap-2 text-zinc-300">
              <FaTv /> 10+ Courses
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <MdPeopleAlt /> 2k+ Student Learned
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <FaRegMessage />
              1500+ Reviews
            </li>
            <li className="flex items-center gap-2 text-zinc-300">
              <CiStar />
              4.9 Average Rating
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-5 text-zinc-300 text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.</p>
    </div>
  );
};

export default Instructor;
