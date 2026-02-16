import { Router } from "express";
import { Doctor } from "../models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminRoute = Router();


adminRoute.post("/", async (req, res) => {
    try {
        const { name, specialization, phone, email,password }=req.body;
        const existingDoctor = await Doctor.findOne({ email });
        if(existingDoctor){
            return res.status(400).json({message:"Doctor already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const doctor = new Doctor({
            name,
            specialization,
            phone,
            email,
            password: hashedPassword
        });
        await doctor.save();
        res.status(201).json({ message: "Saved", data: doctor });

    } catch (error) {
        res.status(400).json({ msg: error });
    }
});
adminRoute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const doctor = await Doctor.findOne({ email });
        console.log(doctor.password);
        
        if (!doctor) {
            return res.status(400).json({ message: "Doctor not found" });
        }
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign(
            { id: doctor._id, role: "doctor" },
            process.env.KEY,
            { expiresIn: "1h" }
        );
        res
            .status(200)
            .cookie("doctor_token", token, { httpOnly: true })
            .json({ message: "Login successful" });
    } catch (error) {
        res.status(400).json({ message: "Login failed", error });
    }
});
adminRoute.get('/appointments', async (req, res)=>{
    
})

export default adminRoute