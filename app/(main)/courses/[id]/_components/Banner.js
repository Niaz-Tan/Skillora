import Image from "next/image";

const Banner = ({title}) => {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-[32px] border border-white/10">
      <Image
        src={`https://picsum.photos/seed/${title}/800/500`}
        alt={title}
        fill
        unoptimized
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
  );
};

export default Banner;
