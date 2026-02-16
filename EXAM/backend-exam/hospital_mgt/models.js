import mongoose, { model, Schema } from "mongoose";

const doctorSchema = new Schema({
    name:{type:String, required: true},
    specialization:{type:String, required:true},
    phone:Number,
    email:String,
    password:String
})

const patientSchema = new Schema({
    name:{type:String, required: true},
    age:Number,
    gender:String,
    phone:Number,
    email:String,
    password:String
})

const appointmentSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true },
    patient: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Patient", 
        required: true },
    appointmentDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ["Scheduled","Completed","Confirmed", "Cancelled"],
        default: "Scheduled"
    }
}, { timestamps: true });


export const Doctor = model("Doctor", doctorSchema);
export const Patient = model("Patient", patientSchema);
export const Appointment = model("Appointment", appointmentSchema);
