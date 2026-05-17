import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10">
      <Image
        src={`https://picsum.photos/seed/${title}/1200/700`}
        alt={title}
        fill
        unoptimized
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  );
};

export default Banner;
