import jwt from "jsonwebtoken";

function vertify_auth(req, res, next) {
    const token = req.cookies.kba_token;

    if (!token) {
        return res.status(401).json({ msg: "Token not found" });
    }

    try {
        const userData = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = userData
            next();
        }
    catch (err) {
        console.log("Invalid token");
        return res.status(401).json({ msg: "Invalid token" });
    }
}

export default vertify_auth;
