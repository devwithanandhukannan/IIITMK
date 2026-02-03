import { model, Schema } from "mongoose";

const student_schema = new Schema({
    name:{type:String, require:true},
    age:Number,
    grade:{type:String,require:true}
})

export const student_model = model('student_tb',student_schema)
