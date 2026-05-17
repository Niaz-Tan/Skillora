import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

const ModuleSection = ({modules}) => {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl max-h-[80vh] overflow-y-auto">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Course Content</h2>

              <p className="mt-1 text-sm text-zinc-400">
                {modules.length} modules included
              </p>
            </div>

            {/* <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300">
              {course.duration}
            </div> */}
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <details
                key={module._id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition hover:bg-white/[0.03]">
                  <div>
                    <p className="text-sm text-zinc-500">Module {index + 1}</p>

                    <h3 className="mt-1 font-medium text-white">
                      {module.title}
                    </h3>
                  </div>

                  <FaChevronDown className="text-zinc-500 transition duration-300 group-open:rotate-180" />
                </summary>

                {/* <div className="border-t border-white/5 px-4 py-3">
                  <div className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lessonIndex}
                        className="flex w-full items-center justify-between rounded-xl border border-transparent bg-white/[0.02] px-4 py-3 text-left transition-all hover:border-white/10 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-zinc-300">
                            <FaPlayCircle />
                          </div>

                          <div>
                            <p className="text-sm text-white">{lesson.title}</p>

                            <p className="mt-1 text-xs text-zinc-500">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-zinc-500">
                          Lesson {lessonIndex + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div> */}
              </details>
            ))}
          </div>
        </div>
  )
}

export default ModuleSection