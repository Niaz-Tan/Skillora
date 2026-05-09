import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  title: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },

  thumbnail: {
    required: true,
    type: String,
  },

  modules: [{ type: Schema.Types.ObjectId, ref: "Module" }],

  price: {
    required: true,
    type: Number,
  },

  active: {
    required: true,
    type: Boolean,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },

  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  quizzes: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },

  testimonials: {
    type: Schema.Types.ObjectId,
    ref: "Testimonial",
  },
});

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
