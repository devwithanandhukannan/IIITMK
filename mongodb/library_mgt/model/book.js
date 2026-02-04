import { model, Schema } from "mongoose";

const book_schema = new Schema({
    title:{type:String, require:true},
    author:{type:String, require:true},
    publishedYear:{type:Date, require:true},
    price:Number,
    availability:{type:Boolean,require:true}
})

export const book_model = model('book',book_schema)

// mongodb+srv://<workbridgeanandhu>:<passwd>@cluster0.dseaj.mongodb.net/<db_name>?retryWrites=true&w=majority'