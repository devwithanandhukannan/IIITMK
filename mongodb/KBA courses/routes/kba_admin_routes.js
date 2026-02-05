import { Router } from 'express';
import admin_middleware from '../middleware/admin_auth.js';
import { course_model } from '../models/course.js';

const router = Router();


router.get('/all_courses', async (req, res) => {
  try {
    const courses = await course_model.find();
    res.status(200).json({ allcourses: courses });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch courses');
  }
});


router.get('/viewcourse', async (req, res) => {
  try {
    const { course_id } = req.query;

    const course = await course_model.findById(course_id);
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    res.status(200).json({ course });
  } catch (error) {
    console.error(error);
    res.status(400).send('Invalid course id');
  }
});

router.post('/addcourse', admin_middleware, async (req, res) => {
  try {
    const { course_name, course_type, description, price } = req.body;

    await course_model.create({
      course_name,
      course_type,
      description,
      price
    });

    res.status(201).send('Course added successfully');
  } catch (error) {
    console.error(error);
    res.status(400).send('Failed to add course');
  }
});


router.put('/update_course/:id', async (req, res) => {
  try {
    const updatedCourse = await course_model.findOneAndReplace(
      { _id: req.params.id },
      req.body
    );

    if (!updatedCourse) {
      return res.status(404).json({ msg: 'Invalid course id' });
    }

    res.status(200).json({
      msg: 'Course updated',
      course: updatedCourse
    });
  } catch (error) {
    console.error(error);
    res.status(400).send('Update failed');
  }
});



router.patch('/patch_price', async (req, res) => {
  try {
    const { course_id, price } = req.body;

    const course = await course_model.findByIdAndUpdate(
      course_id, price
    );

    if (!course) {
      return res.status(404).json({ msg: 'Invalid course id' });
    }

    res.status(200).json({
      msg: `Updated price to ${price}`,
      course
    });
  } catch (error) {
    console.error(error);
    res.status(400).send('Patch failed');
  }
});


router.delete('/delete', async (req, res) => {
  try {
    const { course_id } = req.body;

    const deleted = await course_model.findByIdAndDelete(course_id);

    if (!deleted) {
      return res.status(404).json({ msg: 'Invalid course id' });
    }

    res.status(200).json({ msg: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).send('Delete failed');
  }
});

export default router;
