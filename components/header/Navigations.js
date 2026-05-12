"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigations = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8">
      {navLinks.map((nav) => {
        const active = pathname === nav.href;

        return (
          <Link
            key={nav.title}
            href={nav.href}
            className="
              relative text-[15px] text-zinc-400 transition
              hover:text-white
            "
          >
            {nav.title}

            <span
              className={`
                absolute -bottom-1 left-0 h-[1.5px]
                bg-white transition-all duration-300
                ${active ? "w-full" : "w-0 group-hover:w-full"}
              `}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Navigations;
