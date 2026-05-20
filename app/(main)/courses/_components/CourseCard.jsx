import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <Link
      href={`/courses/${course._id}`}
      className="rounded-3xl border border-white/10 bg-white/3 overflow-hidden"
    >
      <div className="relative aspect-video">
        <Image
          unoptimized
          src={`https://picsum.photos/seed/${course.title}/800/500`}
          fill
          className="object-cover"
          alt={course.title}
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-zinc-400">{course.category?.title}</p>

        <h3 className="mt-2 font-semibold">{course.title}</h3>
      </div>
    </Link>
  );
};

export default CourseCard;
