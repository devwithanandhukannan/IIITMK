import { Router } from "express";

const router = Router();

router.get('/issue', (req, res) => {
    res.status(200).send('Issue certificate');
});

export default router