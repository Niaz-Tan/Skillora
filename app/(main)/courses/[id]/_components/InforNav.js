"use client";

import { useState } from "react";

import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Overview from "./Overview";

const navData = [
  { Name: "Overview" },
  { Name: "Carriculum" },
  { Name: "Instructor" },
];

const InforNav = ({ nam }) => {
  const [currentNav, setCurrentNav] = useState("Carriculum");

  return (
    <div>
      {/* nav */}
      <nav className="mb-6">
        <ul className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-2 backdrop-blur-md">
          {navData.map((data, index) => {
            const isActive = currentNav === data.Name;

            return (
              <li
                key={index}
                onClick={() => setCurrentNav(data.Name)}
                className={`cursor-pointer rounded-xl px-5 py-2 text-sm font-medium transition
                ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {data.Name}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* content */}
      <div className="rounded-3xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-md">
        <div className={currentNav === "Overview" ? "block" : "hidden"}>
          <Overview />
        </div>

        <div className={currentNav === "Carriculum" ? "block" : "hidden"}>
          <Curriculum />
        </div>

        <div className={currentNav === "Instructor" ? "block" : "hidden"}>
          <Instructor nam={nam} />
        </div>
      </div>
    </div>
  );
};

export default InforNav;
