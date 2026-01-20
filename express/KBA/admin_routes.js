import { Router } from 'express';

const router = Router();

router.get('/all_courses', (req, res) => {
    res.status(200).send('All courses');
});

router.put('/update_course', (req, res) => {
    try {
        const { course_name, course_id, course_type, description, price } = req.body;
        console.log(course_name, course_id, course_type, description, price);
        res.status(200).send('Updated!');
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong!');
    }
});

router.post('/addcourse', (req, res) => {
    try {
        const { course_name, course_id, course_type, description, price } = req.body;
        console.log(course_name, course_id, course_type, description, price);
        res.status(201).send('Inserted!');
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong!');
    }
});

export default router;
