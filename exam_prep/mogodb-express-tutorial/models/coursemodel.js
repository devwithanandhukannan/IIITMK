import mongoose, { model, Schema } from 'mongoose'

const class_schema = new Schema({
    course_name : {type:String,require:true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    image:{ type:String } 
})

export const class_model = model('Course',class_schema)