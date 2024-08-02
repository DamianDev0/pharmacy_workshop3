import express from 'express';
import medicineRouter from '../router/medicineRouter.js';
import patientRouter from '../router/patientsRouter.js';
import prescriptionRouter from '../router/prescriptionsRouter.js';
const router = express.Router();
router.use('/medicines', medicineRouter);
router.use('/patients', patientRouter);
router.use('/prescriptions', prescriptionRouter);
export { router };
