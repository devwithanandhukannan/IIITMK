import { Router } from 'express';

const router = Router();

router.get('/all_courses', (req, res) => {
    res.status(200).send('All courses');
});

router.get('/learn_more', (req, res) => {
    res.status(200).send('Learn more page');
});

export default router;
