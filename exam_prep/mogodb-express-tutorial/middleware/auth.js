import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.exam_prep;
    console.log(token);
    req.user = jwt.verify(token, process.env.COOKIE_KEY)
    next()
}