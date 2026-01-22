import jwt from "jsonwebtoken";

function authmiddleware(req, res, next) {
    const token = req.cookies.kba_token;

    if (!token) {
        return res.status(401).json({ msg: "Token not found" });
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.email = decode.email;
        req.role = decode.role;
        next();
    } catch (err) {
        console.log("Invalid token");
        return res.status(401).json({ msg: "Invalid token" });
    }
}

export default authmiddleware;
