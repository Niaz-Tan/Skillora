import { replaceMongoIdInArray } from "@/lib/convertData";
import { Category } from "@/models/category-model";
import { connectDB } from "@/services/mongo";

export const getCategories = async () => {
  await connectDB();
  const categories = await Category.find().lean();
  return JSON.parse(JSON.stringify(categories));
  
};

export const getCategoryDetailis = async (id) => {
  await connectDB();

  try {
    const category = await Category.findById(id).lean();
    return JSON.parse(JSON.stringify(category));
    
  } catch (err) {
    throw new Error(err);
  }
};
