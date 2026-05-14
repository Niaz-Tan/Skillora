import { getCategories } from "@/queries/categories";
import { getCourses } from "@/queries/courses";

import CoursesClient from "./_components/CoursesClient";

const page = async () => {
  const courses = await getCourses();
  const categories = await getCategories();

  return (
    <CoursesClient
      courses={courses}
      categories={categories}
    />
  );
};

export default page;