import { Router } from "express";
import { Appointment, Patient } from "../models.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { patientMiddleware } from "../middleware/patientMiddleware.js";

const patientRoute = Router();


//login
patientRoute.post('/login', async (req, res) => {
    try {
        const{ email, password } = req.body;
        const user = await Patient.findOne({ email });
        if (!user){
            return res.status(400).json({ message: "User does not exist" });
        }
        const check_auth = await bcrypt.compare(password, user.password);
        if (!check_auth) {
            return res.status(400).json({ msg: "Password failed" });
        }
        const token = jwt.sign(
            { id: user._id, role: 'patient' },
            process.env.KEY,
            { expiresIn: '1h' }
        );
        res.status(200)
            .cookie('patient_token', token, { httpOnly: true })
            .json({ message: "Login success" });
    } catch (error) {
        res.status(400).json({ msg: "Login failed", error });
    }
});

//add new patient
patientRoute.post("/", async (req, res) => {
    try {
        const { name, age, gender, phone, email, password } = req.body;
        const existingPatient = await Patient.findOne({ email });
        if (existingPatient) {
            return res.status(400).json({ message: "Email already registered" });
        }
        const hashed_passwd = await bcrypt.hash(password, 10);
        const patient = new Patient({
            name,
            age,
            gender,
            phone,
            email,
            password: hashed_passwd
        });
        await patient.save();
        const token = jwt.sign(
            { id: patient._id, role: "patient" },
            process.env.KEY,
            { expiresIn: "1h" }
        );
        patient.password = undefined;
        res.status(201)
            .cookie("patient_token", token, { httpOnly: true })
            .json({ message: "Saved", data: patient });

    } catch (error) {
        res.status(400).json({ error });
    }
});

//book new appoinments
patientRoute.post("/appointments",patientMiddleware, async(req, res) => {
    try {
        const { doctor, patient, appointmentDate } = req.body;
        const newAppointment = new Appointment({
            doctor,
            patient,
            appointmentDate,
        });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// update appointment
patientRoute.put("/appointments/:id",patientMiddleware, async(req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!updatedAppointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        res.json(updatedAppointment);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});
// delete appointments
patientRoute.delete("/appointments/:id",patientMiddleware, async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json({ message: "Appointment Cancelled", appointment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
//view appointments of patient
patientRoute.get("/appointments", patientMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.find({
            patient: req.user.id
        })
        res.json(appointments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default patientRoute