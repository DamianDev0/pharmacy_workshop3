import { Router } from 'express';
import { MedicineController } from '../controller/medicineController.js';
const medicineRouter = Router();
medicineRouter.get('/', MedicineController.obtenerMedicamentos);
export default medicineRouter;
