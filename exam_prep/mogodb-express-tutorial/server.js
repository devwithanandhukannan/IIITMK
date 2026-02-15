import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { user_model } from './models/usermodel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middleware/auth.js';

dotenv.config()
const app  = express();
app.use(json())
app.use(cookieParser())

//db connection
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log(`connected`);
}).catch((err)=>{console.log(err);
})


//routes
app.get('/',authMiddleware,(req,res)=>{
    console.log(req.user);
    res.status(200).send(req.user)
})
app.post('/save',async(req, res)=>{
    const { name, email, password, age } = req.body
    const hashedpassword = await bcrypt.hash(password, 10)
    const checkuseralready_exist = await user_model.findOne({email})

    if(checkuseralready_exist){
       return res.status(401).json({msg: 'user existed'})
    }
    const new_user = user_model.create({
        name,
        email,
        password:hashedpassword,
        age
    })
    if(new_user){ return res.status(200).json({msg:'saved'})}
    return res.status(400).json({msg:'something went wrong'})
})

app.post('/login', async(req,res)=>{
    try {
        const {email, password} = req.body
    const user = await user_model.findOne({email});

    if (user){
        const decoded_password = await bcrypt.compare(password,user.password)
        console.log(decoded_password);
        
        if(decoded_password){
            
            const token = jwt.sign(
                {id:user.email},
                process.env.COOKIE_KEY,
                {expiresIn:'1hr'}
            ) 

            return res.status(200).cookie(
                'exam_prep', token, {httpOnly:true}
            ).json({message:"logined"})      
        }
    }
    } catch (error) {
        res.send(error)
    }
    
})


app.listen(8080,()=>{
    console.log(`server running at port 8080`);
})
