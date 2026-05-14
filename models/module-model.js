import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "active", "archived"],
      default: "draft",
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    lessonIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],

    duration: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Module =
  mongoose.models.Module ?? mongoose.model("Module", moduleSchema);