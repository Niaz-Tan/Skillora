import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur. Aspernatur reprehenderit voluptatem unde consequatur.",
  },

  {
    id: 2,
    name: "Sarah Smith",
    review:
      "This course completely changed how I build full stack applications. Everything was explained very clearly.",
  },

  {
    id: 3,
    name: "Alex Johnson",
    review:
      "One of the best learning experiences I had online. The projects were super practical and fun.",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-16">
      {/* heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Testimonials</h1>

        <p className="mt-2 text-zinc-400">
          What students say about this course
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-2xl border border-white/5 bg-zinc-900 p-6 transition hover:border-white/10 hover:bg-zinc-800"
          >
            {/* user */}
            <div className="flex items-center gap-4">
              <Image
                unoptimized
                src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${testimonial.name}`}
                alt={testimonial.name}
                width={56}
                height={56}
                className="rounded-full border border-white/10 bg-white"
              />

              <div>
                <h2 className="text-lg font-semibold">{testimonial.name}</h2>

                {/* stars */}
                <div className="mt-1 flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            {/* review */}
            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
