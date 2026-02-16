import jwt from 'jsonwebtoken'

export const doctorMiddleware = (req,res,next)=>{
    let token = req.cookies.doctor_token;
    if(!token){
        return res.status(200).json({message:"token not found"})
    }
    const decode = jwt.verify(token,process.env.KEY)
    console.log(decode);
    next()
}

// import jwt from 'jsonwebtoken'

// export const patientMiddleware = (req,res,next)=>{
//     let token = req.cookies.doctor_token;
//     if(!token){
//         return res.status(200).json({message:"token not found"})
//     }
//     const decode = jwt.verify(token,process.env.KEY)
//     req.user = decode
//     if(req.user.role == 'patient'){
//         next();
//     }else{
//         console.log('invalid access');
//         return res.status(400).json({message:"invalid access"})
//     }
// }