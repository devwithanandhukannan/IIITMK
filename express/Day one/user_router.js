import { Router } from "express";
const router = Router();

    router.get('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
    <html>
      <head>
        <title>User Homepage</title>
      </head>
      <body style="
        margin:0;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family:Arial, sans-serif;
        background:#007BFF;
        color:#fff;
      ">
        <h1>User Homepage</h1>
      </body>
    </html>
        `)
    })

    router.get('/login',(req,res)=>{
    res.send(`User login`)
    })
    
    router.get('/signup',(req,res)=>{
        try {
            const {username, password, email} = req.body;
            console.log(username, password, email);
            res.status(201).send('success')
        } catch (error) {
            console.log(error); 
        }
    })

    router.get('/signin',(req,res)=>{
        try {
            // const {email,password} = req.body;
            // if(email === 'connect.anandhukannan@gmail.com' && password === 'password'){
            //     res.status(200).send('logged!')
            // }else{
            //     res.status(401).send('invalid login')
            // }
            console.log(40/0);
            
        } catch (error) {
            res.send(error)
            console.log(error);
            
        }
    })


export default router