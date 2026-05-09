import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/lib/convertData";
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
      ])
      .populate("category")
      .populate("instructor")
      .populate("modules")
      .populate("testimonials")
      .lean();

    return replaceMongoIdInArray(courses);
  } catch (err) {
    throw new Error(err);
  }
};

export const geCourseById = async (id) => {
  await connectDB();
  try {
    const courses = await Course.findById(id)
      .select([
        "title",
        "subtitle",
        "thumbnail",
        "modules",
        "price",
        "category",
        "instructor",
      ])
      .populate("category")
      .populate("instructor")
      .populate("modules")
      .populate("testimonials")
      .lean();

    return replaceMongoIdInObj(courses);
  } catch (err) {
    throw new Error(err);
    return [];
  }
};
