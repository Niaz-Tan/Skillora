import { replaceMongoIdInArray, replaceMongoIdInObj } from "@/lib/convertData";
import { Category } from "@/models/category-model";
import { connectDB } from "@/services/mongo";

export const getCategories = async () => {
  await connectDB();
  const categories = await Category.find().lean();
  return replaceMongoIdInArray(categories);
};

export const getCategoryDetailis = async (id) => {
  await connectDB();

  try {
    const category = await Category.findById(id).lean();
    return replaceMongoIdInObj(category);
  } catch (err) {
    throw new Error(err);
  }
};
