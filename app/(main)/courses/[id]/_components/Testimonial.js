import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "This course changed how I build apps. Super practical!",
  },
  {
    id: 2,
    name: "Sarah Smith",
    review: "Very clean explanations and real-world projects.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    review: "Best online course I’ve taken so far.",
  },
];

const Testimonials = () => {
  return (
    <div className="space-y-8">
      {/* heading */}
      <div>
        <h1 className="text-3xl font-bold text-white">Testimonials</h1>
        <p className="mt-2 text-zinc-400">
          What students say about this course
        </p>
      </div>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl border border-white/10 bg-black/20 p-6"
          >
            <div className="flex items-center gap-4">
              <Image
                unoptimized
                src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${t.name}`}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full border border-white/10 bg-white"
              />

              <div>
                <h3 className="font-semibold text-white">{t.name}</h3>

                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-400">{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
