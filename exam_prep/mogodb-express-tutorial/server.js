import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { user_model } from './models/usermodel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middleware/auth.js';
import { class_model } from './models/coursemodel.js';
import { Upload } from './middleware/upload.js';
import sharp from 'sharp';

dotenv.config()
const app = express();
app.use(json())
app.use(cookieParser())

//db connection
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`connected`);
}).catch((err) => {
    console.log(err);
})


//routes
app.get('/', authMiddleware, (req, res) => {
    console.log(req.user);
    res.status(200).send(req.user)
})
app.post('/save', async (req, res) => {
    const { name, email, password, age } = req.body
    const hashedpassword = await bcrypt.hash(password, 10)
    const checkuseralready_exist = await user_model.findOne({ email })

    if (checkuseralready_exist) {
        return res.status(401).json({ msg: 'user existed' })
    }
    const new_user = user_model.create({
        name,
        email,
        password: hashedpassword,
        age
    })
    if (new_user) { return res.status(200).json({ msg: 'saved' }) }
    return res.status(400).json({ msg: 'something went wrong' })
})

app.post('/savecourse', authMiddleware, Upload.single('image') ,async (req, res) => {
    try {
        const user = req.user.id
        const { course_name } = req.body
        let image = req.file?.buffer.toString("base64")
        const newCourse = await class_model.create({
            course_name,
            user,
            image
        })
        console.log(newCourse);
        
        if (newCourse) {
            console.log('saved');
            res.send('saved')
        } else {
            res.send('error')
            console.log('something went wrong');

        }

    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/viewimage',authMiddleware,async (req,res)=>{
    const userid = req.user.id
    const course = await class_model.findOne({ user: userid });
    const image = course.image
    const base64img = Buffer.from(image,"base64")
    const resize =await sharp(base64img).resize({width:20}).jpeg({quality:20}).toBuffer()
    res.set({
        "Content-Type":"image/png"
    })
    res.send(resize)
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await user_model.findOne({ email });

        if (user) {
            const decoded_password = await bcrypt.compare(password, user.password)
            console.log(decoded_password);

            if (decoded_password) {

                const token = jwt.sign(
                    { id: user._id, email:user.email },
                    process.env.COOKIE_KEY,
                    { expiresIn: '1hr' }
                )

                return res.status(200).cookie(
                    'exam_prep', token, { httpOnly: true }
                ).json({ message: "logined" })
            }
        }
    } catch (error) {
        res.send(error)
    }

})


app.listen(8080, () => {
    console.log(`server running at port 8080`);
})
