import express from 'express';
export const router = express.Router();
router.use(express.json());
router.get('/hola', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
