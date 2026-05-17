"use client";

import { useState } from "react";
import { FaBookOpen, FaChevronDown, FaFileAlt, FaTv } from "react-icons/fa";
import { IoRadioOutline, IoTimeOutline } from "react-icons/io5";

const curriculumData = [
  {
    id: 1,
    title: "Introduction",
    lessons: [
      { type: "video", name: "What is React ?" },
      { type: "video", name: "Learn React Basics" },
      { type: "note", name: "React Basic Note" },
    ],
  },
  {
    id: 2,
    title: "Next.js Mastery",
    lessons: [
      { type: "video", name: "Server Components" },
      { type: "note", name: "SEO Basics" },
    ],
  },
];

const Curriculum = () => {
  const [open, setOpen] = useState(1);

  return (
    <div className="space-y-8">
      {/* header stats */}
      <div className="flex flex-wrap gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-zinc-400">
        <span className="flex items-center gap-2">
          <FaBookOpen /> 12 Chapters
        </span>
        <span className="flex items-center gap-2">
          <IoTimeOutline /> 50+ Hours
        </span>
        <span className="flex items-center gap-2">
          <IoRadioOutline /> 4 Live Classes
        </span>
      </div>

      {/* modules */}
      <div className="space-y-4">
        {curriculumData.map((section) => {
          const isOpen = open === section.id;

          return (
            <div
              key={section.id}
              className="rounded-2xl border border-white/10 bg-black/20"
            >
              <button
                onClick={() => setOpen(isOpen ? null : section.id)}
                className="flex w-full items-center justify-between px-5 py-4"
              >
                <div className="text-left">
                  <p className="text-xs text-zinc-500">Module</p>
                  <h3 className="text-white">{section.title}</h3>
                </div>

                <FaChevronDown
                  className={`transition ${
                    isOpen ? "rotate-180" : ""
                  } text-zinc-500`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/10 p-4 space-y-3">
                  {section.lessons.map((lesson, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white"
                    >
                      {lesson.type === "video" ? <FaTv /> : <FaFileAlt />}

                      {lesson.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curriculum;
