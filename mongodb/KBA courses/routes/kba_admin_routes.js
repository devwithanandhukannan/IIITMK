import { Router } from 'express';
import admin_middleware from '../middleware/admin_auth.js';
import { course_model } from '../models/course.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Course management APIs
 */

/**
 * @swagger
 * /all_courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: List of all courses
 *       500:
 *         description: Server error
 */
router.get("/all_courses", async (req, res) => {
  try {
    const courses = await course_model.find();
    res.status(200).json({ allcourses: courses });
  } catch (error) {
    res.status(500).send("Failed to fetch courses");
  }
});

/**
 * @swagger
 * /viewcourse:
 *   get:
 *     summary: Get single course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: query
 *         name: course_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course found
 *       404:
 *         description: Course not found
 */
router.get("/viewcourse", async (req, res) => {
  try {
    const { course_id } = req.query;
    const course = await course_model.findById(course_id);

    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(400).send("Invalid course id");
  }
});

/**
 * @swagger
 * /addcourse:
 *   post:
 *     summary: Add a new course (Admin only)
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_name
 *               - course_type
 *               - description
 *               - price
 *             properties:
 *               course_name:
 *                 type: string
 *               course_type:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Course added successfully
 *       400:
 *         description: Failed to add course
 */
router.post("/addcourse", admin_middleware, async (req, res) => {
  try {
    const { course_name, course_type, description, price } = req.body;

    await course_model.create({
      course_name,
      course_type,
      description,
      price,
    });

    res.status(201).send("Course added successfully");
  } catch (error) {
    res.status(400).send("Failed to add course");
  }
});

router.put('/update_course/:id', async (req, res) => {
  try {
    const updatedCourse = await course_model.findOneAndReplace(
      { _id: req.params.id },
      req.body
    );

    if (!updatedCourse) {
      return res.status(404).json({ msg: "Invalid course id" });
    }

    res.status(200).json({
      msg: "Course updated",
      course: updatedCourse,
    });
  } catch (error) {
    res.status(400).send("Update failed");
  }
});

/**
 * @swagger
 * /patch_price:
 *   patch:
 *     summary: Update course price
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_id
 *               - price
 *             properties:
 *               course_id:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Price updated
 *       404:
 *         description: Invalid course id
 */
router.patch("/patch_price", async (req, res) => {
  try {
    const { course_id, price } = req.body;

    const course = await course_model.findByIdAndUpdate(
      course_id,
      { price },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ msg: "Invalid course id" });
    }

    res.status(200).json({
      msg: `Updated price to ${price}`,
      course,
    });
  } catch (error) {
    res.status(400).send("Patch failed");
  }
});

/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete a course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_id
 *             properties:
 *               course_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Course deleted
 *       404:
 *         description: Invalid course id
 */
router.delete("/delete", async (req, res) => {
  try {
    const { course_id } = req.body;

    const deleted = await course_model.findByIdAndDelete(course_id);

    if (!deleted) {
      return res.status(404).json({ msg: "Invalid course id" });
    }

    res.status(200).json({ msg: "Course deleted successfully" });
  } catch (error) {
    res.status(400).send("Delete failed");
  }
});

export default router;
