import "@/models/category-model";
import { Course } from "@/models/course-model";
import "@/models/module-model";
import "@/models/testimonial-model";
import "@/models/user-model";
import { connectDB } from "@/services/mongo";

export const getCourses = async () => {
  await connectDB();
  try {
    const courses = await Course.find()
      .select([
        "title",
        "subtitle",
        "thumbnail",
        "modules",
        "price",
        "category",
        "instructor",
        "testimonials",
        "quizzes",
      ])
      .populate("modules")
      .populate("category")
      .populate("instructor")
      .populate("testimonials")
      .populate("quizzes")
      .lean();

    return JSON.parse(JSON.stringify(courses));
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const getCourseById = async (id) => {
  await connectDB();
  try {
    const course = await Course.findById(id)
      .populate("modules")
      .populate("category")
      .populate("instructor")
      .populate("testimonials")
      // .populate("quizzes")
      .lean();

    if (!course) return null; // better than returning []

    return JSON.parse(JSON.stringify(course));
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
