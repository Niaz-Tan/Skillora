import CourseCard from "./CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </main>
  );
};

export default CourseGrid;
