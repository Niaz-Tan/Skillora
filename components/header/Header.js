"use client";

import { Audiowide } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import Navigations from "./Navigations";
import ProfileMenu from "./ProfileMenu";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Documentation", href: "/docs" },
];

const Header = () => {
  const ifAuthorized = false;

  const [showRegisterMenu, setShowRegisterMenu] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.04] bg-black/30 backdrop-blur-2xl">
      <div className="relative flex items-center justify-between px-4 md:px-10 py-4">
        {/* logo */}
        <Link href="/" className={`text-2xl text-white ${audiowide.className}`}>
          Skillora
        </Link>

        {/* desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
          <Navigations navLinks={navLinks} />
        </nav>

        {/* right side */}
        <div className="flex items-center gap-3">
          {ifAuthorized ? (
            <ProfileMenu />
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white transition hover:bg-white/[0.06]"
              >
                Login
              </Link>

              <div className="relative">
                <button
                  onClick={() => setShowRegisterMenu(!showRegisterMenu)}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Register
                  <HiChevronDown className="text-lg" />
                </button>

                {showRegisterMenu && (
                  <div className="absolute right-0 top-14 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl">
                    <Link
                      href="/register/student"
                      className="block px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                    >
                      Student
                    </Link>

                    <div className="h-px bg-white/5" />

                    <Link
                      href="/register/teacher"
                      className="block px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                    >
                      Teacher
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* mobile menu */}
          <div className="md:hidden">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
