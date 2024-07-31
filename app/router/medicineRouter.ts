import { Router } from 'express';
import { MedicineController } from '../controller/medicineController';

const medicineRouter = Router();

medicineRouter.get('/', MedicineController.getMedicines);

export default medicineRouter;
