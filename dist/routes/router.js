import express from 'express';
import medicineRouter from '../router/medicineRouter.js';
const router = express.Router();
router.use('/medicines', medicineRouter);
export { router };
