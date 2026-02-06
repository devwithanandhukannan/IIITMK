import mongoose, { Schema, model } from 'mongoose';

const course_schema = new Schema(
  {
    course_name: { type: String, required: true },
    course_type: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    course_image: String,
    course_pdf:String
  },
  { timestamps: true }
);

export const course_model = model('Course', course_schema);
