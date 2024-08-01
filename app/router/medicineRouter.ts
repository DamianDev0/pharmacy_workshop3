import { Router } from 'express';
import { MedicineController } from '../controller/medicineController';

const medicineRouter = Router();

medicineRouter.get('/', MedicineController.getMedicines);
medicineRouter.post('/', MedicineController.createMedicine);

export default medicineRouter;
