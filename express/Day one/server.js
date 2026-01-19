import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/',(req,res)=>{
    res.send('this is your homepage data')
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server running at ${port}`);
})