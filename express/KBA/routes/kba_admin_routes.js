import { Router } from 'express';
import authmiddleware from '../middleware/auth.js';
import { courses } from '../map.js';

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

router.post('/addcourse', authmiddleware, (req, res) => {
    if (req.role === 'admin') {
        try {
            const { course_name, course_id, course_type, description, price } = req.body;
            console.log(course_name, course_id, course_type, description, price);
            if (courses.has(course_id)) {
                return res.send('course id already existed')
            } else {
                courses.set(course_id, { course_name, course_type, description, price })
                return res.status(201).send('course added successfully')
            }
        } catch (error) {
            console.error(error);
            res.status(400).send('Something went wrong!');
        }
    } else {
        res.status(401).send('admin access only')
    }

});

export default router;
