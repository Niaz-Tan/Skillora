import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    
    subtitle: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    modules: [
      {
        type: Schema.Types.ObjectId,
        ref: "Module",
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    active: {
      type: Boolean,
      required: true,
      default: false,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },

    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    quizzes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],

    testimonials: [
      {
        type: Schema.Types.ObjectId,
        ref: "Testimonial",
      },
    ],
  },
  {
    learning: {
      required: true,
      type: [String],
    },
  },
  {
    timestamps: {
      createdAt: "createdOn",
      updatedAt: "modifiedOn",
    },
  },
);

export const Course =
  mongoose.models.Course ?? mongoose.model("Course", courseSchema);
