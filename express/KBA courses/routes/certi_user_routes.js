import { Router } from "express";
const router = Router();

router.get('/view_certiapp', (req, res) => {
    res.status(200).send('view certiapp');
});

export default router