import mongoose, { model, Schema } from "mongoose";

const certi_schema = new Schema({
    certified_blockchain_associate:{type:String}, 
    certificate_id:{type:Number},
    candidate:{type:String},
    grade:{type:String},
    date:{type:Date}
})

export const Certi = model("certi",certi_schema)
