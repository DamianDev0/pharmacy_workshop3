import { Router } from "express";
import { PrescriptionController } from "../controller/prescriptionsController.js";
const prescriptionRouter = Router();
prescriptionRouter.get('/', PrescriptionController.getPrescriptions);
prescriptionRouter.post('/', PrescriptionController.createPrescription);
export default prescriptionRouter;
