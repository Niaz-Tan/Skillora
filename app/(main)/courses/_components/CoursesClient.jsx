"use client";

import { useState } from "react";

import CourseGrid from "./CourseGrid";
import DesktopControls from "./DesktopControls";
import MobileFilter from "./MobileFilter";
import MobileSort from "./MobileSort";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const CoursesClient = ({ courses, categories }) => {
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

  const filtered = courses
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    .filter((c) =>
      selectedCategories.length
        ? selectedCategories.includes(c.category?.title)
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
        <SearchBar search={search} setSearch={setSearch} />

        {/* MOBILE ACTION BAR */}
        <div className="flex md:hidden gap-3 mt-4">
          <button
            onClick={() => setSortOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/10"
          >
            Sort
          </button>

          <button
            onClick={() => setFilterOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/10"
          >
            Filter ({selectedCategories.length})
          </button>
        </div>

        <DesktopControls
          sort={sort}
          setSort={setSort}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <Sidebar
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />

          <CourseGrid courses={filtered} />
        </div>

        <MobileFilter
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          categories={categories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
        />

        <MobileSort
          sortOpen={sortOpen}
          setSortOpen={setSortOpen}
          sort={sort}
          setSort={setSort}
        />
      </div>
    </div>
  );
};

export default CoursesClient;
