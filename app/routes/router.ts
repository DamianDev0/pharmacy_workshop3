import express from 'express';
import medicineRouter from '../router/medicineRouter';
import patientRouter from '../router/patientsRouter'
import prescriptionRouter from '../router/prescriptionsRouter';

const router = express.Router();

router.use('/medicines', medicineRouter);
router.use('/patients', patientRouter);
router.use('/prescriptions', prescriptionRouter);

export { router };
