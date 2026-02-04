import { Router } from 'express';
import user_middleware from '../middleware/user_auth.js';
// import { cart_model } from '../models/cart.js';
// import { course_model } from '../models/course.js';

const router = Router();

router.get('/all_courses', user_middleware, (req, res) => {
    res.status(200).send('All courses');
});

router.get('/learn_more', user_middleware, (req, res) => {
    res.status(200).send('Learn more page');
});



// router.post('/addtocart', user_middleware, async (req, res) => {
//   try {
//     const { course_id, quantity, price } = req.body;
//     const userId = req.userId;

//     const course = await course_model.findById(course_id);
//     if (!course) {
//       return res.status(404).json({ msg: 'Invalid course' });
//     }

//     let cart = await cart_model.findOne({ user: userId });

//     if (!cart) {
//       cart = await cart_model.create({
//         user: userId,
//         items: [{ course: course_id, quantity, price }]
//       });
//       return res.status(201).json({ msg: 'added' });
//     }

//     const itemIndex = cart.items.findIndex(
//       item => item.course.toString() === course_id
//     );

//     if (itemIndex > -1) {
//       cart.items[itemIndex].quantity += quantity;
//       cart.items[itemIndex].price = price;
//     } else {
//       cart.items.push({ course: course_id, quantity, price });
//     }

//     await cart.save();
//     res.status(200).json({ msg: 'updated' });

//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Add to cart failed');
//   }
// });

// router.get('/fetchcart', user_middleware, async (req, res) => {
//   try {
//     const cart = await cart_model
//       .findOne({ user: req.userId })
//       .populate('items.course');

//     if (!cart || cart.items.length === 0) {
//       return res.status(200).json({ msg: 'cart is empty' });
//     }

//     res.status(200).json({ data: cart.items });

//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Fetch cart failed');
//   }
// });

export default router;


