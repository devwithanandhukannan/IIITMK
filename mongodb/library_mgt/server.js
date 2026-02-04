import express, { json } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { book_routes } from './routes/routes.js';


const app = express();
dotenv.config()
app.use(json())

const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGOOSE_URL).then(()=>{console.log('mongoose connected');
}).catch((err)=>{console.log(err);
})

app.use('/',book_routes)

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})