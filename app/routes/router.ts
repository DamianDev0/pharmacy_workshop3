import express from 'express';
import medicineRouter from '../router/medicineRouter';
import patientRouter from '../router/patientsRouter'

const router = express.Router();

router.use('/medicines', medicineRouter);
router.use('/patients', patientRouter);

export { router };
