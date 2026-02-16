import express, { json } from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import adminRoute from './routes/doctor.js'
import patientRoute from './routes/patient.js'

const app = express()
app.use(json())
app.use(cookieParser())
dotenv.config();

const port = process.env.PORT

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log('db connected');})
.then((err)=>{console.error(err);})

app.use('/doctor',adminRoute)
app.use('/patient',patientRoute)

app.listen(port,()=>{
    console.log(`server running at ${port}`);
    
})

