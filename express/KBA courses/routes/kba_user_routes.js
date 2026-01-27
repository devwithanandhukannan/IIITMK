import { Router } from 'express';
import user_middleware from '../middleware/user_auth.js';

const router = Router();

router.get('/all_courses', user_middleware, (req, res) => {
    res.status(200).send('All courses');
});

router.get('/learn_more', user_middleware, (req, res) => {
    res.status(200).send('Learn more page');
});

export default router;
