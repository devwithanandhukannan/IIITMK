import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/',(req,res)=>{
    res.send(`
        <div style="display:flex;align-items:center;justify-content:center;background-color:blue">
            <h1 style="color:white;">Welcome to HomePage</h1>
        </div>
        `)
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})