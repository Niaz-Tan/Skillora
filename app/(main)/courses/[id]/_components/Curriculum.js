"use client";

import { useState } from "react";

import {
  FaBookOpen,
  FaChevronDown,
  FaFileAlt,
  FaQuestionCircle,
  FaStickyNote,
  FaTv,
  FaVideo,
} from "react-icons/fa";

import { IoRadioOutline, IoTimeOutline } from "react-icons/io5";

const curriculumData = [
  {
    id: 1,
    title: "Introduction",
    lessons: [
      { type: "video", name: "What is React ?" },
      { type: "video", name: "Learn React Basics" },
      { type: "video", name: "Build A Simple React App" },
      { type: "note", name: "React Basic Note" },
      { type: "note", name: "Project Requirement Analysis" },
    ],
  },

  {
    id: 2,
    title: "Master Next JS",
    lessons: [
      { type: "video", name: "Next.js App Router" },
      { type: "video", name: "Server Components" },
      { type: "video", name: "Dynamic Routing" },
      { type: "note", name: "SEO Optimization" },
    ],
  },

  {
    id: 3,
    title: "Build Ecommerce Using Next.js",
    lessons: [
      { type: "video", name: "Cart System" },
      { type: "video", name: "Checkout Flow" },
      { type: "note", name: "Payment Integration" },
    ],
  },
];

const Curriculum = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="mt-10">
      {/* top stats */}
      <div className="mb-8 flex flex-wrap items-center gap-5 rounded-xl bg-zinc-900 p-5 text-sm text-zinc-400">
        <span className="flex items-center gap-2">
          <FaBookOpen className="text-base" />
          12 Chapters
        </span>

        <span className="flex items-center gap-2">
          <IoTimeOutline className="text-base" />
          50+ Hours
        </span>

        <span className="flex items-center gap-2">
          <IoRadioOutline className="text-base" />
          4 Live Classes
        </span>
      </div>

      {/* sections */}
      <div className="space-y-4">
        {curriculumData.map((section) => {
          const isOpen = openSection === section.id;

          return (
            <div
              key={section.id}
              className="overflow-hidden rounded-xl border border-white/5 bg-zinc-900"
            >
              {/* header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="flex w-full items-center justify-between p-5 text-left transition hover:bg-zinc-800"
              >
                <h2 className="text-lg font-semibold text-white">
                  {section.title}
                </h2>

                <FaChevronDown
                  className={`text-sm text-zinc-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[1000px] p-5 pt-0" : "max-h-0"
                }`}
              >
                {/* section stats */}
                <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-zinc-400">
                  <span className="flex items-center gap-2">
                    <FaVideo className="text-sm" />
                    12 Lessons
                  </span>

                  <span className="flex items-center gap-2">
                    <FaFileAlt className="text-sm" />
                    10 Notes
                  </span>

                  <span className="flex items-center gap-2">
                    <FaQuestionCircle className="text-sm" />
                    10 Quiz
                  </span>

                  <span className="flex items-center gap-2">
                    <IoRadioOutline className="text-sm" />
                    1 Live Class
                  </span>
                </div>

                {/* lessons */}
                <div className="space-y-3">
                  {section.lessons.map((lesson, index) => (
                    <button
                      key={index}
                      className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                    >
                      {lesson.type === "video" ? (
                        <FaTv className="shrink-0 text-sm" />
                      ) : (
                        <FaStickyNote className="shrink-0 text-sm" />
                      )}

                      {lesson.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Curriculum;