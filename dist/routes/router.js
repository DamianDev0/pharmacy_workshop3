import express from 'express';
import medicineRouter from '../router/medicineRouter.js';
import patientRouter from '../router/patientsRouter.js';
const router = express.Router();
router.use('/medicines', medicineRouter);
router.use('/patients', patientRouter);
export { router };
