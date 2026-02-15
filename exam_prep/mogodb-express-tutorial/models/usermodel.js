import mongoose, { model, Schema } from "mongoose";

const user_schema = new Schema({
    name:{ type:String, require:true },
    email:{ type:String, require:true },
    password:{type:String, require:true},
    age:{type:Number,}
})

export const user_model = model('User',user_schema)