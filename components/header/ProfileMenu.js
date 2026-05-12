"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Documentation", href: "/docs" },
];

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* desktop profile */}
      <div className="hidden md:flex items-center gap-3">
        <Image
          unoptimized
          src="https://api.dicebear.com/7.x/initials/png?seed=tanim&backgroundColor=808080&textColor=ffffff"
          alt="profile"
          width={38}
          height={38}
          className="rounded-full border border-white/10"
        />
      </div>

      {/* mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white"
      >
        <HiBars3 className="text-xl" />
      </button>

      {/* overlay */}
      <div
        className={`
          fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition
          ${open ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        {/* sidebar */}
        <div
          className={`
            absolute right-0 top-0 h-full w-[280px]
            border-l border-white/10 bg-[#0b0b0f]
            p-6 transition duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Menu</h2>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border border-white/10 p-2 text-zinc-400"
            >
              <HiXMark className="text-lg" />
            </button>
          </div>

          {/* nav */}
          <div className="flex flex-col gap-2">
            {navLinks.map((nav) => (
              <Link
                key={nav.title}
                href={nav.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-xl border border-transparent
                  px-4 py-3 text-zinc-300 transition
                  hover:border-white/5 hover:bg-white/[0.03]
                  hover:text-white
                "
              >
                {nav.title}
              </Link>
            ))}
          </div>

          <div className="my-6 h-px bg-white/5" />

          {/* auth */}
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="
                rounded-xl border border-white/10
                bg-white/[0.03]
                px-4 py-3 text-center text-sm text-white
              "
            >
              Login
            </Link>

            <Link
              href="/register/student"
              className="
                rounded-xl bg-white px-4 py-3
                text-center text-sm font-medium text-black
              "
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
