import jwt from "jsonwebtoken";

function authmiddleware(req, res, next){
    const token = req.cookies.kba_token
    // if(!token){
    //     console.log('no token found');
    //     req.message = 'no token'
    //     return res.json({msg:'token not found'})
    // }
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.email = decode.email
        req.role = decode.role
        next();
    }catch{
        console.log('invalid token'); 
        res.status(400).json({msg:'Invalid token'})
    }
}

export default authmiddleware