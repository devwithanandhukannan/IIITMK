import { Router } from "express";
const router = Router();



    router.get('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
    <html>
      <head>
        <title>Admin Homepage</title>
      </head>
      <body style="
        margin:0;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:Arial, sans-serif;
        background:greenyellow;
        color:black;
      ">
        <h1>User Homepage</h1>
      </body>
    </html>
        `)
    })

    router.get('/login',(req,res)=>{
    res.send(`Admin login`)
    })

export default router

