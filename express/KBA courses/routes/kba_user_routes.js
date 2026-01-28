import { Router } from 'express';
import user_middleware from '../middleware/user_auth.js';
import { cart } from '../map.js';

const router = Router();

router.get('/all_courses', user_middleware, (req, res) => {
    res.status(200).send('All courses');
});

router.get('/learn_more', user_middleware, (req, res) => {
    res.status(200).send('Learn more page');
});

router.post('/addtocart', user_middleware, (req, res) => {
    const { course_id, quantity, price } = req.body;
    const email = req.email;
    if (!cart.has(email)) {
        cart.set(email, new Map());
    }
    const userCart = cart.get(email);
    if (userCart.has(course_id)) {
        const existing = userCart.get(course_id);
        userCart.set(course_id, {
            quantity: existing.quantity + quantity,
            price
        });
        return res.status(200).json({ msg: "updated" });
    }
    userCart.set(course_id, { quantity, price });
    return res.status(200).json({ msg: "added" });
});

router.get('/fetchcart', user_middleware, (req, res) => {
    const email = req.email;
    if (!cart.has(email) || cart.get(email).size === 0) {
        return res.status(200).json({ msg: "cart is empty" });
    }
    return res.status(200).json({
        data: Object.fromEntries(cart.get(email))
    });
});


export default router;
