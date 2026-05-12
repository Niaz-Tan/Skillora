"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFilter, FaSearch, FaSort, FaTimes } from "react-icons/fa";

const allCourses = [
  { id: 1, title: "Modern Next.js Course", category: "Development", price: 49 },
  { id: 2, title: "UI Design Masterclass", category: "Design", price: 0 },
  { id: 3, title: "Marketing Basics", category: "Marketing", price: 29 },
  { id: 4, title: "Business Growth Strategy", category: "Business", price: 99 },
];

const categoriesList = [
  "Design",
  "Development",
  "Marketing",
  "Personal Development",
  "Business",
  "Photography",
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("low");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const filtered = allCourses
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    .filter((c) =>
      selectedCategories.length
        ? selectedCategories.includes(c.category)
        : true,
    )
    .filter((c) => {
      if (priceFilter === "free") return c.price === 0;
      if (priceFilter === "paid") return c.price > 0;
      return true;
    })
    .sort((a, b) => (sort === "low" ? a.price - b.price : b.price - a.price));

  return (
    <div className="min-h-screen px-6 pt-28 pb-20 md:px-10 lg:px-40 text-white relative">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative">
        {/* SEARCH */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl">
          <FaSearch className="text-zinc-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* 📱 MOBILE ACTION BAR (FIXED UX FEEDBACK) */}
        <div className="flex md:hidden gap-3 mt-4">
          <button
            onClick={() => setSortOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/10"
          >
            <FaSort />
            Sort: {sort === "low" ? "Low" : "High"}
          </button>

          <button
            onClick={() => setFilterOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/10"
          >
            <FaFilter />
            Filter ({selectedCategories.length})
          </button>
        </div>

        {/* DESKTOP CONTROLS */}
        <div className="hidden md:flex items-center justify-between mt-5 gap-4">
          <div className="relative w-[180px]">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full appearance-none cursor-pointer rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 pr-10 text-sm"
            >
              <option value="low">Low → High</option>
              <option value="high">High → Low</option>
            </select>

            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
              ▾
            </div>
          </div>

          <div className="flex gap-2">
            {["", "free", "paid"].map((type) => (
              <button
                key={type}
                onClick={() => setPriceFilter(type)}
                className={`px-4 py-2 rounded-xl text-sm border ${
                  priceFilter === type
                    ? "bg-white/10 border-white/20"
                    : "border-white/10"
                }`}
              >
                {type === "" ? "All" : type}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* SIDEBAR */}
          <aside className="hidden lg:block space-y-6">
            {/* CATEGORY (UNCHANGED DESIGN - ONLY LOGIC VISUAL FIX) */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h2 className="text-sm font-semibold mb-4">Categories</h2>

              <div className="space-y-2">
                {categoriesList.map((cat) => {
                  const active = selectedCategories.includes(cat);

                  return (
                    <label
                      key={cat}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer border transition
                        ${
                          active
                            ? "bg-white/10 border-white/20"
                            : "border-white/10 hover:bg-white/[0.05]"
                        }
                      `}
                    >
                      <span className="text-sm text-zinc-300">{cat}</span>

                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => toggleCategory(cat)}
                        className="accent-white"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* COURSES */}
          <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    unoptimized
                    src={`https://picsum.photos/seed/${course.title}/800/500`}
                    fill
                    className="object-cover"
                    alt={course.title}
                  />
                </div>

                <div className="p-5">
                  <p className="text-xs text-zinc-400">{course.category}</p>
                  <h3 className="mt-2 font-semibold">{course.title}</h3>
                </div>
              </Link>
            ))}
          </main>
        </div>

        {/* MOBILE FILTER */}
        {filterOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:hidden">
            <div className="w-full max-h-[70vh] bg-zinc-900 rounded-t-2xl p-5 overflow-y-auto">
              <button onClick={() => setFilterOpen(false)}>
                <FaTimes />
              </button>

              <h2 className="mt-4 font-semibold">Categories</h2>

              <div className="space-y-2 mt-3">
                {categoriesList.map((cat) => {
                  const active = selectedCategories.includes(cat);

                  return (
                    <label
                      key={cat}
                      className={`flex justify-between items-center px-3 py-2 rounded-xl border transition
                        ${
                          active
                            ? "bg-white/10 border-white/20"
                            : "border-white/10"
                        }
                      `}
                    >
                      <span>{cat}</span>
                      <input
                        type="checkbox"
                        checked={active}
                        onChange={() => toggleCategory(cat)}
                        className="accent-white"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE SORT */}
        {sortOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:hidden">
            <div className="w-full bg-zinc-900 rounded-t-2xl p-5">
              <button onClick={() => setSortOpen(false)}>
                <FaTimes />
              </button>

              <h2 className="mt-4 font-semibold">Sort By</h2>

              <div className="space-y-2 mt-3">
                {[
                  { label: "Low → High", value: "low" },
                  { label: "High → Low", value: "high" },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      setSort(s.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-3 py-3 rounded-xl border transition
                      ${
                        sort === s.value
                          ? "bg-white/10 border-white/20"
                          : "border-white/10"
                      }
                    `}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
