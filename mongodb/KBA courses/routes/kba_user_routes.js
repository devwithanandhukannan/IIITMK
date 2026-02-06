import { Router } from "express";
import user_middleware from "../middleware/user_auth.js";
import { Cart } from "../models/cart.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Cart
 *   description: User cart and course access APIs
 */

/**
 * @swagger
 * /all_courses:
 *   get:
 *     summary: Get all available courses (User)
 *     tags: [User Cart]
 *     responses:
 *       200:
 *         description: All courses
 *       401:
 *         description: Unauthorized
 */
router.get("/all_courses", user_middleware, (req, res) => {
  res.status(200).send("All courses");
});

/**
 * @swagger
 * /learn_more:
 *   get:
 *     summary: Learn more about courses
 *     tags: [User Cart]
 *     responses:
 *       200:
 *         description: Learn more page
 */
router.get("/learn_more", user_middleware, (req, res) => {
  res.status(200).send("Learn more page");
});

/**
 * @swagger
 * /add_to_cart:
 *   post:
 *     summary: Add course to cart
 *     tags: [User Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_id
 *               - quantity
 *               - price
 *             properties:
 *               course_id:
 *                 type: string
 *               quantity:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart updated
 *       201:
 *         description: Cart created
 *       500:
 *         description: Server error
 */
router.post("/add_to_cart", user_middleware, async (req, res) => {
  try {
    const userId = req.user_id;
    const { course_id, quantity, price } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.course.toString() === course_id
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({
          course: course_id,
          quantity,
          price,
        });
      }

      await cart.save();
      return res.status(200).json({ msg: "Cart updated" });
    }

    cart = await Cart.create({
      user: userId,
      items: [
        {
          course: course_id,
          quantity,
          price,
        },
      ],
    });

    res.status(201).json({ msg: "Cart created", cart });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

/**
 * @swagger
 * /view_cart:
 *   get:
 *     summary: View user cart
 *     tags: [User Cart]
 *     responses:
 *       200:
 *         description: Cart data
 *       400:
 *         description: Cart empty
 */
router.get("/view_cart", user_middleware, async (req, res) => {
  try {
    const userId = req.user_id;
    const data = await Cart.findOne({ user: userId });

    if (data) {
      res.status(200).json({ msg: "success", data });
    } else {
      res.status(400).json({ msg: "cart empty" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

export default router;
