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
const InforNav = () => {
  const [currentNav, setCurrentNav] = useState("Overview");

  const handleClick = (name) => {
    setCurrentNav(name);
  };
  return (
    <div className="mt-8">
      <nav className="inline-block">
        <ul className=" flex items-center gap-2 p-1 rounded-lg bg-zinc-900">
          {navData.map((data, index) => {
            const isActive = currentNav == data.Name;
            return (
              <li
                key={index}
                className={`px-5 md:px-20 py-2 rounded cursor-pointer
                    ${isActive ? "bg-zinc-950" : ""}
                    `}
                onClick={() => handleClick(data.Name)}
              >
                {data.Name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* content */}
      <div>
        <div className={currentNav === "Overview" ? "block" : "hidden"}>
          <Overview />
        </div>

        <div className={currentNav === "Carriculum" ? "block" : "hidden"}>
          <Curriculum />
        </div>

        <div className={currentNav === "Instructor" ? "block" : "hidden"}>
          <Instructor />
        </div>
      </div>
    </div>
  );
};

export default InforNav;
